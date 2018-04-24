---
id: api-EnumTypeComposer
title: EnumTypeComposer
---

Class that gets `GraphQLEnumType` and provide ability to change them

* get and check presence of fields
* add, remove, extend fields
* clone type with new name
* create types with `GraphQL Schema Language`

```js
// creating EnumTypeComposer from GraphQLEnumType
const RgbETC = new EnumTypeComposer(
  new GraphQLEnumType({
    name: 'RGB',
    values: {
      RED: { value: 0 },
      GREEN: { value: 1 },
      BLUE: { value: 2 },
    },
  })
);

// creating EnumTypeComposer via series of methods
const RgbETC = EnumTypeComposer.create('RGB'); // create RGB without fields
RgbETC.addFields({
  RED: { value: 0 },
  GREEN: { value: 1 },
  BLUE: { value: 2 },
});

// creating TypeComposer from `GraphQL schema language`
const RgbETC = TypeComposer.create(`enum RGB { RED GREEN BLUE }`);

RgbETC.getFieldNames(); // ['RED', 'GREEN', 'BLUE']
RgbETC.getField('RED'); // return GraphQLEnumValueConfig
RgbETC.getFields(); // return GraphQLEnumValueConfigMap
RgbETC.setFields(GraphQLEnumValueConfigMap); // completely replace all fields
RgbETC.setField('RED', GraphQLEnumValueConfig); // replace `RED` field with new config
RgbETC.addFields(GraphQLEnumValueConfigMap); // add new fields, replace existed, rest fields keep untouched
RgbETC.hasField('RED'); // true
RgbETC.removeField('RED');
RgbETC.removeField(['RED', 'GREEN']);
RgbETC.removeOtherFields(['RED', 'GREEN']); // will remove all other fields
RgbETC.reorderFields(['GREEN', 'RED']); // reorder fields, GREEN becomes first
RgbETC.deprecateFields({ 'RED': 'deprecation reason' }); // mark field as deprecated
RgbETC.extendField('GREEN', {
  description: 'Green color',
});
RgbETC.getType(); // GraphQLEnumType({ name: 'RGB', ...})
RgbETC.getTypePlural(); // new GraphQLList(GraphQLEnumType(...))
RgbETC.getTypeNonNull()); // new GraphQLNonNull(GraphQLObjectType(...))
RgbETC.getTypeName(); // RGB
RgbETC.setTypeName('RGBRenamed');
RgbETC.setDescription('Enum with colors');
RgbETC.getDescription(); // 'Enum with colors'
RgbETC.clone('newEnum'); // new EnumTypeComposer with cloned fields
```
