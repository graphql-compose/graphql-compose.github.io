import { trim, fixJSDocCode } from '../utils';

describe('utils', () => {
  describe('trim()', () => {
    it('should trim spaces', () => {
      expect(
        trim(`
      
        ok1
        ok2

      `)
      ).toBe('ok1\n        ok2');
    });

    it('should replace tripple newlines', () => {
      expect(
        trim(`
        ok1


        
        ok2
      `)
      ).toBe('ok1\n\n        ok2');
    });
  });

  describe('fixJSDocCode()', () => {
    it('should remove * from beginning of strings', () => {
      expect(
        fixJSDocCode(`schemaComposer.addTypeDefs(\`
        *   type Post {}
        * \`);
      `)
      ).toBe('schemaComposer.addTypeDefs(`\n  type Post {}\n`);\n      ');
    });
  });
});
