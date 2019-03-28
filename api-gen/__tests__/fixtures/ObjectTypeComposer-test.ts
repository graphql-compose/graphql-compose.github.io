import TSClassParser from '../../TSClassParser';

it('check ObjectTypeComposer.d.ts', () => {
  expect(TSClassParser.parseFile('api-gen/__tests__/fixtures/ObjectTypeComposer.d.ts'))
    .toMatchInlineSnapshot(`
Object {
  "constructors": Array [
    Object {
      "documentation": "",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "gqType",
          "type": "any",
        },
        Object {
          "documentation": "",
          "name": "schemaComposer",
          "type": "any",
        },
      ],
      "type": "ObjectTypeComposer<TSource, TContext>",
    },
  ],
  "documentation": "",
  "methods": Array [
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getFields",
      "parameters": Array [],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getFieldNames",
      "parameters": Array [],
      "type": "string[]",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setFields",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fields",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "hasField",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
      ],
      "type": "boolean",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setField",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "fieldConfig",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "Add new fields or replace existed in a GraphQL type",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "addFields",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "newFields",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "Add new fields or replace existed (where field name may have dots)",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "addNestedFields",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "newFields",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getField",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
      ],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "removeField",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldNameOrArray",
          "type": "string | string[]",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "removeOtherFields",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldNameOrArray",
          "type": "string | string[]",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "extendField",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "partialFieldConfig",
          "type": "Partial<any>",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "reorderFields",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "names",
          "type": "string[]",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "isFieldNonNull",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
      ],
      "type": "boolean",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getFieldConfig",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
      ],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getFieldType",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
      ],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getFieldTC",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
      ],
      "type": "ObjectTypeComposer<TSource, TContext>",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "makeFieldNonNull",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldNameOrArray",
          "type": "string | string[]",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "makeFieldNullable",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldNameOrArray",
          "type": "string | string[]",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "deprecateFields",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fields",
          "type": "string | string[] | { [fieldName: string]: string; }",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getFieldArgs",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
      ],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "hasFieldArg",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "argName",
          "type": "string",
        },
      ],
      "type": "boolean",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getFieldArg",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "argName",
          "type": "string",
        },
      ],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getFieldArgType",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "argName",
          "type": "string",
        },
      ],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getType",
      "parameters": Array [],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getTypePlural",
      "parameters": Array [],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getTypeNonNull",
      "parameters": Array [],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getTypeName",
      "parameters": Array [],
      "type": "string",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setTypeName",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "name",
          "type": "string",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getDescription",
      "parameters": Array [],
      "type": "string",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setDescription",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "description",
          "type": "string",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "clone",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "newTypeName",
          "type": "string",
        },
      ],
      "type": "ObjectTypeComposer<TCloneSource, TContext>",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getIsTypeOf",
      "parameters": Array [],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setIsTypeOf",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fn",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getInputType",
      "parameters": Array [],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "hasInputTypeComposer",
      "parameters": Array [],
      "type": "boolean",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setInputTypeComposer",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "itc",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getInputTypeComposer",
      "parameters": Array [],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getITC",
      "parameters": Array [],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "removeInputTypeComposer",
      "parameters": Array [],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getResolvers",
      "parameters": Array [],
      "type": "Map<string, any>",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "hasResolver",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "name",
          "type": "string",
        },
      ],
      "type": "boolean",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getResolver",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "name",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "middlewares",
          "type": "any[]",
        },
      ],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setResolver",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "name",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "resolver",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "addResolver",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "resolver",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "removeResolver",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "resolverName",
          "type": "string",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "wrapResolver",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "resolverName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "cbResolver",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "wrapResolverAs",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "resolverName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "fromResolverName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "cbResolver",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "wrapResolverResolve",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "resolverName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "cbNextRp",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getInterfaces",
      "parameters": Array [],
      "type": "any[]",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setInterfaces",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "interfaces",
          "type": "any[]",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "hasInterface",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "iface",
          "type": "any",
        },
      ],
      "type": "boolean",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "addInterface",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "interfaceObj",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "removeInterface",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "interfaceObj",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getExtensions",
      "parameters": Array [],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setExtensions",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "extensions",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "extendExtensions",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "extensions",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "clearExtensions",
      "parameters": Array [],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getExtension",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "extensionName",
          "type": "string",
        },
      ],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "hasExtension",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "extensionName",
          "type": "string",
        },
      ],
      "type": "boolean",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setExtension",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "extensionName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "value",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "removeExtension",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "extensionName",
          "type": "string",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getFieldExtensions",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
      ],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setFieldExtensions",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "extensions",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "extendFieldExtensions",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "extensions",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "clearFieldExtensions",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getFieldExtension",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "extensionName",
          "type": "string",
        },
      ],
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "hasFieldExtension",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "extensionName",
          "type": "string",
        },
      ],
      "type": "boolean",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setFieldExtension",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "extensionName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "value",
          "type": "any",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "removeFieldExtension",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "extensionName",
          "type": "string",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "addRelation",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fieldName",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "relationOpts",
          "type": "RelationOpts<TRelationSource, TSource, TContext, TArgs>",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getRelations",
      "parameters": Array [],
      "type": "RelationThunkMap<any, TContext>",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "setRecordIdFn",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "fn",
          "type": "GetRecordIdFn<TSource, TContext>",
        },
      ],
      "type": "this",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "hasRecordIdFn",
      "parameters": Array [],
      "type": "boolean",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getRecordIdFn",
      "parameters": Array [],
      "type": "GetRecordIdFn<TSource, TContext>",
    },
    Object {
      "documentation": "Get function that returns record id, from provided object.",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "getRecordId",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "source",
          "type": "TSource",
        },
        Object {
          "documentation": "",
          "name": "args",
          "type": "ArgsMap",
        },
        Object {
          "documentation": "",
          "name": "context",
          "type": "TContext",
        },
      ],
      "type": "string | number",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "get",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "path",
          "type": "string | string[]",
        },
      ],
      "type": "any",
    },
  ],
  "name": "ObjectTypeComposer",
  "properties": Array [
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "schemaComposer",
      "type": "any",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": true,
        "readonly": false,
      },
      "name": "gqType",
      "type": "any",
    },
  ],
  "staticMethods": Array [
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "create",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "typeDef",
          "type": "any",
        },
        Object {
          "documentation": "",
          "name": "schemaComposer",
          "type": "any",
        },
      ],
      "type": "ObjectTypeComposer<TSrc, TCtx>",
    },
    Object {
      "documentation": "",
      "flags": Object {
        "private": false,
        "protected": false,
        "readonly": false,
      },
      "name": "createTemp",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "typeDef",
          "type": "any",
        },
        Object {
          "documentation": "",
          "name": "schemaComposer",
          "type": "any",
        },
      ],
      "type": "ObjectTypeComposer<TSrc, TCtx>",
    },
  ],
  "staticProperties": Array [],
  "type": "typeof ObjectTypeComposer",
}
`);
});
