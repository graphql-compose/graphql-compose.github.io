---
id: version-5.12.0-Resolver
title: Resolver
original_id: Resolver
---

The most interesting class in `graphql-compose`. The main goal of `Resolver` is to keep available resolve methods for Type and use them for building relation with other types.

## Properties

### schemaComposer

Current `SchemaComposer` instance which is used for storing types created by `Resolver`.

```js
Resolver.schemaComposer: SchemaComposer;
```

## Output type methods

### getType()

```js
getType(): GraphQLOutputType;
```

### getTypeComposer()

```js
getTypeComposer(): TypeComposer<TContext>;
```

### setType()

```js
setType(
  gqType: ComposeOutputType<TContext>
): Resolver;
```

## Args methods

### hasArg()

```js
hasArg(
  argName: string
): boolean;
```

### getArg()

```js
getArg(
  argName: string
): ComposeArgumentConfig;
```

### getArgConfig()

```js
getArgConfig(
  argName: string
): GraphQLArgumentConfig;
```

### getArgType()

```js
getArgType(
  argName: string
): GraphQLInputType;
```

### getArgTC()

```js
getArgTC(
  argName: string
): InputTypeComposer;
```

### getArgs()

```js
getArgs(): ComposeFieldConfigArgumentMap;
```

### getArgNames()

```js
getArgNames(): Array<string>;
```

### setArgs()

```js
setArgs(
  args: ComposeFieldConfigArgumentMap
): Resolver;
```

### setArg()

```js
setArg(
  argName: string,
  argConfig: ComposeArgumentConfig
): Resolver;
```

### extendArg()

```js
extendArg(
  argName: string,
  partialArgConfig: any
): Resolver;
```

### addArgs()

```js
addArgs(
  newArgs: ComposeFieldConfigArgumentMap
): Resolver;
```

### removeArg()

```js
removeArg(
  argNameOrArray: string | Array<string>
): Resolver;
```

### removeOtherArgs()

```js
removeOtherArgs(
  argNameOrArray: string | Array<string>
): Resolver;
```

### reorderArgs()

```js
reorderArgs(
  names: Array<string>
): Resolver;
```

### cloneArg()

```js
cloneArg(
  argName: string,
  newTypeName: string
): Resolver;
```

### isRequired()

```js
isRequired(
  argName: string
): boolean;
```

### makeRequired()

```js
makeRequired(
  argNameOrArray: string | Array<string>
): Resolver;
```

### makeOptional()

```js
makeOptional(
  argNameOrArray: string | Array<string>
): Resolver;
```

### addFilterArg()

```js
addFilterArg(
  opts: ResolverFilterArgConfig<TSource, TContext>
): Resolver<TSource, TContext>;
```

### addSortArg()

```js
addSortArg(
  opts: ResolverSortArgConfig<TSource, TContext>
): Resolver<TSource, TContext>;
```

## Resolve methods

### getResolve()

```js
getResolve(): ResolverRpCb<TSource, TContext>;
```

### setResolve()

```js
setResolve(
  resolve: ResolverRpCb<TSource, TContext>
): Resolver<TSource, TContext>;
```

## Wrap methods

### withMiddlewares()

```js
withMiddlewares(
  middlewares: Array<ResolverMiddleware,
): Resolver;
```

You may construct a new resolver with wrapped logic:

```js
const log = [];

const mw1 = async (resolve, source, args, context, info) => {
  log.push('m1.before');
  const res = await resolve(source, args, context, info);
  log.push('m1.after');
  return res;
};

const mw2 = async (resolve, source, args, context, info) => {
  log.push('m2.before');
  const res = await resolve(source, args, context, info);
  log.push('m2.after');
  return res;
};

const newResolver = Resolver.withMiddlewares([mw1, mw2]);
await newResolver.resolve({});

expect(log).toEqual([
  'm1.before',
  'm2.before',
  'call resolve',
  'm2.after',
  'm1.after'
]);
```

### wrap()

```js
wrap(
  cb: ResolverWrapCb<TSource, TContext> | null,
  newResolverOpts: ResolverOpts<TSource, TContext> | null
): Resolver<TSource, TContext>;
```

### wrapResolve()

```js
wrapResolve(
  cb: ResolverNextRpCb<TSource, TContext>,
  wrapperName?: string
): Resolver<TSource, TContext>;
```

### wrapArgs()

```js
wrapArgs(
  cb: ResolverWrapArgsCb,
  wrapperName?: string
): Resolver<TSource, TContext>;
```

### wrapCloneArg()

```js
wrapCloneArg(
  argName: string,
  newTypeName: string
): Resolver<TSource, TContext>;
```

### wrapType()

```js
wrapType(
  cb: ResolverWrapTypeCb,
  wrapperName?: string
): Resolver<TSource, TContext>;
```

## Misc methods

### getFieldConfig()

```js
getFieldConfig(
  opts?: { projection?: ProjectionType }
): GraphQLFieldConfig<TSource, TContext>;
```

