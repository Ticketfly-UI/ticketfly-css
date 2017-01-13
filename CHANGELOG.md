# 0.2.0 &mdash; January 13, 2017

- **[BREAKING CHANGE]** Add and update `ticketfly-css` packages ([#11](https://github.com/Ticketfly-UI/ticketfly-css/pull/11)).
  + Update `ticketfly-css-normalize`: `^0.0.4` --> `^0.1.0`
  + Update `ticketfly-css-reset-garnishes`: `^0.0.1` --> `^0.1.1`
  + Add `ticketfly-css-typography-garnishes` @ `^0.1.0`
  + Add `ticketfly-css-typography-variable` @ `^0.2.0`


# 0.1.0 &mdash; January 8, 2017

- **[FEATURE]** Architect project as an Ember addon ([#13](https://github.com/Ticketfly-UI/ticketfly-css/pull/13)).


# 0.0.8 &mdash; January 8, 2017

- **[ENHANCEMENT]** Upgrade to `ticketfly-css-grid-objects@0.0.2`.


# 0.0.7 &mdash; January 8, 2017

- **[ENHANCEMENT]** Added new `ticketfly-css` packages ([#12](https://github.com/Ticketfly-UI/ticketfly-css/pull/12)).
 + `ticketfly-css-grid-objects`


# 0.0.6 &mdash; January 2, 2017

- **[ENHANCEMENT]** Added new `ticketfly-css` packages ([#11](https://github.com/Ticketfly-UI/ticketfly-css/pull/11)).
 + `ticketfly-css-box-shadow-garnishes`
 + `ticketfly-css-box-shadow-variables`
 + `ticketfly-css-color-garnishes`
 + `ticketfly-css-color-variables`


# 0.0.5 &mdash; December 30, 2016

- **[ENHANCEMENT]** Added new `ticketfly-css` packages ([#10](https://github.com/Ticketfly-UI/ticketfly-css/pull/10)).
  + `ticketfly-css-box-objects`
  + `ticketfly-css-display-utilities`
  + `ticketfly-css-flex-utilities`
  + `ticketfly-css-tap-target-objects`
  + `ticketfly-css-text-utilities`
  + `ticketfly-css-z-index-utilities`


# 0.0.4 &mdash; December 29, 2016

- **[ENHANCEMENT]** Added new `ticketfly-css` packages ([#10](https://github.com/Ticketfly-UI/ticketfly-css/pull/10)).
  + `ticketfly-css-reset-garnishes`
  + `ticketfly-css-sizing-utilities`
  + `ticketfly-css-spacing-utilities`
  + `ticketfly-css-spacing-variables`


# 0.0.3 &mdash; December 28, 2016

- **[CHANGED]** Switch from `ticketfly-css-overflow` (deprecated) to
`ticketfly-css-overflow-utilities` ([#9](https://github.com/Ticketfly-UI/ticketfly-css/pull/9)).
- **[PATCHED]** Fix tests to use correct dependencies. ([#9](https://github.com/Ticketfly-UI/ticketfly-css/pull/9)).
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

