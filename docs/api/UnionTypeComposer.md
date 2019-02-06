---
id: UnionTypeComposer
title: UnionTypeComposer
---

Class that helps to create `UnionTypeComposer`s and provide ability to modify them.

## Static methods

### static create()

Create `UnionTypeComposer` with adding it by name to the `SchemaComposer`.

```js
static create<TSrc = any, TCtx = any>(
  typeDef:
    | TypeAsString
    | ComposeUnionTypeConfig<any, TContext>,
): UnionTypeComposer<TSrc, TCtx>
```

### static createTemp()

Create `UnionTypeComposer` without adding it to the `SchemaComposer`. This method may be usefull in plugins, when you need to create type temporary.

```js
static createTemp<TCtx>(
  opts:
    | TypeAsString
    | ComposeUnionTypeConfig<any, TContext>,
): UnionTypeComposer<TSrc, TCtx>
```

## Properties

### schemaComposer

Current `SchemaComposer` instance which is used for storing types created by `UnionTypeComposer`.

```js
SomeUTC.schemaComposer: SchemaComposer
```

## Union Types methods

### hasType()

```js
hasType(
  name: string
): boolean
```

### getTypes()

```js
getTypes(): ComposeTypesArray
```

### getTypeNames()

```js
getTypeNames(): string[]
```

### setTypes()

```js
setTypes(
  types: ComposeTypesArray
): this
```

### addType()

```js
addType(
  type: ComposeObjectType
): this
```

### removeType()

```js
removeType(
  nameOrArray: string | string[]
): this
```

### removeOtherTypes()

```js
removeOtherTypes(
  nameOrArray: string | string[]
): this
```

## Type methods

### getType()

```js
getType(): GraphQLUnionType
```

### getTypePlural()

```js
getTypePlural(): GraphQLList<GraphQLUnionType>
```

### getTypeNonNull()

```js
getTypeNonNull(): GraphQLNonNull<GraphQLUnionType>
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
  newTypeName: string
): this
```

## ResolveType methods

### getResolveType()

```js
getResolveType(): GraphQLTypeResolver<any, TContext> | null | void
```

### setResolveType()

```js
setResolveType(
  fn: GraphQLTypeResolver<any, TContext> | null | void,
): this
```

### hasTypeResolver()

```js
hasTypeResolver(
  type: TypeComposer<any, TContext> | GraphQLObjectType,
): boolean
```

### getTypeResolvers()

```js
getTypeResolvers(): UnionTypeResolversMap<TSource, TContext>
```

### getTypeResolverCheckFn()

```js
getTypeResolverCheckFn(
  type: TypeComposer<any, TContext> | GraphQLObjectType,
): UnionTypeResolverCheckFn<any, TContext>
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
  typeResolversMap: UnionTypeResolversMap<any, TContext>,
): this
```

### addTypeResolver()

```js
addTypeResolver(
  type: TypeComposer<any, TContext> | GraphQLObjectType,
  checkFn: UnionTypeResolverCheckFn<any, TContext>,
): this
```

### removeTypeResolver()

```js
removeTypeResolver(
  type: TypeComposer<any, TContext> | GraphQLObjectType,
): this
```

## Internal type definitions

Flowtype definitions which are used in this class.

### GraphQLUnionTypeExtended<TSource, TContext>

```js
type GraphQLUnionTypeExtended<TSource, TContext> = GraphQLUnionType & {
  _gqcTypeMap: Map<string, ComposeObjectType>;
  _gqcTypeResolvers?: UnionTypeResolversMap<TSource, TContext>;
};
```

### ComposeTypesArray

```js
type ComposeTypesArray = ComposeObjectType[];
```

### UnionTypeResolversMap<TSource, TContext>

```js
type UnionTypeResolversMap<TSource, TContext> = Map<
  ComposeObjectType,
  UnionTypeResolverCheckFn<TSource, TContext>
>;
```

### MaybePromise<T>

```js
type MaybePromise<T> = Promise<T> | T;
```

### UnionTypeResolverCheckFn<TSource, TContext>

```js
type UnionTypeResolverCheckFn<TSource, TContext> = (
  value: TSource,
  context: TContext,
  info: GraphQLResolveInfo,
) => MaybePromise<boolean | null | undefined>;
```

### ComposeUnionTypeConfig<TSource, TContext>

```js
type ComposeUnionTypeConfig<TSource, TContext> = {
  name: string;
  types?: Thunk<ComposeTypesArray>;
  resolveType?: GraphQLTypeResolver<TSource, TContext> | null;
  description?: string | null;
};
```

### UnionTypeComposerDefinition<TContext>

```js
type UnionTypeComposerDefinition<TContext> =
  | TypeAsString
  | ComposeUnionTypeConfig<any, TContext>;
```