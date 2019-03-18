module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  'rules': {
    'no-console': [
      'warn',
    ],
    'no-debugger': [
      'warn',
    ],
    'no-warning-comments': [
      'warn',
    ],
    'no-unused-vars': [
      'warn',
    ],
    'no-throw-literal': [
      'error',
    ],
    'import/no-extraneous-dependencies': [
      'warn',
    ],
  },
}
