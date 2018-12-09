module.exports = {
  verbose: true,
  globals: {
    window: true,
  },
  rootDir: './packages',
  setupFiles: ['./jestsetup.ts'],
  moduleFileExtensions: ['js', 'vue', 'ts', 'json'],
  transform: {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: '../coverage',
};
