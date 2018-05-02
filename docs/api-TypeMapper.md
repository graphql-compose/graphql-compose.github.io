---
id: api-TypeMapper
title: TypeMapper
---

Type storage and type generator from `GraphQL schema language`. This is slightly rewritten [buildASTSchema](https://github.com/graphql/graphql-js/blob/master/src/utilities/buildASTSchema.js) utility from `graphql-js` that allows to create type from string.

## Methods

### get()

```js
get(
  name: string
): GraphQLNamedType | null;
```

### set()

```js
set(
  name: string,
  type: GraphQLNamedType
): void;
```

### has()

```js
has(
  name: string
): boolean;
```

### getWrapped()

```js
getWrapped(
  str:
   | TypeWrappedString
   | TypeNameString
): GraphQLType | null;
```

### createType()

```js
createType(
  str: TypeDefinitionString
): GraphQLNamedType | null;
```

### parseTypesFromString()

```js
parseTypesFromString(
  str: string
): TypeStorage<GraphQLNamedType>;
```

### parseTypesFromAst()

```js
parseTypesFromAst(
  astDocument: DocumentNode
): TypeStorage<GraphQLNamedType>;
```

## Config methods

### convertOutputFieldConfig()

```js
convertOutputFieldConfig<TSource, TContext>(
  composeFC: ComposeFieldConfig<TSource, TContext>,
  fieldName?: string,
  typeName?: string
): GraphQLFieldConfig<TSource, TContext>;
```

### convertOutputFieldConfigMap()

```js
convertOutputFieldConfigMap<TSource, TContext>(
  composeFields:
    | ComposeFieldConfigMap<TSource, TContext>
    | GraphQLFieldConfigMap<TSource, TContext>,
  typeName?: string
): GraphQLFieldConfigMap<TSource, TContext>;
```

### convertArgConfig()

```js
convertArgConfig(
  omposeAC: ComposeArgumentConfig,
  argName?: string,
  fieldName?: string,
  typeName?: string
): GraphQLArgumentConfig;
```

### convertArgConfigMap()

```js
convertArgConfigMap(
  composeArgsConfigMap: ComposeFieldConfigArgumentMap,
  fieldName?: string,
  typeName?: string
): GraphQLFieldConfigArgumentMap;
```

### convertInputFieldConfig()

```js
convertInputFieldConfig(
  composeIFC: ComposeInputFieldConfig,
  fieldName?: string,
  typeName?: string
): GraphQLInputFieldConfig;
```

### convertInputFieldConfigMap()

```js
convertInputFieldConfigMap(
  composeFields: ComposeInputFieldConfigMap,
  typeName?: string
): GraphQLInputFieldConfigMap;
```
