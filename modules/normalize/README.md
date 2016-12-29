# Ticketfly CSS Normalize

_Normalization settings for Ticketfly CSS_.

[![Latest NPM release][npm-badge]][npm-badge-url]
[![License][license-badge]][license-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url]
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]


## Installation

Installing with `npm`:

```bash
npm install ticketfly-css-normalize
```

Installing with `yarn`:

```bash
yarn add ticketfly-css-normalize
```

## What's Normalization?

This module is essentially Ticketfly CSS's take on CSS normalization.
It's inspired heavilly -- but with slightly deviating opinions -- by the excellent
[Normalize.css](https://necolas.github.io/normalize.css/) project.


Whereas a CSS reset focuses on "unstyling" things, _normalization_ aims to patch
minor bugs or tweak standard elements while still preserving
the built-in browser settings outside of its scope.

Though somewhat dated, this [introductory blog post to Normalize CSS](http://nicolasgallagher.com/about-normalize-css/)
goes into great details about its overall purpose.

It's also important to recognize what normalization _isn't_: a
full set of style rules for HTML elements. For example, whereas
normalization is concerned with ensuring that the `<body>` element always has
`margin` set to `0`, a separate typography module should be concerned
with defining a `font-family` stack for the `<body>` element.


[npm-badge]: https://img.shields.io/npm/v/ticketfly-css-normalize.svg
[npm-badge-url]: https://www.npmjs.com/package/ticketfly-css-normalize
[license-badge]: https://img.shields.io/npm/l/ticketfly-css-normalize.svg
[license-badge-url]: LICENSE
[dependencies-badge]: https://img.shields.io/david/Ticketfly-UI/ticketfly-css-normalize.svg
[dependencies-badge-url]: https://david-dm.org/Ticketfly-UI/ticketfly-css-normalize
[devDependencies-badge]: https://img.shields.io/david/dev/Ticketfly-UI/ticketfly-css-normalize.svg
[devDependencies-badge-url]: https://david-dm.org/Ticketfly-UI/ticketfly-css-normalize#info=devDependencies

