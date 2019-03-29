import TSClassParser from '../TSClassParser';

describe('TSClassParser', () => {
  it('should parse static methods', () => {
    const data = TSClassParser.parseSource(`
      class Me {
        static pub(a: Me): string;
        /**
         * Method description
         * 
         * @param c Some arg description
         */
        protected static prot(b: string, c: string): number;
        private static priv(): {};
      }
    `);

    expect(data.class.name).toBe('Me');
    expect(data.class.staticMethods).toEqual([
      {
        documentation: '',
        flags: { private: false, protected: false, readonly: false, static: true },
        name: 'pub',
        parameters: [{ documentation: '', name: 'a', type: 'Me' }],
        type: 'string',
      },
      {
        documentation: 'Method description',
        flags: { private: false, protected: true, readonly: false, static: true },
        name: 'prot',
        parameters: [
          { documentation: '', name: 'b', type: 'string' },
          { documentation: 'Some arg description', name: 'c', type: 'string' },
        ],
        type: 'number',
      },
      {
        documentation: '',
        flags: { private: true, protected: false, readonly: false, static: true },
        name: 'priv',
        parameters: [],
        type: '{}',
      },
    ]);
  });

  it('should parse static properties', () => {
    const data = TSClassParser.parseSource(`
      class Me {
        static pub: string;
        protected static prot: Me;
        private static priv: He;
      }
    `);

    expect(data.class.name).toBe('Me');
    expect(data.class.staticProperties).toEqual([
      {
        documentation: '',
        flags: { private: false, protected: false, readonly: false, static: true },
        name: 'pub',
        type: 'string',
      },
      {
        documentation: '',
        flags: { private: false, protected: true, readonly: false, static: true },
        name: 'prot',
        type: 'Me',
      },
      {
        documentation: '',
        flags: { private: true, protected: false, readonly: false, static: true },
        name: 'priv',
        type: 'any',
      },
    ]);
  });

  it('should parse instance methods', () => {
    const data = TSClassParser.parseSource(`
      class Me {
        pub(a: Me): string;
        /**
         * Method description
         * 
         * @param c Some arg description
         */
        protected prot(b: string, c: string): number;
        private priv(): {};
      }
    `);

    expect(data.class.name).toBe('Me');
    expect(data.class.methods).toEqual([
      {
        documentation: '',
        flags: { private: false, protected: false, readonly: false, static: false },
        name: 'pub',
        parameters: [{ documentation: '', name: 'a', type: 'Me' }],
        type: 'string',
      },
      {
        documentation: 'Method description',
        flags: { private: false, protected: true, readonly: false, static: false },
        name: 'prot',
        parameters: [
          { documentation: '', name: 'b', type: 'string' },
          { documentation: 'Some arg description', name: 'c', type: 'string' },
        ],
        type: 'number',
      },
      {
        documentation: '',
        flags: { private: true, protected: false, readonly: false, static: false },
        name: 'priv',
        parameters: [],
        type: '{}',
      },
    ]);
  });

  it('should parse instance props', () => {
    const data = TSClassParser.parseSource(`
      class Me {
        pub: string;
        protected prot: number;
        private priv: {};
      }
    `);

    expect(data.class.name).toBe('Me');
    expect(data.class.properties).toEqual([
      {
        documentation: '',
        flags: { private: false, protected: false, readonly: false, static: false },
        name: 'pub',
        type: 'string',
      },
      {
        documentation: '',
        flags: { private: false, protected: true, readonly: false, static: false },
        name: 'prot',
        type: 'number',
      },
      {
        documentation: '',
        flags: { private: true, protected: false, readonly: false, static: false },
        name: 'priv',
        type: '{}',
      },
    ]);
  });

  it('should parse constructors', () => {
    const data = TSClassParser.parseSource(`
      class Me {
        /**
         * Class constructor with debug
         **/
        constructor(debug: boolean)

        /**
         * Class constructor with options
         **/
        constructor(opts: {}, debug: boolean)
      }
    `);

    expect(data.class.name).toBe('Me');
    expect(data.class.constructors).toEqual([
      {
        documentation: 'Class constructor with debug',
        parameters: [{ documentation: '', name: 'debug', type: 'boolean' }],
        type: 'Me',
      },
      {
        documentation: 'Class constructor with options',
        parameters: [
          { documentation: '', name: 'opts', type: '{}' },
          { documentation: '', name: 'debug', type: 'boolean' },
        ],
        type: 'Me',
      },
    ]);
  });

  it('should parse interfaces', () => {
    const data = TSClassParser.parseSource(`
      export interface ComposeEnumTypeConfig extends GraphQLEnumTypeConfig {
        extensions?: Extensions;
      };
      
      export type EnumTypeComposeDefinition = TypeAsString | ComposeEnumTypeConfig | GraphQLEnumType;
      
      export type GraphQLEnumTypeExtended<T> = GraphQLEnumType & {
        _gqcExtensions?: Extensions<T>;
      };

      class Me {
        constructor(debug: boolean)
      }
    `);

    expect(data.class.name).toBe('Me');
    expect(data.interfaces).toMatchInlineSnapshot(`
Array [
  Object {
    "code": "
      export interface ComposeEnumTypeConfig extends GraphQLEnumTypeConfig {
        extensions?: Extensions;
      }",
    "name": " ComposeEnumTypeConfig",
  },
  Object {
    "code": "
      
      export type EnumTypeComposeDefinition = TypeAsString | ComposeEnumTypeConfig | GraphQLEnumType;",
    "name": " EnumTypeComposeDefinition",
  },
  Object {
    "code": "
      
      export type GraphQLEnumTypeExtended<T> = GraphQLEnumType & {
        _gqcExtensions?: Extensions<T>;
      };",
    "name": " GraphQLEnumTypeExtended",
  },
]
`);
  });
});
