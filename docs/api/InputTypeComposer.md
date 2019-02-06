---
id: InputTypeComposer
title: InputTypeComposer
---

`InputTypeComposer` is a class which helps to create and modify `GraphQLInputObjectType`.

## Static methods

### static create()

Create `InputTypeComposer` with adding it by name to the `SchemaComposer`.

```js
static create(
  opts: TypeAsString |
        ComposeInputObjectTypeConfig |
        GraphQLInputObjectType
): InputTypeComposer;
```

### static createTemp()

Create `InputTypeComposer` without adding it to the `SchemaComposer`. This method may be usefull in plugins, when you need to create type temporary.

```js
static createTemp(
  opts: TypeAsString |
        ComposeInputObjectTypeConfig |
        GraphQLInputObjectType
): InputTypeComposer;
```

## Properties

### schemaComposer

Current `SchemaComposer` instance which is used for storing types created by `InputTypeComposer`.

```js
SomeITC.schemaComposer: SchemaComposer;
```

## Field methods

### getFields()

```js
getFields(): ComposeInputFieldConfigMap;
```

### getFieldNames()

```js
getFieldNames(): Array<string>;
```

### hasField()

```js
hasField(
  fieldName: string
): boolean;
```

### setFields()

```js
setFields(
  fields: ComposeInputFieldConfigMap
): InputTypeComposer;
```

### setField()

```js
setField(
  fieldName: string,
  fieldConfig: ComposeInputFieldConfig
): InputTypeComposer;
```

### addFields()

Add new fields or replace existed in a GraphQL type.

```js
addFields(
  newFields: ComposeInputFieldConfigMap
): InputTypeComposer;
```

### addNestedFields()

Add new fields or replace existed (where field name may have dots).

```js
addNestedFields(
  newFields: ComposeInputFieldConfigMap
): InputTypeComposer;
```

### getField()

Get fieldConfig by name

```js
getField(
  fieldName: string
): ComposeInputFieldConfig;
```

### removeField()

```js
removeField(
  fieldNameOrArray: string | Array<string>
): InputTypeComposer;
```

### removeOtherFields()

```js
removeOtherFields(
  fieldNameOrArray: string | Array<string>
): InputTypeComposer;
```

### extendField()

```js
extendField(
  fieldName: string,
  parialFieldConfig: ComposeInputFieldConfig
): InputTypeComposer;
```

### reorderFields()

```js
reorderFields(
  names: Array<string>
): InputTypeComposer;
```

### isFieldNonNull()

```js
isFieldNonNull(
  fieldName: string
): boolean;
```

### isRequired()

An alias for `isFieldNonNull`.

```js
isRequired(
  fieldName: string
): boolean;
```

### getFieldConfig()

```js
getFieldConfig(
  fieldName: string
): GraphQLInputFieldConfig;
```

### getFieldType()

```js
getFieldType(
  fieldName: string
): GraphQLInputType;
```

### getFieldTC()

```js
getFieldTC(
  fieldName: string
): InputTypeComposer;
```

### makeFieldNonNull()

```js
makeFieldNonNull(
  fieldNameOrArray: string | Array<string>
): InputTypeComposer;
```

### makeRequired()

An alias for makeFieldNonNull.

```js
makeRequired(
  fieldNameOrArray: string | Array<string>
): InputTypeComposer;
```

### makeFieldNullable()

```js
makeFieldNullable(
  fieldNameOrArray: string | Array<string>
): InputTypeComposer;
```

### makeOptional()

An alias for makeFieldNullable.

```js
makeOptional(
  fieldNameOrArray: string | Array<string>
): InputTypeComposer;
```

## Type methods

### getType()

```js
getType(): GraphQLInputObjectType;
```

### getTypePlural()

```js
getTypePlural(): GraphQLList<GraphQLInputObjectType>;
```

### getTypeNonNull()

```js
getTypeNonNull(): GraphQLNonNull<GraphQLInputObjectType>;
```

### getTypeName()

```js
getTypeName(): string;
```

### setTypeName()

```js
setTypeName(
  name: string
): InputTypeComposer;
```

### getDescription()

```js
getDescription(): string;
```

### setDescription()

```js
setDescription(
  description: string
): InputTypeComposer;
```

### clone()

```js
clone(
  newTypeName: string
): InputTypeComposer;
```

## Misc methods

### get()

```js
get(
  path: string | Array<string>
): any;
```

## Internal type definitions

Flowtype definitions which are used in this class.

### ComposeInputFieldConfigMap

```js
type ComposeInputFieldConfigMap = ObjMap<ComposeInputFieldConfig>;
```

### ComposeInputFieldConfig

```js
type ComposeInputFieldConfig =
  | ComposeInputFieldConfigAsObject
  | ComposeInputType
  | (() => ComposeInputFieldConfigAsObject | ComposeInputType);
```

### ComposeInputFieldConfigAsObject

```js
type ComposeInputFieldConfigAsObject = {
  type: Thunk<ComposeInputType> | GraphQLInputType,
  defaultValue?: mixed,
  description?: ?string,
  astNode?: ?InputValueDefinitionNode,
  [key: string]: any,
};
```

### ComposeInputType

```js
type ComposeInputType =
  | InputTypeComposer
  | EnumTypeComposer
  | GraphQLInputType
  | TypeAsString
  | Array<ComposeInputType>;
```

### ComposeInputObjectTypeConfig

```js
type ComposeInputObjectTypeConfig = {
  name: string,
  fields: Thunk<ComposeInputFieldConfigMap>,
  description?: ?string,
};
```
