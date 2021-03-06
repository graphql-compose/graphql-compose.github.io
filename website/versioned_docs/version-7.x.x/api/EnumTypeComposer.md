---
id: version-7.x.x-EnumTypeComposer
title: EnumTypeComposer
custom_edit_url: https://github.com/graphql-compose/graphql-compose/blob/master/src/EnumTypeComposer.d.ts
original_id: EnumTypeComposer
---

<!-- 
🛑🛑🛑
DO NOT EDIT THIS FILE!
IT WAS AUTOGENERATED FROM d.ts FILE
🛑🛑🛑
If you want to make changes in this file, please do it via
https://github.com/graphql-compose/graphql-compose/blob/master/src/EnumTypeComposer.d.ts
-->

`EnumTypeComposer` is a class which helps to create and modify `GraphQLEnumType`.

## Static methods

### static create()

```js
static create<TCtx = any>(
  typeDef: EnumTypeComposerDefinition,
  schemaComposer: SchemaComposer<TCtx>
): EnumTypeComposer<TCtx>
```

Create `EnumTypeComposer` with adding it by name to the `SchemaComposer`. This type became avaliable in SDL by its name.

### static createTemp()

```js
static createTemp<TCtx = any>(
  typeDef: EnumTypeComposerDefinition,
  schemaComposer: SchemaComposer<TCtx>
): EnumTypeComposer<TCtx>
```

Create `EnumTypeComposer` without adding it to the `SchemaComposer`. This method may be usefull in plugins, when you need to create type temporary.

## Properties

### schemaComposer

```js
schemaComposer: SchemaComposer<TContext>;
```

## Value methods

### hasField()

```js
hasField(
  name: string
): boolean
```

For similar naming with `ObjectTypeComposer` and `InputTypeComposer` for working with Enum values used methods with name `*field*` instead of `*value*`.

### getFields()

```js
getFields(): EnumTypeComposerValueConfigMap
```

### getField()

```js
getField(
  name: string
): EnumTypeComposerValueConfig
```

### getFieldNames()

```js
getFieldNames(): string[]
```

### setFields()

```js
setFields(
  values: EnumTypeComposerValueConfigMapDefinition
): this
```

Completely replace all values in the type with a new set.

### setField()

```js
setField(
  name: string,
  valueConfig: EnumTypeComposerValueConfigDefinition
): this
```

### addFields()

```js
addFields(
  newValues: EnumTypeComposerValueConfigMapDefinition
): this
```

Add new fields or replace existed, other fields keep untouched.

### removeField()

```js
removeField(
  nameOrArray: string | string[]
): this
```

Remove one value by its name, or by array of field names.

### removeOtherFields()

```js
removeOtherFields(
  fieldNameOrArray: string | string[]
): this
```

Keep only provided fields in type, other fields will be removed.

### reorderFields()

```js
reorderFields(
  names: string[]
): this
```

### extendField()

```js
extendField(
  name: string,
  partialValueConfig: Partial<EnumTypeComposerValueConfigDefinition>
): this
```

### deprecateFields()

```js
deprecateFields(
  fields: {
      [fieldName: string]: string;
  } | string[] | string
): this
```

Mark value or map of values as deprecated

## Type methods

### getType()

```js
getType(): GraphQLEnumType
```

### getTypePlural()

```js
getTypePlural(): ListComposer<this>
```

### getTypeNonNull()

```js
getTypeNonNull(): NonNullComposer<this>
```

### getTypeName()

```js
getTypeName(): string
```

### setTypeName()

```js
setTypeName(
  name: string
): this
```

### getDescription()

```js
getDescription(): string
```

### setDescription()

```js
setDescription(
  description: string
): this
```

### clone()

```js
clone(
  newTypeNameOrTC: string | EnumTypeComposer<any>
): EnumTypeComposer<TContext>
```

You may clone this type with a new provided name as string.
Or you may provide a new TypeComposer which will get all clonned
settings from this type.

### merge()

