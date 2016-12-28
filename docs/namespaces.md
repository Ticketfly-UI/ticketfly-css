# Namespaces

Ticketfly CSS is designed offer an intuitive syntax based around
the notion of _namespaces_ &mdash; letter-coded prefixes that reflect
the category of a rule's concern.

[This article by Harry Roberts on CSS Wizardry](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)
offers a tremendous breakdown of namespaces. But here's how they're
implemented in Ticketfly CSS:

- `o`: [Object Patterns](../modules/object-patterns)
  - Signifies that something is an Object, and that it may be used
  in any number of unrelated contexts to the one you
  can currently see it in. Modifications to these types of class could
  potentially have knock-on effects in a lot of other
  unrelated places. So tread carefully.

- `u`: [Utilities](../modules/utilities)
  - Signifies that this class is a Utility class.
  It has a very specific role (often providing only one declaration)
  and should not be bound onto or changed.
  It can be reused and is not tied to any specific piece of UI.

- `g`: [Garnishes](../modules/garnishes)
  - Similar to utilities, but focused on outer- or "skin"-level
  styles as opposed to structural/layout styles. Examples include
  colors and font settings.

