# 0.0.3 &mdash; December 19, 2016

- **[CHANGE]** Switch from `ticketfly-css-overflow` (deprecated) to
`ticketfly-css-overflow-utilities` ([#9](https://github.com/Ticketfly-UI/ticketfly-css/pull/9)).
- **[PATCH]** Fix tests to use correct dependencies. ([#9](https://github.com/Ticketfly-UI/ticketfly-css/pull/9)).
- **[ENHANCEMENT]** Improve configuration of `package.json` ([#9](https://github.com/Ticketfly-UI/ticketfly-css/pull/9)).


# 0.0.2 &mdash; December 19, 2016

- Patch update before beginning to convert overarching architecture
  to an Ember addon.

  + Integrate `ticketfly-css-normalize`
  + Integrate `ticketfly-css-base-settings-variables`
  + Integrate `stylelint-config-ticketfly`
  + Fix build scripts to and [postcss.config.js](./postcss.config.js)
    to properly integrate `stylelint`.


# 0.0.1 &mdash; November 26, 2016

- Initial project pre-release setup

  + Beginning to forming modular structure with utilities and variables as
  independently versioned packages.

  + Setup configuration for CodeClimate and CircleCI.

  + Setup initial test suite around usage of each module
  by the base package.

  + Setup initial PostCSS config for compiling source CSS.

  + Import `ticketfly-css-overflow` in base project as a dry-run
  of architecture.

