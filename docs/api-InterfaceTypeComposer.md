---
id: api-InterfaceTypeComposer
title: InterfaceTypeComposer
---

Class that helps to create `GraphQLInterfaceType`s and provide ability to modify them.

## Static methods

### static create()

Create `InterfaceTypeComposer` with adding it by name to the `SchemaComposer`.

```js
static create<TCtx>(
  opts:
    | TypeAsString
    | ComposeInterfaceTypeConfig<any, TCtx>
    | GraphQLInterfaceType
): InterfaceTypeComposer<TCtx>
```

### static createTemp()

Create `InterfaceTypeComposer` without adding it to the `SchemaComposer`. This method may be usefull in plugins, when you need to create type temporary.

```js
static createTemp<TCtx>(
  opts:
    | TypeAsString
    | ComposeInterfaceTypeConfig<any, TCtx>
    | GraphQLInterfaceType
): InterfaceTypeComposer<TCtx>
```

## Properties

### schemaComposer

Current `SchemaComposer` instance which is used for storing types created by `InterfaceTypeComposer`.

```js
SomeIFTC.schemaComposer: SchemaComposer
```

## Field methods

### hasField()

```js
hasField(
  name: string
): boolean
```

### getFields()

```js
getFields(): ComposeFieldConfigMap<any, TContext>
```

### getField()

```js
getField(
  name: string
): ComposeFieldConfig<any, TContext>
```

### getFieldNames()

```js
getFieldNames(): string[]
```

### setFields()

```js
setFields(
  fields: ComposeFieldConfigMap<any, TContext>
): InterfaceTypeComposer<TContext>
```

### setFields()

```js
setFields(
  fields: ComposeFieldConfigMap<any, TContext>
): InterfaceTypeComposer<TContext>
```

### setField()

```js
setField(
  name: string,
  fieldConfig: ComposeFieldConfig<any, TContext>
): InterfaceTypeComposer<TContext>
```

### addFields()

Add new fields or replace existed in a GraphQL type

```js
addFields(
  newValues: ComposeFieldConfigMap<any, TContext>
): InterfaceTypeComposer<TContext>
```

### removeField()

```js
removeField(
  nameOrArray: string | string[]
): InterfaceTypeComposer<TContext>
```

### removeOtherFields()

```js
removeOtherFields(
  fieldNameOrArray: string | string[]
): InterfaceTypeComposer<TContext>
```

### reorderFields()

```js
reorderFields(
  names: string[]
): InterfaceTypeComposer<TContext>
```

### extendField()

```js
extendField(
  fieldName: string,
  parialFieldConfig: ComposeFieldConfig<any, TContext>
): InterfaceTypeComposer<TContext>
```

### isFieldNonNull()

```js
isFieldNonNull(
  fieldName: string
): boolean
```

### getFieldConfig()

```js
getFieldConfig(
  fieldName: string
): GraphQLFieldConfig<any, TContext>
```

### getFieldType()

```js
getFieldType(
  fieldName: string
): GraphQLOutputType
```

### getFieldTC()

```js
getFieldTC(
  fieldName: string
): TypeComposer<TContext>
```

### makeFieldNonNull()

```js
makeFieldNonNull(
  fieldNameOrArray: string | string[]
): InterfaceTypeComposer<TContext>
```

### makeFieldNullable()

```js
makeFieldNullable(
  fieldNameOrArray: string | string[]
): InterfaceTypeComposer<TContext>
```

### deprecateFields()

```js
deprecateFields(
  fields: { [fieldName: string]: string } | string[] | string
): this
```

### getFieldArgs()

```js
getFieldArgs(
  fieldName: string
): GraphQLFieldConfigArgumentMap
```

### hasFieldArg()

```js
hasFieldArg(
  fieldName: string,
  argName: string
): boolean
```

### getFieldArg()

```js
getFieldArg(
  fieldName: string,
  argName: string
): GraphQLArgumentConfig
```

### getFieldArgType()

```js
getFieldArgType(
  fieldName: string,
  argName: string
): GraphQLInputType
```

## Type methods

### getType()

```js
getType(): GraphQLInterfaceType
```

### getTypePlural()

```js
getTypePlural(): GraphQLList<GraphQLInterfaceType>
```

### getTypeNonNull()

```js
getTypeNonNull(): GraphQLNonNull<GraphQLInterfaceType>
```

### getTypeName()

```js
getTypeName(): string
```

### setTypeName()

```js
setTypeName(
  name: string
): InterfaceTypeComposer<TContext>
```

### getDescription()

```js
getDescription(): string
```

### setDescription()

```js
setDescription(
  description: string
): InterfaceTypeComposer<TContext>
```

### clone()

```js
clone(
  newTypeName: string
): InterfaceTypeComposer<TContext>
```

## ResolveType methods

### hasTypeResolver()

```js
hasTypeResolver(
  type: TypeComposer<TContext> | GraphQLObjectType
): boolean
```

### getTypeResolvers()

```js
getTypeResolvers(): InterfaceTypeResolversMap<any, TContext>
```

### getTypeResolverCheckFn()

```js
getTypeResolverCheckFn(
  type: TypeComposer<TContext> | GraphQLObjectType
): InterfaceTypeResolverCheckFn<any, TContext>
```

### getTypeResolverNames()

```js
getTypeResolverNames(): string[]
```

### getTypeResolverTypes()

```js
getTypeResolverTypes(): GraphQLObjectType[]
```

### setTypeResolvers()

```js
setTypeResolvers(
  typeResolversMap: InterfaceTypeResolversMap<any, TContext>
): InterfaceTypeComposer<TContext>
```

### addTypeResolver()

```js
addTypeResolver(
  type: TypeComposer<TContext> | GraphQLObjectType,
  checkFn: InterfaceTypeResolverCheckFn<any, TContext>
): InterfaceTypeComposer<TContext>
```

### addTypeResolver()

```js
addTypeResolver(
  type: TypeComposer<TContext> | GraphQLObjectType,
  checkFn: InterfaceTypeResolverCheckFn<any, TContext>
): InterfaceTypeComposer<TContext>
```

### removeTypeResolver()

```js
removeTypeResolver(
  type: TypeComposer<TContext> | GraphQLObjectType
): InterfaceTypeComposer<TContext>
```

## Misc methods

### get()

```js
get(
  path: string | string[]
): any
```
