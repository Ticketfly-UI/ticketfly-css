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
  // ⚠️ Order matters! PostCSS will run plugins in the order listed.
  use: [
    'stylelint',
    'postcss-import',
    'postcss-cssnext',
    'cssstats',
    'postcss-discard-comments',
    'postcss-reporter'
  ],

  'postcss-cssnext': {
    features: {
      customProperties: {
        preserve: true
      }
    }
  },

  'postcss-reporter': {
    clearAllMessages: true,
    throwError: true
  },

  stylelint: {
    configFile: './stylelint.config.js',
    configOverrides: {
      ignoreFiles: '**/ticketfly-css-normalize/**'
    }
  }
};
