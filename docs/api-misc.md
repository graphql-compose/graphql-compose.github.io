---
id: api-misc
title: [WIP] API misc
---

Graphql-compose consists from several classes and utilities. Its combination allows to create plugins or helper methods that generate or modify the graphql types.

### Utilities

Graphql-compose has several useful methods and GraphQL types.

#### Types

* `Date` - graphql scalar type that converts javascript `Date` object to string `YYYY-MM-DDTHH:MM:SS.SSSZ` and back
* `Json` - graphql scalar type that represents `JSON`. Field with this type may have arbitrary structure. Copied from @taion's [graphql-type-json](https://github.com/taion/graphql-type-json) for reducing dependencies tree.

#### toInputObjectType

Converts `GraphQLObject` type wrapped with `TypeComposer` to `GraphQLInputObjectType` wrapped with `InputTypeComposer`. Can be used in following way:

```js
import { GraphQLObjectType } from 'graphql';
import { toInputObjectType, TypeComposer, InputTypeComposer } from 'graphql-compose';

const GraphQLUserType = new GraphQLObjectType({ ... });
const UserTC = new TypeComposer(GraphQLUserType);
const UserITC = toInputObjectType(UserTC);
const GraphQLUserInput = UserITC.getType(); // returns GraphQLInputObjectType
```

#### projection

Traverse `infoAST` from GraphQL `resolve` function argument and provide `projection`, requested fields in query.

```js
import { getProjectionFromAST } from 'graphql-compose';

function resolve(source, args, context, info) {
  const projection = getProjectionFromAST(info);
  // returns something like
  // {
  //   firstname: true,
  //   lastname: true,
  //   address: {
  //     city: true,
  //     street: true,
  //   },
  // }
}
```

#### typeByPath

Traverse in depth by dot notation by type-tree and returns `TypeComposer`, `InputTypeComposer`, `Resolver` or unwrapped `GraphQLScalarType`.

```js
typeByPath(UserTC, 'lastname'); // returns GraphQLString
typeByPath(UserTC, 'address'); // returns TypeComposer(AddressGraphQLType)
typeByPath(UserTC, 'address.city'); // returns GraphQLString
typeByPath(UserTC, '$findOne'); // returns Resolver from UserTC which stored by `findOne` name
typeByPath(UserTC, '$findOne.@filter.firstname'); // get `findOne` resolver, find `filter` arg in resolver, get `firstname` field from it and return it graphql scalar type
```

Or this method can be called directly from graphql-compose main classes:

```js
TypeComposer.get('fieldName.subField'); // returns TypeComposer | GraphQLScalar
TypeComposer.get('$resolverName.@argumentName.subFieldName.subSubField'); // returns InputTypeComposer | GraphQLScalar
InputTypeComposer.get('fieldName.subField'); // returns InputTypeComposer | GraphQLScalar
Resolver.get('@argumentName'); // returns InputTypeComposer | GraphQLScalar
Resolver.get('@argumentName.subField'); // returns InputTypeComposer | GraphQLScalar
Resolver.get('fieldFromPayload'); // returns TypeComposer | GraphQLScalar
Resolver.get('fieldFromPayload.subField'); // returns TypeComposer | GraphQLScalar
```
