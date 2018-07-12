---
id: api-TypeComposer
title: TypeComposer
---

Main class that gets `GraphQLObjectType` and provide ability to change them.

## Static methods

### static schemaComposer

Current `SchemaComposer` instance which is used for storing types created by `TypeComposer`.

```js
static schemaComposer: SchemaComposer;
```

### static create()

Create `TypeComposer` with adding it by name to the `SchemaComposer`.

```js
static create<TCtx>(
  opts:
    | TypeAsString
    | ComposeObjectTypeConfig<any, TCtx>
    |  GraphQLObjectType
): TypeComposer<TCtx>;
```

### static createTemp()

Create `TypeComposer` without adding it to the `SchemaComposer`. This method may be usefull in plugins, when you need to create type temporary.

```js
static createTemp<TCtx>(
  opts:
    | TypeAsString
    | ComposeObjectTypeConfig<any, TCtx>
    | GraphQLObjectType
): TypeComposer<TCtx>;
```

## Field methods

### getFields()

```js
getFields(): GraphQLFieldConfigMap<any, TContext>;
```

### getFieldNames()

```js
getFieldNames(): Array<string>;
```

### setFields()

```js
setFields(
  fields:
    | ComposeFieldConfigMap<any, TContext>
    | GraphQLFieldConfigMap<any, TContext>
): TypeComposer;
```

### hasField()

```js
hasField(
  fieldName: string
): boolean;
```

### setField()

```js
setField<TSource, TContext>(
  fieldName: string,
  fieldConfig: ComposeFieldConfig<TSource, TContext>
): TypeComposer;
```

### addFields()

Add new fields or replace existed in a GraphQL type.

```js
addFields(
  newFields: ComposeFieldConfigMap<any, TContext>
): TypeComposer;
```

### addNestedFields()

Add new fields or replace existed (where field name may have dots).

```js
addNestedFields(
  newFields: ComposeFieldConfigMap<any, TContext>
): TypeComposer;
```

### getField()

Get fieldConfig by name.

```js
getField(
  fieldName: string
): ComposeFieldConfig<any, TContext>;
```

### removeField()

```js
removeField(
  fieldNameOrArray: string | Array<string>
): TypeComposer;
```

### removeOtherFields()

```js
removeOtherFields(
  fieldNameOrArray: string | Array<string>
): TypeComposer;
```

### extendField()

```js
extendField(
  fieldName: string,
  parialFieldConfig: ComposeFieldConfig<any, TContext>
): TypeComposer;
```

### reorderFields()

```js
reorderFields(
  names: Array<string>
): TypeComposer;
```

### getFieldConfig()

```js
getFieldConfig(
  fieldName: string
): GraphQLFieldConfig<any, TContext>;
```

### getFieldType()

```js
getFieldType(
  fieldName: string
): GraphQLOutputType;
```

### getFieldTC()

```js
getFieldTC(
  fieldName: string
): TypeComposer<TContext>;
```

### isFieldNonNull()

```js
isFieldNonNull(
  fieldName: string
): boolean;
```

### makeFieldNonNull()

```js
makeFieldNonNull(
  fieldNameOrArray: string | Array<string>
): TypeComposer<TContext>;
```

### makeFieldNullable()

```js
makeFieldNullable(
  fieldNameOrArray: string | Array<string>
): TypeComposer<TContext>;
```

### deprecateFields()

```js
deprecateFields(
  fields:
    | { [fieldName: string]: string }
    | Array<string>
    | string
): TypeComposer<TContext>;
```

### getFieldArgs()

```js
getFieldArgs(
  fieldName: string
): GraphQLFieldConfigArgumentMap;
```

### hasFieldArg()

```js
hasFieldArg(
  fieldName: string,
  argName: string
): boolean;
```

### getFieldArg()

```js
getFieldArg(
  fieldName: string,
  argName: string
): GraphQLArgumentConfig;
```

### getFieldArgType()

