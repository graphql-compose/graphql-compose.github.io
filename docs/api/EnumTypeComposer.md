---
id: EnumTypeComposer
title: EnumTypeComposer
---

`EnumTypeComposer` is a class which helps to create and modify `GraphQLEnumType`.

## Static methods

### static create()

Create `EnumTypeComposer` with adding it by name to the `SchemaComposer`. This type became avaliable in SDL by its name.

```js
static create(
  opts: TypeAsString | GraphQLEnumTypeConfig | GraphQLEnumType
): EnumTypeComposer
```

### static createTemp()

Create `EnumTypeComposer` without adding it to the `SchemaComposer`. This method may be usefull in plugins, when you need to create type temporary.

```js
static createTemp(
  opts: TypeAsString | GraphQLEnumTypeConfig | GraphQLEnumType
): EnumTypeComposer
```

## Properties

### schemaComposer

Current `SchemaComposer` instance which is used for storing types created by `EnumTypeComposer`.

```js
SomeETC.schemaComposer: SchemaComposer;
```

## Value methods

For similar naming with `TypeComposer` and `InputTypeComposer` for working with Enum values used methods with name `*field*` instead of `*value*`.

### hasField()

```js
hasField(
  name: string
): boolean
```

### getFields()

```js
getFields(): GraphQLEnumValueConfigMap
```

### getField()

```js
getField(
  name: string
): GraphQLEnumValueConfig;
```

### getFieldNames()

```js
getFieldNames(): Array<string>;
```

### setFields()

Completely replace all values in the type with a new set.

```js
setFields(
  values: GraphQLEnumValueConfigMap
): EnumTypeComposer;
```

### setField()

```js
setField(
  name: string,
  valueConfig: GraphQLEnumValueConfig
): EnumTypeComposer;
```

### addFields()

Add new fields or replace existed, rest fields keep untouched.

```js
addFields(
  newValues: GraphQLEnumValueConfigMap
): EnumTypeComposer;
```

### removeField()

Remove one value by its name, or by array of field names.

```js
removeField(
  nameOrArray: string | Array<string>
): EnumTypeComposer;
```

### removeOtherFields()

Keep only provided fields in type, other fields will be removed.

```js
removeOtherFields(
  fieldNameOrArray: string | Array<string>
): EnumTypeComposer;
```

### reorderFields()

```js
reorderFields(
  names: Array<string>
): EnumTypeComposer;
```

### extendField()

```js
extendField(
  name: string,
  partialValueConfig: $Shape<GraphQLEnumValueConfig>
): EnumTypeComposer;
```

### deprecateFields()

Mark value or map of values as deprecated

```js
deprecateFields(
  fields: { [fieldName: string]: string } | Array<string> | string
): EnumTypeComposer
```

## Type methods

### getType()

```js
getType(): GraphQLEnumType;
```

### getTypePlural()

```js
getTypePlural(): GraphQLList<GraphQLEnumType>;
```

### getTypeNonNull()

```js
getTypeNonNull(): GraphQLNonNull<GraphQLEnumType>;
```

### getTypeName()

```js
getTypeName(): string;
```

### setTypeName()

```js
setTypeName(
  name: string
): EnumTypeComposer;
```

### getDescription()

```js
getDescription(): string;
```

### setDescription()

```js
setDescription(
  description: string
): EnumTypeComposer;
```

### clone()

Create a new Enum type with provided name.

```js
clone(
  newTypeName: string
): EnumTypeComposer;
```
