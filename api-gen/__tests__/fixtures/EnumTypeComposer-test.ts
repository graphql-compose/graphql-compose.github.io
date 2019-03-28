import TSClassParser from '../../TSClassParser';

it('check EnumTypeComposer.d.ts', () => {
  expect(TSClassParser.parseFile('api-gen/__tests__/fixtures/EnumTypeComposer.d.ts'))
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
      "type": "EnumTypeComposer<TContext>",
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
      "name": "hasField",
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
      "name": "getField",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "name",
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
          "name": "values",
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
      "name": "setField",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "name",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "valueConfig",
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
      "name": "addFields",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "newValues",
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
      "name": "removeField",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "nameOrArray",
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
      "name": "extendField",
      "parameters": Array [
        Object {
          "documentation": "",
          "name": "name",
          "type": "string",
        },
        Object {
          "documentation": "",
          "name": "partialValueConfig",
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
      "type": "EnumTypeComposer<TContext>",
    },
  ],
  "name": "EnumTypeComposer",
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
      "type": "EnumTypeComposer<TCtx>",
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
      "type": "EnumTypeComposer<TCtx>",
    },
  ],
  "staticProperties": Array [],
  "type": "typeof EnumTypeComposer",
}
`);
});
