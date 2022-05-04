const config = {
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
}

module.exports = config
