---
id: api-InputTypeComposer
title: InputTypeComposer
---

Class that get `GraphQLInputObjectType` (complex **input** type with fields) and provide ability to change it

* get and check presence of fields
* add, remove fields
* make fields required or optional (wrap/unwrap with `GraphQLNonNull`)
* clone type with new name
* create input types with `GraphQL schema language`

```js
// creating InputTypeComposer from GraphQLInputObjectType
const LonLatITC = new InputTypeComposer(
  new GraphQLInputObjectType({
    name: 'LonLatInput',
    fields: {
      lon: {
        type: new GraphQLNonNull(GraphQLFloat),
      },
      lat: {
        type: new GraphQLNonNull(GraphQLFloat),
      },
    },
  })
);

// creating TypeComposer via series of methods
const LonLatITC = InputTypeComposer.create('LonLatInput'); // create LonLat without fields
LonLatITC.addFields({
  // short field definition
  lon: 'Float!', // or may set new GraphQLNonNull(GraphQLFloat)
  // extended field definition
  lat: {
    type: new GraphQLNonNull(GraphQLFloat), // or may set 'Float!'
    description: 'Latitude',
  },
});

// creating InputTypeComposer from `GraphQL schema language`
const LonLatITC = InputTypeComposer.create(`input LonLatInput { lon: Float!, lat: Float! }`);

LonLatITC.getFieldNames(); // ['lon', 'lat']
LonLatITC.getFields(); // GraphQLInputFieldConfigMap
LonLatITC.hasField('lon'); // true
LonLatITC.setFields(GraphQLInputFieldConfigMap); // completely replace all fields
LonLatITC.setField('lon', GraphQLInputFieldConfig); // replace `lon` field
LonLatITC.addFields(GraphQLInputFieldConfigMap); // add new fields, replace existed, rest fields keep untouched
LonLatITC.getField('lon'); // GraphQLInputFieldConfig
LonLatITC.removeField('lon');
LonLatITC.removeOtherFields(['lon', 'lat']); // will remove all other fields
LonLatITC.extendField('lat', { defaultValue: 51.46, description: 'Prime Meridian' }); // override some field config values
LonLatITC.reorderFields(['lat', 'lon']); // reorder fields, lat becomes first
LonLatITC.getFieldType('lat'); // GraphQLNonNull(GraphQLFloat)
LonLatITC.getFieldTC('complexField'); // InputTypeComposer
LonLatITC.getType(); // GraphQLInputObjectType({ name: 'LonLatInput', ... })
LonLatITC.getTypeAsRequired(); // GraphQLNonNull(GraphQLInputObjectType(...))
LonLatITC.getTypeName(); // 'LonLatInput'
LonLatITC.setTypeName('LonLatRenamedInput');
LonLatITC.setDescription('Input LonLat type');
LonLatITC.getDescription(); // 'Input LonLat type'
LonLatITC.isRequired('lat'); // true
LonLatITC.makeRequired(['lat']); // wrap field type by GraphQLNonNull (if not wrapped already)
LonLatITC.makeOptional(['lat']); // unwrap from GraphQLNonNull (if not unwrapped already)
LonLatITC.clone('newInputTypeName'); // new InputTypeComposer with cloned fields
LonLatITC.get('dotted.path'); // described below in `typeByPath` section
```
