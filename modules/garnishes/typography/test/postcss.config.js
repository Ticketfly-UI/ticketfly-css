/* global module */

const path = require('path');

module.exports = {
  input: path.join(__dirname, '../index.css'),
  output: path.join(__dirname, '../build/lint.css'),

  use: [
    'stylelint',
    'postcss-import',
    'postcss-cssnext',
    'postcss-reporter'
  ],

  stylelint: {
    configFile: path.join(__dirname, '../stylelint.config.js')
  },

  'postcss-reporter': {
    clearAllMessages: true,
    throwError: true,
    plugins: [
      'stylelint'
    ]
  }
};
