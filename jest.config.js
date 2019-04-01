module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
      isolatedModules: true,
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    '^app(.*)$': '<rootDir>/gen-api$1',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'd.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testMatch: ['**/__tests__/**/*-test.(ts|js)'],
};