```js
getFieldArgType(
  fieldName: string,
  argName: string
): GraphQLInputType;
```

## Type methods

### getType()

```js
getType(): GraphQLObjectType;
```

### getTypePlural()

```js
getTypePlural(): GraphQLList<GraphQLObjectType>;
```

### getTypeNonNull()

```js
getTypeNonNull(): GraphQLNonNull<GraphQLObjectType>;
```

### getTypeName()

```js
getTypeName(): string;
```

### setTypeName()

```js
setTypeName(
  name: string
): TypeComposer<TContext>;
```

### getDescription()

```js
getDescription(): string;
```

### setDescription()

```js
setDescription(
  description: string
): TypeComposer<TContext>;
```

### clone()

```js
clone(
  newTypeName: string
): TypeComposer<TContext>;
```

## InputType methods

### getInputType()

```js
getInputType(): GraphQLInputObjectType;
```

### hasInputTypeComposer()

```js
hasInputTypeComposer(): boolean;
```

### getInputTypeComposer()

```js
getInputTypeComposer(): InputTypeComposer;
```

### getITC()

An alias for `getInputTypeComposer`.

```js
getITC(): InputTypeComposer;
```

## Resolver methods

### getResolvers()

```js
getResolvers(): Map<string, Resolver<any, TContext>>;
```

### hasResolver()

```js
hasResolver(
  name: string
): boolean;
```

### getResolver()

```js
getResolver(
  name: string
): Resolver<any, TContext>;
```

### setResolver()

```js
setResolver(
  name: string,
  resolver: Resolver<any, TContext>
): TypeComposer;
```

### addResolver()

```js
addResolver(
  resolver:
    | Resolver<any, TContext>
    | ResolverOpts<any, TContext>
): TypeComposer;
```

### removeResolver()

```js
removeResolver(
  resolverName: string
): TypeComposer;
```

### wrapResolver()

```js
wrapResolver(
  resolverName: string,
  cbResolver: ResolverWrapCb<any, TContext>
): TypeComposer;
```

### wrapResolverAs()

```js
wrapResolverAs(
  resolverName: string,
  fromResolverName: string,
  cbResolver: ResolverWrapCb<any, TContext>
): TypeComposer;
```

### wrapResolverResolve()

```js
wrapResolverResolve(
  resolverName: string,
  cbNextRp: ResolverNextRpCb<any, TContext>
): TypeComposer;
```

## Interface methods

### getInterfaces()

```js
getInterfaces(): Array<InterfaceTypeComposer | GraphQLInterfaceType>;
```

### setInterfaces()

```js
setInterfaces(
  interfaces: Array<InterfaceTypeComposer | GraphQLInterfaceType>
): TypeComposer;
```

### hasInterface()

```js
hasInterface(
  interfaceObj: InterfaceTypeComposer | GraphQLInterfaceType
): boolean;
```

### addInterface()

```js
addInterface(
  interfaceObj: InterfaceTypeComposer | GraphQLInterfaceType
): TypeComposer;
```

### removeInterface()

```js
removeInterface(
  interfaceObj: InterfaceTypeComposer | GraphQLInterfaceType
): TypeComposer;
```

## Misc methods

### addRelation()

```js
addRelation(
  fieldName: string,
  relationOpts: RelationOpts<any, TContext>
): TypeComposer;
```

### getRelations()

```js
getRelations(): RelationThunkMap<any, TContext>;
```

### setRecordIdFn()

```js
setRecordIdFn(
  fn: GetRecordIdFn<any, TContext>
): TypeComposer;
```

### hasRecordIdFn()

```js
hasRecordIdFn(): boolean;
```

### getRecordIdFn()

```js
getRecordIdFn(): GetRecordIdFn<any, TContext>;
```

### getRecordId()

Get function that returns record id, from provided object.

```js
getRecordId(
  source: any,
  args: any,
  context: TContext
): string | number;
```

### get()

```js
get(
  path:
    | string
    | Array<string>
): any;
```
