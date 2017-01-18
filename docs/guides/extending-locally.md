# Extending ticketfly-css

## Using Variables

Not all variables in this project are used for building the distributed CSS rules.
Some are meant as a reference -- and for easy portability into your own application.

The following variables should be defined as needed within your own project:

* [Animation Duration]()
* [Animation Timing]()
* [Breakpoints]()

## Extending Namespaces

The [namespaced syntax](https://github.com/Ticketfly-UI/ticketfly-css/docs/namespaces.md) of 
Ticketfly CSS provides a model for you to build upon in your own application. 

For example, you may have a custom _Object Pattern_ for interactive elements where you animate their
`color` or `background-color` as the `hover` and `focus` states changes.
You could encapsulate the animation duration and easing behavior for this like so:

```css
/* styles/object-patterns/_color-shifting.css */

.o-color-shifting {
  transition-duration: var(--duration__color-shift);
  transition-timing-function: var(--easing__accelerating-exit);  
}

.o-color-shifting:hover,
.o-color-shifting:focus {
  transition-timing-function: var(--easing__decelerating-entrance);
}
```

