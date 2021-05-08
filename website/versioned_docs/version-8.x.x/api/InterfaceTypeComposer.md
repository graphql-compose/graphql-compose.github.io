---
id: version-8.x.x-InterfaceTypeComposer
title: InterfaceTypeComposer
custom_edit_url: https://github.com/graphql-compose/graphql-compose/blob/master/src/InterfaceTypeComposer.d.ts
original_id: InterfaceTypeComposer
---

<!-- 
🛑🛑🛑
DO NOT EDIT THIS FILE!
IT WAS AUTO-GENERATED FROM d.ts FILE
🛑🛑🛑
If you want to make changes in this file, please do it via
https://github.com/graphql-compose/graphql-compose/blob/master/src/InterfaceTypeComposer.d.ts
-->

Class that helps to create `GraphQLInterfaceType`s and provide ability to modify them.

## Static methods

### static create()

```js
static create<TSrc = any, TCtx = any>(
  typeDef: InterfaceTypeComposerDefinition<TSrc, TCtx>,
  schemaComposer: SchemaComposer<TCtx>
): InterfaceTypeComposer<TSrc, TCtx>
```

Create `InterfaceTypeComposer` with adding it by name to the `SchemaComposer`.

### static createTemp()

```js
static createTemp<TSrc = any, TCtx = any>(
  typeDef: InterfaceTypeComposerDefinition<TSrc, TCtx>,
  schemaComposer: SchemaComposer<TCtx>
): InterfaceTypeComposer<TSrc, TCtx>
```

Create `InterfaceTypeComposer` without adding it to the `SchemaComposer`. This method may be usefull in plugins, when you need to create type temporary.

## Getters

### List

```js
List: ListComposer<InterfaceTypeComposer<TSource, TContext>>;
```

Get Type wrapped in List modifier

```js
const UserTC = schemaComposer.createInterfaceTC(
  `interface UserIface { name: String }`
);
schemaComposer.Query.addFields({
  users1: { type: UserTC.List }, // in SDL: users1: [UserIface]
  users2: { type: UserTC.NonNull.List }, // in SDL: users2: [UserIface!]
  users3: { type: UserTC.NonNull.List.NonNull } // in SDL: users2: [UserIface!]!
});
```

### NonNull

```js
NonNull: NonNullComposer<InterfaceTypeComposer<TSource, TContext>>;
```

Get Type wrapped in NonNull modifier

```js
const UserTC = schemaComposer.createInterfaceTC(
  `interface UserIface { name: String }`
);
schemaComposer.Query.addFields({
  users1: { type: UserTC.List }, // in SDL: users1: [UserIface]
  users2: { type: UserTC.NonNull.List }, // in SDL: users2: [UserIface!]!
  users3: { type: UserTC.NonNull.List.NonNull } // in SDL: users2: [UserIface!]!
});
```

## Properties

### schemaComposer

```js
schemaComposer: SchemaComposer<TContext>;
```

## Field methods

### getFields()

```js
getFields(): ObjectTypeComposerFieldConfigMap<TSource, TContext>
```

### getFieldNames()

```js
getFieldNames(): string[]
```

### getField()

```js
getField(
  fieldName: string
): ObjectTypeComposerFieldConfig<TSource, TContext>
```

### hasField()

```js
hasField(
  fieldName: string
): boolean
```

### setFields()

```js
setFields(
  fields: ObjectTypeComposerFieldConfigMapDefinition<TSource, TContext>
): this
```

### setField()

```js
setField(
  fieldName: string,
  fieldConfig: ObjectTypeComposerFieldConfigDefinition<TSource, TContext>
): this
```

### addFields()

```js
addFields(
  newFields: ObjectTypeComposerFieldConfigMapDefinition<TSource, TContext>
): this
```

Add new fields or replace existed in a GraphQL type

### removeField()

```js
removeField(
  fieldNameOrArray: string | string[]
): this
```

