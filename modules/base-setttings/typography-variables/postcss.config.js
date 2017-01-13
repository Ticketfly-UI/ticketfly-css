/* global module */
module.exports = {
  input: 'index.css',
  output: 'build/ticketfly-css-typography-variables.css',

  use: [
    'postcss-cssnext'
  ],

  'postcss-cssnext': {
    features: {
      customProperties: {
        preserve: true
      }
    }
  }
};
