# Ticketfly CSS Normalize

This module is essentially Ticketfly CSS's take on CSS normalization.
It's inspired heavilly -- but with slightly deviating opinions -- by the excellent
[Normalize.css](https://necolas.github.io/normalize.css/) project.

## What's Normalization?

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
