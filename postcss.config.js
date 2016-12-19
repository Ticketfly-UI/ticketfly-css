/* global module */

/**
 * Configuration for PostCSS.
 *
 * Properties names correspond to the `postcss-cli` properties
 * accepted by the PostCSS CLI API -- with the addition of
 * plugin names for plugin settings.
 *
 * @see: https://github.com/postcss/postcss-cli
 */
module.exports = {
  input: 'src/index.css',
  output: 'dist/ticketfly-css.css',

  use: [
    'postcss-import',
    'postcss-custom-media',
    'postcss-custom-properties',
    'postcss-calc',
    'cssstats',
    'postcss-discard-comments',
    'postcss-remove-root',
    'autoprefixer',
    'postcss-reporter'
  ],

  stylelint: {
    configFile: './stylelint.config.js',
    configOverrides: {
      ignoreFiles: '**/normalize/index.css'
    },
    plugins: [
      'stylelint'
    ]
  },

  'postcss-reporter': {
    clearAllMessages: true,
    throwError: true
  }
};