Remove fields from type by name or array of names.
You also may pass name in dot-notation, in such case will be removed nested field.

```js
removeField('field1'); // remove 1 field
removeField(['field1', 'field2']); // remove 2 fields
removeField('field1.subField1'); // remove 1 nested field
```

### removeOtherFields()

```js
removeOtherFields(
  fieldNameOrArray: string | string[]
): this
```

### reorderFields()

```js
reorderFields(
  names: string[]
): this
```

### extendField()

```js
extendField(
  fieldName: string,
  partialFieldConfig: Partial<ObjectTypeComposerFieldConfigAsObjectDefinition<TSource, TContext>>
): this
```

### getFieldConfig()

```js
getFieldConfig(
  fieldName: string
): GraphQLFieldConfig<TSource, TContext>
```

### getFieldType()

```js
getFieldType(
  fieldName: string
): GraphQLOutputType
```

### getFieldTypeName()

```js
getFieldTypeName(
  fieldName: string
): string
```

### getFieldTC()

```js
getFieldTC(
  fieldName: string
): ComposeNamedOutputType<TContext>
```

Automatically unwrap from List, NonNull, ThunkComposer
It's important! Cause greatly helps to modify fields types in a real code
without manual unwrap writing.

If you need to work with wrappers, you may use the following code:
   - `TC.getField().type` // returns real wrapped TypeComposer
   - `TC.isFieldNonNull()` // checks is field NonNull or not
   - `TC.makeFieldNonNull()` // for wrapping in NonNullComposer
   - `TC.makeFieldNullable()` // for unwrapping from NonNullComposer
   - `TC.isFieldPlural()` // checks is field wrapped in ListComposer or not
   - `TC.makeFieldPlural()` // for wrapping in ListComposer
   - `TC.makeFieldNonPlural()` // for unwrapping from ListComposer

### getFieldOTC()

```js
getFieldOTC(
  fieldName: string
): ObjectTypeComposer<TSource, TContext>
```

Alias for `getFieldTC()` but returns statically checked ObjectTypeComposer.
If field have other type then error will be thrown.

### isFieldNonNull()

```js
isFieldNonNull(
  fieldName: string
): boolean
```

### makeFieldNonNull()

```js
makeFieldNonNull(
  fieldNameOrArray: string | string[]
): this
```

### makeFieldNullable()

```js
makeFieldNullable(
  fieldNameOrArray: string | string[]
): this
```

### isFieldPlural()

```js
isFieldPlural(
  fieldName: string
): boolean
```

### makeFieldPlural()

```js
makeFieldPlural(
  fieldNameOrArray: string | string[]
): this
```

### makeFieldNonPlural()

