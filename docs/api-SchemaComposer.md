---
id: api-SchemaComposer
title: SchemaComposer
---

This is `GraphQLSchema` builder.

* creates `Query` and `Mutation` types
* provide `buildSchema()` method for obtaining `GraphQLSchema`
* remove types without fields

```js
import { schemaComposer } from 'graphql-compose';
import { CityTC } from './city';

schemaComposer.rootQuery().addFields({
  city: CityTC.get('$findOne'),
  cityConnection: CityTC.get('$connection'),
  currentTime: {
    type: 'Date',
    resolve: () => Date.now(),
  },
  // ...
});

schemaComposer.rootMutation().addFields({
  createCity: CityTC.get('$createOne'),
  updateCity: CityTC.get('$updateById'),
  // ...
});

export default schemaComposer.buildSchema(); // exports GraphQLSchema
```