### getKind()

```js
getKind(): ResolverKinds | null;
```

### setKind()

```js
setKind(
  kind: string
): Resolver;
```

### getDescription()

```js
getDescription(): string | null;
```

### setDescription()

```js
setDescription(
  description: string
): Resolver;
```

### get()

```js
get(
  path: string | Array<string>
): any;
```

### clone()

```js
clone(
  opts?: ResolverOpts<TSource, TContext>
): Resolver<TSource, TContext>;
```

## Debug methods

### getNestedName()

```js
getNestedName(): string;
```

### toString()

```js
toString(
  colors?: boolean
): string;
```

### setDisplayName()

```js
setDisplayName(
  name: string
): Resolver;
```

### toDebugStructure()

```js
toDebugStructure(
  colors?: boolean
): Object;
```

### debugExecTime()

```js
debugExecTime(): Resolver<TSource, TContext>;
```

### debugParams()

```js
debugParams(
  filterPaths: (string | Array<string>) | null,
  opts?: ResolveDebugOpts
): Resolver<TSource, TContext>;
```

### debugPayload()

```js
debugPayload(
  filterPaths: (string | Array<string>) | null,
  opts?: ResolveDebugOpts
): Resolver<TSource, TContext>;
```

### debug()

```js
debug(
  filterDotPaths?: {
    params?: (string | Array<string>),
    payload?: (string | Array<string>)
  },
  opts?: ResolveDebugOpts
): Resolver<TSource, TContext>;
```

## Internal type definitions

Flowtype definitions which are used in this class.

### ResolveParams<TSource, TContext>

```js
type ResolveParams<TSource, TContext> = {
  source: TSource,
  args: { [argName: string]: any },
  context: TContext,
  info: GraphQLResolveInfo,
  projection: $Shape<ProjectionType>,
  [opt: string]: any,
};
```

### ResolverKinds

```js
type ResolverKinds = 'query' | 'mutation' | 'subscription';
```

### ResolverFilterArgFn<TSource, TContext>

```js
type ResolverFilterArgFn<TSource, TContext> = (
  query: any,
  value: any,
  resolveParams: ResolveParams<TSource, TContext>
) => any;
```

### ResolverFilterArgConfig<TSource, TContext>

```js
type ResolverFilterArgConfig<TSource, TContext> = {
  +name: string,
  +type: ComposeArgumentType,
  +description?: ?string,
  +query?: ResolverFilterArgFn<TSource, TContext>,
  +filterTypeNameFallback?: string,
  +defaultValue?: any,
};
```

### ResolverSortArgFn<TSource, TContext>

```js
type ResolverSortArgFn<TSource, TContext> = (
  resolveParams: ResolveParams<TSource, TContext>
) => mixed;
```

### ResolverSortArgConfig<TSource, TContext>

```js
type ResolverSortArgConfig<TSource, TContext> = {
  name: string,
  sortTypeNameFallback?: string,
  // value also can be an `Object`, but flow does not understande union with object and function
  // see https://github.com/facebook/flow/issues/1948
  value:
    | { [key: string]: any }
    | ResolverSortArgFn<TSource, TContext>
    | string
    | number
    | boolean
    | Array<any>,
  deprecationReason?: ?string,
  description?: ?string,
};
```

### ResolverOpts<TSource, TContext>

```js
type ResolverOpts<TSource, TContext> = {|
  type?: ComposeOutputType<TContext>,
  resolve?: ResolverRpCb<TSource, TContext>,
  args?: ComposeFieldConfigArgumentMap,
  name?: string,
  displayName?: string,
  kind?: ResolverKinds,
  description?: string,
  parent?: Resolver<TSource, TContext>,
|};
```

### ResolverWrapCb<TSource, TContext>

```js
type ResolverWrapCb<TSource, TContext> = (
  newResolver: Resolver<TSource, TContext>,
  prevResolver: Resolver<TSource, TContext>
) => Resolver<TSource, TContext>;
```

### ResolverRpCb<TSource, TContext>

```js
type ResolverRpCb<TSource, TContext> = (
  resolveParams: $Shape<ResolveParams<TSource, TContext>>
) => Promise<any> | any;
```

### ResolverNextRpCb<TSource, TContext>

```js
type ResolverNextRpCb<TSource, TContext> = (
  next: ResolverRpCb<TSource, TContext>
) => ResolverRpCb<TSource, TContext>;
```

### ResolverWrapArgsCb

```js
type ResolverWrapArgsCb = (
  prevArgs: GraphQLFieldConfigArgumentMap
) => ComposeFieldConfigArgumentMap;
```

### ResolverWrapTypeCb

```js
type ResolverWrapTypeCb<TContext> = (
  prevType: GraphQLOutputType
) => ComposeOutputType<TContext>;
```

### ResolveDebugOpts

```js
type ResolveDebugOpts = {
  showHidden?: boolean,
  depth?: number,
  colors?: boolean,
};
```
