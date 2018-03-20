---
id: api-typecomposer
title: TypeComposer
---

Main class that gets `GraphQLObjectType` (complex **output** type with fields) and provide ability to change them

* get and check presence of fields and interfaces
* add, remove, extend fields
* add relations with other types
* clone type with new name
* manipulate type interfaces
* produce input object type
* keep list of `Resolver`s methods for quering/updating data
* create output types with `GraphQL schema language`

```js
// creating TypeComposer from GraphQLObjectType
const LonLatTC = new TypeComposer(
  new GraphQLObjectType({
    name: 'LonLat',
    fields: {
      lon: {
        type: GraphQLFloat,
      },
      lat: {
        type: GraphQLFloat,
      },
    },
  })
);

// creating TypeComposer via series of methods
const LonLatTC = TypeComposer.create('LonLat'); // create LonLat without fields
LonLatTC.addFields({
  // short field definition
  lon: 'Float', // or may set GraphQLFloat
  // extended field definition
  lat: {
    type: GraphQLFloat, // or may set 'Float'
    resolve: () => {},
    description: 'Latitude',
  }
});

// creating TypeComposer from `GraphQL schema language`
const LonLatTC = TypeComposer.create(`type LonLat { lon: Float, lat: Float }`);

LonLatTC.getFieldNames(); // ['lon', 'lat']
LonLatTC.getField('lon'); // return GraphQLFieldConfig
LonLatTC.getFields(); // { lon: GraphQLFieldConfig, lat: GraphQLFieldConfig }
LonLatTC.setFields(GraphQLFieldMapConfig); // completely replace all fields
LonLatTC.setField('lon', GraphQLFieldConfig); // replace `lon` field with new FieldConfig
LonLatTC.addFields(GraphQLFieldMapConfig); // add new fields, replace existed, rest fields keep untouched
LonLatTC.hasField('lon'); // true
LonLatTC.removeField('lon');
LonLatTC.removeField(['lon', 'field2', 'field3']);
LonLatTC.removeOtherFields(['lon', 'lat']); // will remove all other fields
LonLatTC.reorderFields(['lat', 'lon']); // reorder fields, lat becomes first
LonLatTC.getField('lon'); // undefined
LonLatTC.deprecateFields({ 'lat': 'deprecation reason' }); // mark field as deprecated
LonLatTC.extendField('lat', {
  description: 'Latitude',
  resolve: (source) => (source.lat ? source.lat : 61.1),
});
LonLatTC.getFieldType('lat'); // GraphQLFloat
LonLatTC.getFieldTC('complexField'); // TypeComposer
LonLatTC.makeFieldNonNull(['lat', 'lon']); // wrap fields by GraphQLNonNull
LonLatTC.makeFieldNullable(['lat', 'lon']); // unwrap fields from GraphQLNonNull
LonLatTC.getType(); // GraphQLObjectType({ name: 'LonLat', ...})
LonLatTC.getTypePlural(); // new GraphQLList(GraphQLObjectType({ name: 'LonLat', ...}))
LonLatTC.getTypeNonNull()); // new GraphQLNonNull(GraphQLObjectType({ name: 'LonLat', ...}))
LonLatTC.getTypeName(); // LonLat
LonLatTC.setTypeName('LonLatRenamed');
LonLatTC.setDescription('Object type with Longitude and Latitude');
LonLatTC.getDescription(); // 'Object type with Longitude and Latitude'
LonLatTC.clone('newTypeName'); // new TypeComposer with cloned fields and resolvers
LonLatTC.get('dotted.path'); // described below in `typeByPath` section
LonLatTC.getFieldArgs('lat'); // returns map of args config or empty {} if no args
LonLatTC.hasFieldArg('lat', 'arg1'); // false
LonLatTC.getFieldArg('lat', 'arg1'); // returns arg config
LonLatTC.addRelation('facilities', { // add relation with some other TypeComposer
  resolver: () => FacilitiesTC.getResolver('findMany'),
  prepareArgs: {
    filter: (source) => ({ lon: source.lon, lat: source.lat }),
    limit: 100,
  },
  projection: { lon: true, lat: true },
})

// And bunch of other methods (which will be described in future):
// getInterfaces
// setInterfaces
// hasInterface
// addInterface
// removeInterface
//
// getInputType
// getInputTypeComposer
//
// getResolvers
// hasResolver
// getResolver
// setResolver
// addResolver
// removeResolver
// wrapResolver('updateById', resolver => { /* some manipulations w/ resolver */ });
// wrapResolverAs('updateByIdExtended', 'updateById', resolver => { /* some manipulations w/ resolver */ });
// wrapResolverResolve('updateById', next => rp => { /* custom logic for wrapping resolver */ return next(rp); });
//
// setRecordIdFn
// hasRecordIdFn
// getRecordIdFn
// getRecordId
```
