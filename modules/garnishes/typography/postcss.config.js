/* global module */
module.exports = {
  input: 'index.css',
  output: 'build/ticketfly-css-typography-garnishes.css',

  use: [
    'postcss-import',
    'postcss-cssnext'
  ]
};
