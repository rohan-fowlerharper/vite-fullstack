module.exports = {
  extends: ['eda/react'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/node_modules/**', '**/dist/**'],
  rules: {
    'import/no-unresolved': 'off',
  },
}
