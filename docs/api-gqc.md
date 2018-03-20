---
id: api-gqc
title: GQC
---

This is `GraphQLSchema` builder.

* creates `Query` and `Mutation` types
* provide `buildSchema()` method for obtaining `GraphQLSchema`
* remove types without fields

```js
import { GQC } from 'graphql-compose';
import { CityTC } from './city';

GQC.rootQuery().addFields({
  city: CityTC.get('$findOne'),
  cityConnection: CityTC.get('$connection'),
  currentTime: {
    type: 'Date',
    resolve: () => Date.now(),
  },
  // ...
});

GQC.rootMutation().addFields({
  createCity: CityTC.get('$createOne'),
  updateCity: CityTC.get('$updateById'),
  // ...
});

export default GQC.buildSchema(); // exports GraphQLSchema
```
