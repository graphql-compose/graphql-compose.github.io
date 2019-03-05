---
id: TypeComposer
title: TypeComposer
---

Main class that gets `GraphQLObjectType` and provide ability to change them.

## Static methods

### static create()

Create `TypeComposer` with adding it by name to the `SchemaComposer`.

```js
static create<TCtx>(
  opts:
    | TypeAsString
    | ComposeObjectTypeConfig<any, TCtx>
    | GraphQLObjectType
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

## Properties

### schemaComposer

Current `SchemaComposer` instance which is used for storing types created by `TypeComposer`.

```js
SomeTC.schemaComposer: SchemaComposer;
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

### getIsTypeOf()

```js
getIsTypeOf(): GraphQLIsTypeOfFn<any, TContext> | null | void;
```

### setIsTypeOf()

```js
type GraphQLIsTypeOfFn<TSource, TContext> = (
  source: TSource,
  context: TContext,
  info: GraphQLResolveInfo,
) => MaybePromise<boolean>;

setIsTypeOf(
  fn: GraphQLIsTypeOfFn<any, any> | null | void
): this;
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

### setInputTypeComposer()

```js
setInputTypeComposer(
  itc: InputTypeComposer
): this;
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

### removeInputTypeComposer()

```js
removeInputTypeComposer(): this;
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
  name: string,
  middlewares?: Array<ResolverMiddleware>
): Resolver<any, TContext>;

type ResolverMiddleware = (resolve, source, args, context, info) => any;
```

You may get existed Resolver with additional wrapping it by middlewares. Eg:

```js
async function authMiddleware(resolve, source, args, context, info) {
  if (somehowCheckAuthInContext(context)) {
    return resolve(source, args, context, info);
  }
  throw new Error('You must be authorized');
}

schemaComposer.Query.addFields({
  userById: UserTC.getResolver('findById', [authMiddleware]),
  userByIds: UserTC.getResolver('findByIds', [authMiddleware]),
});
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
    | {
      name: string,
      kind: 'query' | 'mutation' | 'subscription',
      type: ComposeOutputType<TContext>,
      args: ComposeFieldConfigArgumentMap,
      resolve: (resolveParams: ResolveParams<TSource, TContext>) => Promise<any> | any,
      description?: string,
    }
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
public hasInterface(
  iface: string | InterfaceTypeComposer<any, TContext> | GraphQLInterfaceType,
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

## Internal type definitions

Flowtype definitions which are used in this class.

### TypeComposerDefinition<TContext>

```js
TypeComposerDefinition<TContext> =
  | TypeAsString
  | ComposeObjectTypeConfig<any, TContext>
  | GraphQLObjectType
```

### ComposeObjectTypeConfig<TSource, TContext>

```js
type ComposeObjectTypeConfig<TSource, TContext> = {
    name: string,
    interfaces?: Thunk<GraphQLInterfaceType[] | null>,
    fields?: Thunk<ComposeFieldConfigMap<TSource, TContext>>,
    isTypeOf?: GraphQLIsTypeOfFn<TSource, TContext> | null,
    description?: string | null,
    isIntrospection?: boolean,
};
```

### ComposeFieldConfigMap<TSource, TContext>

```js
type ComposeFieldConfigMap<TSource, TContext> = ObjMap<
    ComposeFieldConfig<TSource, TContext>
>;
```

### ComposeFieldConfig<TSource, TContext>

```js
type ComposeFieldConfig<TSource, TContext> =
    | ComposeFieldConfigAsObject<TSource, TContext>
    | ComposeOutputType<TContext>
    | (() => ComposeFieldConfigAsObject<TSource, TContext> | ComposeOutputType<TContext>);
```

### GraphqlFieldConfigExtended<TSource, TContext>

```js
// extended GraphQLFieldConfig
type GraphqlFieldConfigExtended<TSource, TContext> =
    GraphQLFieldConfig<TSource, TContext> & { projection?: any };
```

### ComposeFieldConfigAsObject<TSource, TContext>

```js
type ComposeFieldConfigAsObject<TSource, TContext> = {
    type: Thunk<ComposeOutputType<TContext>> | GraphQLOutputType,
    args?: ComposeFieldConfigArgumentMap,
    resolve?: GraphQLFieldResolver<TSource, TContext>,
    subscribe?: GraphQLFieldResolver<TSource, TContext>,
    deprecationReason?: string | null,
    description?: string | null,
    astNode?: FieldDefinitionNode | null,
    [key: string]: any,
} & { $call?: void };
```

### ComposeOutputType

```js
// extended GraphQLOutputType
type ComposeOutputType<TContext> =
    | GraphQLOutputType
    | TypeComposer<TContext>
    | ScalarTypeComposer
    | EnumTypeComposer
    | TypeAsString
    | Resolver<any, TContext>
    | Array<
      | GraphQLOutputType
      | TypeComposer<TContext>
      | ScalarTypeComposer
      | EnumTypeComposer
      | TypeAsString
      | Resolver<any, TContext>
    >;
```

### ComposeArgumentType

```js
type ComposeArgumentType =
    | GraphQLInputType
    | TypeAsString
    | InputTypeComposer
    | ScalarTypeComposer
    | EnumTypeComposer
    | Array<
      | GraphQLInputType
      | TypeAsString
      | InputTypeComposer
      | ScalarTypeComposer
      | EnumTypeComposer
    >;
```

### ComposeArgumentConfigAsObject

```js
type ComposeArgumentConfigAsObject = {
    type: Thunk<ComposeArgumentType> | GraphQLInputType,
    defaultValue?: any,
    description?: string | null,
} & { $call?: void };
```

### ComposeArgumentConfig

```js
type ComposeArgumentConfig =
    | ComposeArgumentConfigAsObject
    | ComposeArgumentType
    | (() => ComposeArgumentConfigAsObject | ComposeArgumentType);
type ComposeFieldConfigArgumentMap = {
    [argName: string]: ComposeArgumentConfig,
};
```

### RelationThunkMap<TSource, TContext>

```js
type RelationThunkMap<TSource, TContext> = {
    [fieldName: string]: Thunk<RelationOpts<TSource, TContext>>,
};
```

### RelationOpts<TSource, TContext>

```js
type RelationOpts<TSource, TContext> =
    | RelationOptsWithResolver<TSource, TContext>
    | RelationOptsWithFieldConfig<TSource, TContext>;
```

### RelationOptsWithResolver<TSource, TContext>

```js
type RelationOptsWithResolver<TSource, TContext> = {
    resolver: Thunk<Resolver<TSource, TContext>>,
    prepareArgs?: RelationArgsMapper<TSource, TContext>,
    projection?: ProjectionType,
    description?: string | null,
    deprecationReason?: string | null,
    catchErrors?: boolean,
};
```

### RelationOptsWithFieldConfig<TSource, TContext>

```js
type RelationOptsWithFieldConfig<TSource, TContext> =
    ComposeFieldConfigAsObject<TSource, TContext> & { resolve: GraphQLFieldResolver<TSource, TContext> };
```

### ArgsType

```js
type ArgsType = { [argName: string]: any };
```

### RelationArgsMapperFn<TSource, TContext>

```js
type RelationArgsMapperFn<TSource, TContext> = (
    source: TSource,
    args: ArgsType,
    context: TContext,
    info: GraphQLResolveInfo) => any;
```

### RelationArgsMapper<TSource, TContext>

```js
type RelationArgsMapper<TSource, TContext> = {
    [argName: string]: | RelationArgsMapperFn<TSource, TContext>
        | null
        | void
        | string
        | number
        | any[]
        | GenericMap<any>
};
```