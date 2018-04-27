---
id: intro-quick-start
title: Quick Start Guide
---

This guide will help you to easily create GraphQL Schemas that covers all your needs. We'll start by giving you information on how to install Graphql Composer. After that we create Type Composer objects (GraphQLObjectTypes that are editable), edit the TypeComposers with custom fields, setup relations, and generate a schema that you can use.

At the end we'll add a relay support to the graphql.

We always try to make our documentation better, so if you have feedback on the Guide please let us know via [opening an Issue in our Github repository](https://github.com/graphql-compose/graphql-compose-docs/issues/new)

## Getting started

* [Generate TypeComposer](generate-typecomposer.html)
* [Edit TypeComposer](edit-typecomposer.html)
* [Relations](relations.html)
* [Mutations](mutations.html)
* [Generate Schema](generating-schema.html)
* [Relay support](relay.html)

[GraphQL](http://graphql.org/) – is a query language for APIs. [graphql-js](https://github.com/graphql/graphql-js) is the reference implementation of GraphQL for nodejs which introduce GraphQL type system for describing schema _(definition over configuration)_ and executes queries on the server side. [express-graphql](https://github.com/graphql/express-graphql) is a HTTP server which gets request data, passes it to `graphql-js` and returned result passes to response.

## Example

```js
// Add relation between City and Country by `countryCode` field.
CityTC.addRelation( // GraphQL relation definition
  'country',
  () => ({
    resolver: CountryTC.getResolver('findOne'),
    args: {
      filter: source => ({ code: `${source.countryCode}` }),
    },
    projection: { countryCode: true },
  })
);
```

schema.js

```js
import { GQC } from 'graphql-compose';
import { CityTC } from './city';
import { CountryTC } from './country';

GQC.rootQuery().addFields({
  cities: CityTC.getResolver('findMany'),
  country: CountryTC.getResolver('findOne'),
  currentTime: {
    type: 'Date',
    resolve: () => Date.now(),
  },
});

GQC.rootMutation().addFields({
  createCity: CityTC.getResolver('createOne'),
  updateCity: CityTC.getResolver('updateById'),
  ...adminAccess({
    removeCity: CityTC.getResolver('removeById'),
  }),
});

function adminAccess(resolvers) {
  Object.keys(resolvers).forEach(k => {
    resolvers[k] = resolvers[k].wrapResolve(next => rp => {
      // rp = resolveParams = { source, args, context, info }
      if (!rp.context.isAdmin) {
        throw new Error('You should be admin, to have access to this action.');
      }
      return next(rp);
    });
  });
  return resolvers;
}

export default GQC.buildSchema();
```
