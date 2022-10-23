module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  moduleNameMapper: {
    '@config(.*)$': '<rootDir>/config/$1',
    '@tests(.*)$': '<rootDir>/tests/$1',
    '@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!vee-validate/dist/rules)'],
  modulePathIgnorePatterns: [
    '<rootDir>/src/locales',
    '<rootDir>/src/plugins',
    '<rootDir>/src/main.ts',
    '<rootDir>/src/registerServiceWorker.ts',
    '<rootDir>/src/typings',
    '<rootDir>/.yalc',
    '__mocks__'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts,vue}', '!**/*.d.ts', '!**/*.mock.ts'],
  coverageReporters: ['html', 'lcov', 'cobertura', 'text', 'text-summary'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec).[jt]s?(x)'],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
};
