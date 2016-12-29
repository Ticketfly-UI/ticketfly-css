/* global module */
module.exports = {
  input: 'index.css',
  output: 'build/ticketfly-css-spacing-variables.css',

  use: [
    'postcss-cssnext',
    'postcss-import'
  ]
};
