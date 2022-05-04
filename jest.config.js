const config = {
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/client/components/$1',
    '^@/actions/(.*)$': '<rootDir>/client/actions/$1',
    '^@/pages/(.*)$': '<rootDir>/client/pages/$1',
    '^@/apiClient/(.*)$': '<rootDir>/client/apiClient/$1',
    '^@/reducers/(.*)$': '<rootDir>/client/reducers/$1',
  },
}

module.exports = config
