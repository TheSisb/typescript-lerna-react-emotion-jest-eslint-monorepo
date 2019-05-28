module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transformIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/.jest/transform.js',
  },
};
