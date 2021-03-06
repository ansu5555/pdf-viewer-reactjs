module.exports = {
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./setupTests.js'],
  testMatch: ['**/__tests__/**/*spec.js?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/example/'],
  verbose: true,
}
