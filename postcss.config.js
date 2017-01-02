/* global module */

/**
 * Configuration for PostCSS.
 *
 * Properties names correspond to the `postcss-cli` properties
 * accepted by the PostCSS CLI API -- with the addition of
 * plugin names for plugin settings.
 * (@see: https://github.com/postcss/postcss-cli)
 */
module.exports = {
  input: 'src/index.css',
  output: 'build/ticketfly-css.css',

  // ⚠️ Order matters! PostCSS will run plugins in the order listed.
  use: [
    'stylelint',
    'postcss-import',
    'postcss-cssnext',
    'cssstats',
    'postcss-custom-properties',
    'postcss-discard-comments',
    'postcss-remove-root',
    'postcss-reporter'
  ],

  stylelint: {
    configFile: './stylelint.config.js',
    configOverrides: {
      ignoreFiles: '**/ticketfly-css-normalize/**'
    }
  },

  'postcss-reporter': {
    clearAllMessages: true,
    throwError: true
  }
};