```js
makeFieldNonPlural(
  fieldNameOrArray: string | string[]
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

### getFieldArgs()

```js
getFieldArgs<TArgs = any>(
  fieldName: string
): ObjectTypeComposerArgumentConfigMap<TArgs>
```

### getFieldArgNames()

```js
getFieldArgNames(
  fieldName: string
): string[]
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
): ObjectTypeComposerArgumentConfig
```

### getFieldArgType()

```js
getFieldArgType(
  fieldName: string,
  argName: string
): GraphQLInputType
```

### getFieldArgTypeName()

```js
getFieldArgTypeName(
  fieldName: string,
  argName: string
): string
```

### getFieldArgTC()

```js
getFieldArgTC(
  fieldName: string,
  argName: string
): ComposeNamedInputType<TContext>
```

Automatically unwrap from List, NonNull, ThunkComposer
It's important! Cause greatly helps to modify args types in a real code
without manual unwrap writing.

If you need to work with wrappers, you may use the following code:
    `isFieldArgPlural()` – checks is arg wrapped in ListComposer or not
    `makeFieldArgPlural()` – for arg wrapping in ListComposer
    `makeFieldArgNonPlural()` – for arg unwrapping from ListComposer
    `isFieldArgNonNull()` – checks is arg wrapped in NonNullComposer or not
    `makeFieldArgNonNull()` – for arg wrapping in NonNullComposer
    `makeFieldArgNullable()` – for arg unwrapping from NonNullComposer

### getFieldArgITC()

```js
getFieldArgITC(
  fieldName: string,
  argName: string
): InputTypeComposer<TContext>
```

Alias for `getFieldArgTC()` but returns statically checked InputTypeComposer.
If field have other type then error will be thrown.

### setFieldArgs()

```js
setFieldArgs(
  fieldName: string,
  args: ObjectTypeComposerArgumentConfigMapDefinition<any>
): this
```

### addFieldArgs()

```js
addFieldArgs(
  fieldName: string,
  newArgs: ObjectTypeComposerArgumentConfigMapDefinition<any>
): this
```

### setFieldArg()

```js
setFieldArg(
  fieldName: string,
  argName: string,
  argConfig: ObjectTypeComposerArgumentConfigDefinition
): this
```

### isFieldArgPlural()

```js
isFieldArgPlural(
  fieldName: string,
  argName: string
): boolean
```

### makeFieldArgPlural()

```js
makeFieldArgPlural(
  fieldName: string,
  argNameOrArray: string | string[]
): this
```

### makeFieldArgNonPlural()

```js
makeFieldArgNonPlural(
  fieldName: string,
  argNameOrArray: string | string[]
): this
```

### isFieldArgNonNull()

```js
isFieldArgNonNull(
  fieldName: string,
  argName: string
): boolean
```

### makeFieldArgNonNull()

```js
makeFieldArgNonNull(
  fieldName: string,
  argNameOrArray: string | string[]
): this
```

### makeFieldArgNullable()

```js
makeFieldArgNullable(
  fieldName: string,
  argNameOrArray: string | string[]
): this
```

## Type methods

### getType()

```js
getType(): GraphQLInterfaceType
```

### getTypePlural()

```js
getTypePlural(): ListComposer<InterfaceTypeComposer<TSource, TContext>>
```

### getTypeNonNull()

```js
getTypeNonNull(): NonNullComposer<InterfaceTypeComposer<TSource, TContext>>
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
  newTypeNameOrTC: string | InterfaceTypeComposer<any, any>
): InterfaceTypeComposer<TSource, TContext>
```

You may clone this type with a new provided name as string.
Or you may provide a new TypeComposer which will get all cloned
settings from this type.

### cloneTo()

```js
cloneTo(
  anotherSchemaComposer: SchemaComposer<any>,
  cloneMap: Map<any, any>
): InterfaceTypeComposer<any, any>
```

Clone this type to another SchemaComposer.
Also will be cloned all sub-types.

### merge()

```js
merge(
  type: GraphQLInterfaceType | GraphQLObjectType | InterfaceTypeComposer<any, any> | ObjectTypeComposer<any, any>
): this
```

## InputType methods

### getInputType()

```js
getInputType(): GraphQLInputObjectType
```

### hasInputTypeComposer()

```js
hasInputTypeComposer(): boolean
```

### setInputTypeComposer()

```js
setInputTypeComposer(
  itc: InputTypeComposer<TContext>
): this
```

### getInputTypeComposer()

```js
getInputTypeComposer(
  opts: ToInputTypeOpts
): InputTypeComposer<TContext>
```

### getITC()

```js
getITC(
  opts: ToInputTypeOpts
): InputTypeComposer<TContext>
```

An alias for `getInputTypeComposer()`

### removeInputTypeComposer()

```js
removeInputTypeComposer(): this
```

## ResolveType methods

### getResolveType()

```js
getResolveType(): GraphQLTypeResolver<TSource, TContext> | undefined | null
```

### setResolveType()

```js
setResolveType(
  fn: GraphQLTypeResolver<TSource, TContext> | undefined | null
): this
```

### hasTypeResolver()

```js
hasTypeResolver(
  type: ObjectTypeComposer<any, TContext> | GraphQLObjectType
): boolean
```

### getTypeResolvers()

```js
getTypeResolvers(): InterfaceTypeComposerResolversMap<TContext>
```

### getTypeResolverCheckFn()

```js
getTypeResolverCheckFn(
  type: ObjectTypeComposer<any, TContext> | GraphQLObjectType
): InterfaceTypeComposerResolverCheckFn<TSource, TContext>
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
  typeResolversMap: InterfaceTypeComposerResolversMap<TContext>
): this
```

### addTypeResolver()

```js
addTypeResolver<TSrc>(
  type: ObjectTypeComposer<TSrc, TContext> | GraphQLObjectType,
  checkFn: InterfaceTypeComposerResolverCheckFn<TSrc, TContext>
): this
```

### removeTypeResolver()

```js
removeTypeResolver(
  type: ObjectTypeComposer<any, TContext> | GraphQLObjectType
): this
```

### setTypeResolverFallback()

```js
setTypeResolverFallback(
  type: ObjectTypeComposer<any, TContext> | GraphQLObjectType | null
): this
```

## Sub-Interface methods

### getInterfaces()

```js
getInterfaces(): Array<InterfaceTypeComposerThunked<TSource, TContext>>
```

### getInterfacesTypes()

```js
getInterfacesTypes(): Array<GraphQLInterfaceType>
```

### setInterfaces()

```js
setInterfaces(
  interfaces: ReadonlyArray<InterfaceTypeComposerDefinition<any, TContext>>
): this
```

### hasInterface()

```js
hasInterface(
  iface: InterfaceTypeComposerDefinition<any, TContext>
): boolean
```

### addInterface()

```js
addInterface(
  iface: InterfaceTypeComposerDefinition<any, TContext> | InterfaceTypeComposerThunked<any, TContext>
): this
```

### addInterfaces()

```js
addInterfaces(
  ifaces: ReadonlyArray<InterfaceTypeComposerDefinition<any, TContext> | InterfaceTypeComposerThunked<any, TContext>>
): this
```

### removeInterface()

```js
removeInterface(
  iface: InterfaceTypeComposerDefinition<any, TContext>
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
): unknown
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
  value: unknown
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
): unknown
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
  value: unknown
): this
```

### removeFieldExtension()

```js
removeFieldExtension(
  fieldName: string,
  extensionName: string
): this
```

### getFieldArgExtensions()

```js
getFieldArgExtensions(
  fieldName: string,
  argName: string
): Extensions
```

### setFieldArgExtensions()

```js
setFieldArgExtensions(
  fieldName: string,
  argName: string,
  extensions: Extensions
): this
```

### extendFieldArgExtensions()

```js
extendFieldArgExtensions(
  fieldName: string,
  argName: string,
  extensions: Extensions
): this
```

### clearFieldArgExtensions()

```js
clearFieldArgExtensions(
  fieldName: string,
  argName: string
): this
```

### getFieldArgExtension()

```js
getFieldArgExtension(
  fieldName: string,
  argName: string,
  extensionName: string
): unknown
```

### hasFieldArgExtension()

```js
hasFieldArgExtension(
  fieldName: string,
  argName: string,
  extensionName: string
): boolean
```

### setFieldArgExtension()

```js
setFieldArgExtension(
  fieldName: string,
  argName: string,
  extensionName: string,
  value: unknown
): this
```

### removeFieldArgExtension()

```js
removeFieldArgExtension(
  fieldName: string,
  argName: string,
  extensionName: string
): this
```

## Directive methods

### getDirectives()

```js
getDirectives(): Array<ExtensionsDirective>
```

### setDirectives()

```js
setDirectives(
  directives: Array<ExtensionsDirective>
): this
```

### getDirectiveNames()

```js
getDirectiveNames(): string[]
```

### getDirectiveByName()

```js
getDirectiveByName(
  directiveName: string
): DirectiveArgs | undefined
```

### getDirectiveById()

```js
getDirectiveById(
  idx: number
): DirectiveArgs | undefined
```

### getFieldDirectives()

```js
getFieldDirectives(
  fieldName: string
): Array<ExtensionsDirective>
```

### setFieldDirectives()

```js
setFieldDirectives(
  fieldName: string,
  directives: Array<ExtensionsDirective>
): this
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
): DirectiveArgs | undefined
```

### getFieldDirectiveById()

```js
getFieldDirectiveById(
  fieldName: string,
  idx: number
): DirectiveArgs | undefined
```

### getFieldArgDirectives()

```js
getFieldArgDirectives(
  fieldName: string,
  argName: string
): Array<ExtensionsDirective>
```

### setFieldArgDirectives()

```js
setFieldArgDirectives(
  fieldName: string,
  argName: string,
  directives: Array<ExtensionsDirective>
): this
```

### getFieldArgDirectiveNames()

```js
getFieldArgDirectiveNames(
  fieldName: string,
  argName: string
): string[]
```

### getFieldArgDirectiveByName()

```js
getFieldArgDirectiveByName(
  fieldName: string,
  argName: string,
  directiveName: string
): DirectiveArgs | undefined
```

### getFieldArgDirectiveById()

```js
getFieldArgDirectiveById(
  fieldName: string,
  argName: string,
  idx: number
): DirectiveArgs | undefined
```

## Misc methods

### get()

```js
get(
  path: string | string[]
): TypeInPath<TContext> | void
```

### getNestedTCs()

```js
getNestedTCs(
  opts: {
      exclude?: string[];
  },
  passedTypes: Set<NamedTypeComposer<any>>
): Set<NamedTypeComposer<any>>
```

Returns all types which are used inside the current type

### toSDL()

```js
toSDL(
  opts: SchemaPrinterOptions & {
      deep?: boolean;
      sortTypes?: boolean;
      exclude?: string[];
  }
): string
```

Prints SDL for current type. Or print with all used types if `deep: true` option was provided.

## Internal type definitions

### InterfaceTypeComposerDefinition

```js
export type InterfaceTypeComposerDefinition<TSource, TContext> =
  | TypeAsString
  | TypeDefinitionString
  | InterfaceTypeComposerAsObjectDefinition<TSource, TContext>
  | GraphQLInterfaceType
  | Readonly<InterfaceTypeComposerThunked<any, TContext>>;
