## Getting started

### Install

```bash
npm install @maalbuquerque/tailsass
```

If you are using GitHub Packages, configure your `.npmrc` as described in the main project `README.md`.

### Use as global CSS

Import the compiled CSS once in your app entry (for example in a React/Vue/Svelte app):

```js
import '@maalbuquerque/tailsass/dist/tailsass.css';
```

Then you can use the utility classes directly in your markup:

```html
<div class="p-4 my-4 w-full text-center">
  <h1 class="text-3xl font-bold mb-2">Hello Tailsass</h1>
  <p class="text-base text-wrap">
    Utility classes for spacing, sizing, typography, and more.
  </p>
</div>
```

### Use with Sass

If your build supports Sass, you can import the source instead:

```scss
@use '@maalbuquerque/tailsass/src/index' as tailsass;
```

This will generate the same utility classes into your compiled CSS. Use the same class names in your HTML or component templates.

### Responsive variants

Most utilities support responsive prefixes based on your configured breakpoints. For example:

```html
<div class="p-2 md:p-4 lg:p-8">
  <p class="text-base md:text-xl">
    This text and padding grow on larger screens.
  </p>
</div>
```

The exact breakpoint names and values come from the `$breakpoints` map in the library’s Sass variables.

