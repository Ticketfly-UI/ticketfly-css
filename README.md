# Ticketfly CSS

[![Latest NPM release][npm-badge]][npm-badge-url]
[![CircleCI Build Status][circle-badge]][circle-badge-url]
[![Code Climate][codeclimate-badge]][codeclimate-badge-url]
[![License][license-badge]][license-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url]
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]


_Ticketfly's CSS framework._


## Installation

Installing as an Ember addon:

```bash
ember install ticketfly-css

```
Installing with `npm`:

```bash
npm install ticketfly-css
```

Installing with `yarn`:

```bash
yarn add ticketfly-css
```

## Current Modules

- [ticketfly-css-normalize](https://github.com/Ticketfly-UI/ticketfly-css-normalize)

### Base Settings

- [ticketfly-css-core-variables](https://github.com/Ticketfly-UI/ticketfly-css-core-variables)
- [ticketfly-css-box-shadow-variables](https://github.com/Ticketfly-UI/ticketfly-css-box-shadow-variables)
- [ticketfly-css-color-variables](https://github.com/Ticketfly-UI/ticketfly-css-color-variables)
- [ticketfly-css-spacing-variables](https://github.com/Ticketfly-UI/ticketfly-css-spacing-variables)

### Utilities

- [ticketfly-css-display-utilities](https://github.com/Ticketfly-UI/ticketfly-css-display-utilities)
- [ticketfly-css-flex-utilities](https://github.com/Ticketfly-UI/ticketfly-css-flex-utilities)
- [ticketfly-css-overflow-utilities](https://github.com/Ticketfly-UI/ticketfly-css-overflow-utilities)
- [ticketfly-css-sizing-utilities](https://github.com/Ticketfly-UI/ticketfly-css-sizing-utilities)
- [ticketfly-css-spacing-utilities](https://github.com/Ticketfly-UI/ticketfly-css-spacing-utilities)
- [ticketfly-css-text-utilities](https://github.com/Ticketfly-UI/ticketfly-css-text-utilities)
- [ticketfly-css-z-index-utilities](https://github.com/Ticketfly-UI/ticketfly-css-z-index-utilities)


### Object Patterns

- [ticketfly-css-box-objects](https://github.com/Ticketfly-UI/ticketfly-css-box-objects)
- [ticketfly-css-grid-objects](https://github.com/Ticketfly-UI/ticketfly-css-grid-objects)
- [ticketfly-css-tap-target-objects](https://github.com/Ticketfly-UI/ticketfly-css-tap-target-objects)


### Garnishes

- [ticketfly-css-box-shadow-garnishes](https://github.com/Ticketfly-UI/ticketfly-css-box-shadow-garnishes)
- [ticketfly-css-color-garnishes](https://github.com/Ticketfly-UI/ticketfly-css-color-garnishes)
- [ticketfly-css-reset-garnishes](https://github.com/Ticketfly-UI/ticketfly-css-reset-garnishes)


## Future and In-Progress Modules

- ticketfly-css-animation-variables
- ticketfly-css-grid-objects **(V2)**
  + A system of grid utilities built with the [CSS Grid Layout Module](https://www.w3.org/TR/css-grid-1/)

[Also, see this issue for more context](https://github.com/Ticketfly-UI/ticketfly-css/issues/1)

## Developing

In addition to providing functionality as both an Ember addon and a standard Node package
consumable through package managers such as NPM or Yarn, this project contains a `modules`
directory consisting of the [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
that comprise Ticketfly CSS.

If you only want visibility on the top-level repo, simply clone it as-is:

```bash
git clone git@github.com:Ticketfly-UI/ticketfly-css.git
```

It's more likely, however, that you'll want to include the
files from each submodule's repository within one parent
directory on your machine. This can be done with a recursive clone
of the project:

```bash
git clone --recursive git@github.com:Ticketfly-UI/ticketfly-css.git
```


[npm-badge]: https://img.shields.io/npm/v/ticketfly-css.svg
[npm-badge-url]: https://www.npmjs.com/package/ticketfly-css
[circle-badge]: https://circleci.com/gh/Ticketfly-UI/ticketfly-css/tree/master.svg?style=svg&circle-token={{CIRCLE_TOKEN}}
[circle-badge-url]: https://circleci.com/gh/Ticketfly-UI/ticketfly-css/tree/master
[codeclimate-badge]: https://img.shields.io/codeclimate/github/Ticketfly-UI/ticketfly-css.svg
[codeclimate-badge-url]: https://codeclimate.com/github/Ticketfly-UI/ticketfly-css
[license-badge]: https://img.shields.io/npm/l/ticketfly-css.svg
[license-badge-url]: LICENSE
[dependencies-badge]: https://img.shields.io/david/Ticketfly-UI/ticketfly-css.svg
[dependencies-badge-url]: https://david-dm.org/Ticketfly-UI/ticketfly-css
[devDependencies-badge]: https://img.shields.io/david/dev/Ticketfly-UI/ticketfly-css.svg
[devDependencies-badge-url]: https://david-dm.org/Ticketfly-UI/ticketfly-css#info=devDependencies
