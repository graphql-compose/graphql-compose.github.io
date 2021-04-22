---
id: version-7.x.x-understanding-relations
title: Relations between Types
original_id: understanding-relations
---

The most important part of GraphQL is a relation between types.

## Relation via FieldConfig

Assume you have `Author` and `Post` types.

```js
import { schemaComposer } from 'graphql-compose';

const AuthorTC = schemaComposer.createObjectTC({
  name: 'Author',
  fields: {
    id: 'Int!',
    firstName: 'String',
    lastName: 'String',
  },
});

const PostTC = schemaComposer.createObjectTC({
  name: 'Post',
  fields: {
    id: 'Int!',
    title: 'String',
    votes: 'Int',
    authorId: 'Int',
  },
});
```

GraphQL allows to create additional fields in your types which may provide data from another type. For example, you may add a field `posts` to the `Author` type and write a `resolve` function, so that this field will return an array of posts only for the current Author.

It can be done in the following manner:

```js
AuthorTC.addFields({
  posts: {
    type: [PostTC], // array of Posts
    resolve: (author, args, context, info) => {
      return DB.Posts.find({ authorId: author.id });
    },
  },
});
```

It's quite easy. But now let's improve our relation and add new arguments, `limit` and `skip`:

```js
AuthorTC.addFields({
  posts: {
    type: [PostTC], // array of Posts
    args: {
      limit: {
        type: 'Int',
        defaultValue: 10,
      },
      skip: 'Int',
    },
    resolve: (author, args, context, info) => {
      return DB.Posts
        .find({ authorId: author.id })
        .limit(args.limit)
        .skip(args.skip || 0);
    },
  },
});
```

What if we want provide a `filter` argument, which adds the ability to filter by creation date, and min number of votes?
That would be achieved by the following code:

```js
AuthorTC.addFields({
  posts: {
    type: [PostTC], // array of Posts
    args: {
      limit: {
        type: 'Int',
        defaultValue: 10,
      },
      skip: 'Int',
      filter: `
        input PostsFilterInput {
          createdAtMin: Date
          votesMin: Int
        }
      `,
    },
    resolve: (source, args, context, info) => {
      const criteria = { authorId: source.id };
      if (args.filter) {
        if (args.filter.createdAtMin) criteria.createdAt = { $gt: args.filter.createdAtMin };
        if (args.filter.votesMin) criteria.votes = { $gt: args.filter.votesMin };
      }
      return DB.Posts
        .find(criteria)
        .limit(args.limit)
        .skip(args.skip || 0);
    },
  },
});
```

Hm, it has become quite long. And what if you have other Types which have relations with Posts (eg. Reviewer, Reader)? Copy/pasting our `resolve` method probably is not a good idea. That's because in the future you may want to add a new `filter` property, and that would mean scanning all your code and adding additional logic in all `FieldConfigs`. So if you're met with such a problem, the next section is for you.

## Relation via Resolver

If you need to use the same FieldConfigs in different Types graphql-compose provides the **[Resolver](basics/what-is-resolver.md)** class. You may create a Resolver which will define `type`, `args` and `resolve` and reuse it everywhere you need it your Schema.

However if you put `posts` resolver in a separate file, you will face another problem

- in `Author` type you will use `criteria = { authorId: source.id }` for the resolve method;
- in `Reviewer` - `criteria = { reviewers: { $has: source.id } }` and so on.

In this case it's better to improve `args.filter` by allowing to set `authorId` and `reviewerId` via arguments:

```js
import { schemaComposer } from 'graphql-compose';

const postsResolver = schemaComposer.createResolver({
  type: [PostTC], // array of Posts
  args: {
    limit: {
      type: 'Int',
      defaultValue: 10,
    },
    skip: 'Int',
    filter: `
      input PostsFilterInput {
        createdAtMin: Date
        votesMin: Int
        authorId: ID
        reviewerId: ID
      }
    `,
  },
  resolve: (source, args, context, info) => {
    const { filter } = args;
    const criteria = {};
    if (filter) {
      if (filter.createdAtMin) criteria.createdAt = { $gt: filter.createdAtMin };
      if (filter.votesMin) criteria.votes = { $gt: filter.votesMin };
      if (filter.authorId) criteria.authorId = filter.authorId;
      if (filter.reviewerId) criteria.reviewerId = { $has: filter.reviewerId };
    }
    return DB.Posts
      .find(criteria)
      .limit(args.limit)
      .skip(args.skip || 0);
  },
});
```

And now you may create relations via `ObjectTypeComposer.addRelation` method like so:

```js
AuthorTC.addRelation('posts', {
  resolver: () => postsResolver,
  prepareArgs: {
    filter: source => ({ authorId: source.id }),
  },
  projection: { id: true },
});

ReviewerTC.addRelation('posts', {
  resolver: () => postsResolver,
  prepareArgs: {
    filter: source => ({ reviewerId: source.id }),
  },
  projection: { id: true },
});
```

## ObjectTypeComposer.addRelation()

`addRelation` method has the following arguments:

```js
ObjectTypeComposer.addRelation(
  fieldName: string,
  opts: {
    resolver: () => Resolver,
    prepareArgs?: ObjectTypeComposerRelationArgsMapper,
    projection?: ProjectionType,
    description?: string,
    deprecationReason?: string,
  })
): ObjectTypeComposer<any, any>
```

### resolver

Should be an arrow function that returns `Resolver`. Wrapping resolver in an arrow function helps solving the `hoisting` problem (when two types import each other).

### prepareArgs

At runtime we should have the ability to prepare (ie. assign a value to) the args that will be passed to Resolver.

For example our Resolver has the arguments `filter`, `limit`, `skip` and `sort`.
`prepareArgs` provides a way to set them up:

- `limit: 10` - hides `limit` arg from schema and set it equal to 10
- `filter: (source) => value` - hides `filter` arg form schema and at runtime evaluate its value
- `sort: null` - disables argument (hides it from schema and do not pass it to resolver)
- all undescribed args (like `skip`) will be avaliable in the schema and will be avaliable in query

### projection

Is a very useful option for extending requested fields in your query. It's very good practice to request from database only the fields included in our query. But sometimes we need additional fields, for example to provide the `findById` resolver with an `authorId`. For this purpose you need to use `projection`.

```js
PostTC.addRelation('author', {
  resolver: () => AuthorTC.getResolver('findById'),
  prepareArgs: {
    id: (source) => source.authorId,
  },
  projection: { authorId: true },
});
```

So when you write the query

```js
{
  post {
    author {
      firstName
    }
  }
}
```

it will be transformed to

```js
{
  post {
    author {
      firstName
    }
    authorId # <--- added by `projection` option
  }
}
```

Without `projection` the resolver would try to populate the `author` field, but `args.authorId` would be `undefined`. It would therefore be impossible for the query filter to find matching `authors` and populate the `author` field. Normally when a client wants to retrieve the `author` field in a GraphQL Query, it would also need to provide the `authorId` explicitly. By using a `projection` we lift that responsility from the client, making querying easier and less cluttered.