```

### InterfaceTypeComposerAsObjectDefinition

```js
export type InterfaceTypeComposerAsObjectDefinition<TSource, TContext> = {
  name: string;
  fields?: ObjectTypeComposerFieldConfigMapDefinition<TSource, TContext>;
  interfaces?: null | ThunkWithSchemaComposer<
    ReadonlyArray<InterfaceTypeComposerDefinition<any, TContext>>,
    SchemaComposer<TContext>
  >;
  resolveType?: null | GraphQLTypeResolver<TSource, TContext>;
  description?: null | string;
  extensions?: Extensions;
};
```

### InterfaceTypeComposerResolversMap

```js
export type InterfaceTypeComposerResolversMap<TContext> = Map<
  ObjectTypeComposer<any, TContext> | GraphQLObjectType,
  InterfaceTypeComposerResolverCheckFn<any, TContext>
>;
```

### InterfaceTypeComposerResolverCheckFn

```js
export type InterfaceTypeComposerResolverCheckFn<TSource, TContext> = (
  value: TSource,
  context: TContext,
  info: GraphQLResolveInfo
) => MaybePromise<boolean | null | void>;
```

### InterfaceTypeComposerThunked

```js
export type InterfaceTypeComposerThunked<TReturn, TContext> =
  | InterfaceTypeComposer<TReturn, TContext>
  | ThunkComposer<InterfaceTypeComposer<any, any>, GraphQLInterfaceType>;
```