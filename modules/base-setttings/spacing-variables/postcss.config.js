/* global module */
module.exports = {
  input: 'index.css',
  output: 'dist/ticketfly-css-spacing-variables.css',

  use: [
    'postcss-custom-properties'
  ]
};
