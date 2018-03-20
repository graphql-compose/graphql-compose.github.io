---
id: api-typemapper
title: TypeMapper
---

Type storage and type generator from `GraphQL schema language`. This is slightly rewritten [buildASTSchema](https://github.com/graphql/graphql-js/blob/master/src/utilities/buildASTSchema.js) utility from `graphql-js` that allows to create type from string. Eg

```js
const LonLatGraphQLObjectType = TypeMapperInstance.createType(`
  type LonLat { lon: Float, lat: Float }
`));

const LonLatPointsGraphQLObjectType = TypeMapperInstance.createType(`
  type LonLatPoints { points: [LonLat] }
`));

const IntRangeGraphQLInputObjectType = TypeMapperInstance.createType(`
  input IntRangeInput {
    # Min required value
    min: Int!,
    # Max required value
    max: Int!
  }
`));
```

Or this method can be called directly from graphql-compose main classes:

```js
const LonLatTC = TypeComposer.create(`type LonLat { lon: Float, lat: Float }`);
const LonLatITC = TypeComposer.create(`input LonLatInput { lon: Float!, lat: Float! }`);

// BTW you may create ITC from TC
const LonLatITC2 = LonLatTC.getInputTypeComposer();
LonLatITC2.makeRequired(['lon', 'lat']);
```
