module.exports = {
  coverageDirectory: 'coverage',
  collectCoverage: true,
  setupFilesAfterEnv: ['./setupTests.js'],
  testMatch: ['**/__tests__/**/*spec.js?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/example/'],
  verbose: true,
}
