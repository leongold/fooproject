module.exports = {
  'env': {
    'es6': true,
  },
  'extends': './base.js',
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
      'impliedStrict': true,
    }
  },
}