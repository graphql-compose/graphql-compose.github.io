---
id: version-5.12.0-TypeMapper
title: TypeMapper
original_id: TypeMapper
---

Type storage and type generator from `Schema Definition Language` (`SDL`). This is slightly rewritten [buildASTSchema](https://github.com/graphql/graphql-js/blob/master/src/utilities/buildASTSchema.js) utility from `graphql-js` that allows to create type from a string (SDL).

## Properties

### schemaComposer

Current `SchemaComposer` instance which is used for getting types by name for type creation via SDL.

```js
static schemaComposer: SchemaComposer;
```

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

## Internal type definitions

Flowtype definitions which are used in this class.

### TypeDefinitionString

```js
type TypeDefinitionString = string; // eg type Name { field: Int }
```

### TypeWrappedString

```js
type TypeWrappedString = string; // eg. Int, Int!, [Int]
```

### TypeNameString

```js
type TypeNameString = string; // eg. Int, Float
```

### TypeAsString

```js
type TypeAsString = TypeDefinitionString | TypeWrappedString | TypeNameString;
```