```js
merge(
  type: GraphQLEnumType | EnumTypeComposer<any>
): this
```

## Extensions methods

### getExtensions()

```js
getExtensions(): Extensions
```

### setExtensions()

```js
setExtensions(
  extensions: Extensions
): this
```

### extendExtensions()

```js
extendExtensions(
  extensions: Extensions
): this
```

### clearExtensions()

```js
clearExtensions(): this
```

### getExtension()

```js
getExtension(
  extensionName: string
): any
```

### hasExtension()

```js
hasExtension(
  extensionName: string
): boolean
```

### setExtension()

```js
setExtension(
  extensionName: string,
  value: any
): this
```

### removeExtension()

```js
removeExtension(
  extensionName: string
): this
```

### getFieldExtensions()

```js
getFieldExtensions(
  fieldName: string
): Extensions
```

### setFieldExtensions()

```js
setFieldExtensions(
  fieldName: string,
  extensions: Extensions
): this
```

### extendFieldExtensions()

```js
extendFieldExtensions(
  fieldName: string,
  extensions: Extensions
): this
```

### clearFieldExtensions()

```js
clearFieldExtensions(
  fieldName: string
): this
```

### getFieldExtension()

```js
getFieldExtension(
  fieldName: string,
  extensionName: string
): any
```

### hasFieldExtension()

```js
hasFieldExtension(
  fieldName: string,
  extensionName: string
): boolean
```

### setFieldExtension()

```js
setFieldExtension(
  fieldName: string,
  extensionName: string,
  value: any
): this
```

### removeFieldExtension()

```js
removeFieldExtension(
  fieldName: string,
  extensionName: string
): this
```

## Directive methods

### getDirectives()

```js
getDirectives(): ExtensionsDirective[]
```

### getDirectiveNames()

```js
getDirectiveNames(): string[]
```

### getDirectiveByName()

```js
getDirectiveByName(
  directiveName: string
): DirectiveArgs | void
```

### getDirectiveById()

```js
getDirectiveById(
  idx: number
): DirectiveArgs | void
```

### getFieldDirectives()

```js
getFieldDirectives(
  fieldName: string
): ExtensionsDirective[]
```

### getFieldDirectiveNames()

```js
getFieldDirectiveNames(
  fieldName: string
): string[]
```

### getFieldDirectiveByName()

```js
getFieldDirectiveByName(
  fieldName: string,
  directiveName: string
): DirectiveArgs | void
```

### getFieldDirectiveById()

```js
getFieldDirectiveById(
  fieldName: string,
  idx: number
): DirectiveArgs | void
```

## Internal type definitions

### EnumTypeComposerDefinition

```js
export type EnumTypeComposerDefinition =
  | TypeAsString
  | EnumTypeComposerAsObjectDefinition
  | GraphQLEnumType;
```

### EnumTypeComposerAsObjectDefinition

```js
export type EnumTypeComposerAsObjectDefinition = {
  name: string;
  values?: EnumTypeComposerValueConfigMapDefinition;
  description?: string | null;
  extensions?: Extensions;
};
```

### EnumTypeComposerValueConfig

```js
export type EnumTypeComposerValueConfig = {
  value: any /* T */;
  deprecationReason?: string | null;
  description?: string | null;
  astNode?: EnumValueDefinitionNode | null;
  extensions?: Extensions;
  [key: string]: any;
};
```

### EnumTypeComposerValueConfigDefinition

```js
export type EnumTypeComposerValueConfigDefinition = {
  value?: any;
  deprecationReason?: string | null;
  description?: string | null;
  extensions?: Extensions;
  [key: string]: any;
};
```

### EnumTypeComposerValueConfigMap

```js
export type EnumTypeComposerValueConfigMap = ObjMap<EnumTypeComposerValueConfig>;
```

### EnumTypeComposerValueConfigMapDefinition

```js
export type EnumTypeComposerValueConfigMapDefinition = ObjMapReadOnly<
  EnumTypeComposerValueConfigDefinition
>;
```
