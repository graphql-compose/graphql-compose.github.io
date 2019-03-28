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

    expect(data.name).toBe('Me');
    expect(data.staticMethods).toEqual([
      {
        documentation: '',
        flags: { private: false, protected: false, readonly: false },
        name: 'pub',
        parameters: [{ documentation: '', name: 'a', type: 'Me' }],
        type: 'string',
      },
      {
        documentation: 'Method description',
        flags: { private: false, protected: true, readonly: false },
        name: 'prot',
        parameters: [
          { documentation: '', name: 'b', type: 'string' },
          { documentation: 'Some arg description', name: 'c', type: 'string' },
        ],
        type: 'number',
      },
      {
        documentation: '',
        flags: { private: true, protected: false, readonly: false },
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

    expect(data.name).toBe('Me');
    expect(data.staticProperties).toEqual([
      {
        documentation: '',
        flags: { private: false, protected: false, readonly: false },
        name: 'pub',
        type: 'string',
      },
      {
        documentation: '',
        flags: { private: false, protected: true, readonly: false },
        name: 'prot',
        type: 'Me',
      },
      {
        documentation: '',
        flags: { private: true, protected: false, readonly: false },
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

    expect(data.name).toBe('Me');
    expect(data.methods).toEqual([
      {
        documentation: '',
        flags: { private: false, protected: false, readonly: false },
        name: 'pub',
        parameters: [{ documentation: '', name: 'a', type: 'Me' }],
        type: 'string',
      },
      {
        documentation: 'Method description',
        flags: { private: false, protected: true, readonly: false },
        name: 'prot',
        parameters: [
          { documentation: '', name: 'b', type: 'string' },
          { documentation: 'Some arg description', name: 'c', type: 'string' },
        ],
        type: 'number',
      },
      {
        documentation: '',
        flags: { private: true, protected: false, readonly: false },
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

    expect(data.name).toBe('Me');
    expect(data.properties).toEqual([
      {
        documentation: '',
        flags: { private: false, protected: false, readonly: false },
        name: 'pub',
        type: 'string',
      },
      {
        documentation: '',
        flags: { private: false, protected: true, readonly: false },
        name: 'prot',
        type: 'number',
      },
      {
        documentation: '',
        flags: { private: true, protected: false, readonly: false },
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

    expect(data.name).toBe('Me');
    expect(data.constructors).toEqual([
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
});
