## Spacing utilities

Tailsass provides margin, padding, gap, and positional spacing helpers modeled after utility-first CSS frameworks.

### Class naming

- **Margin**: `m-{n}`, `mt-{n}`, `mr-{n}`, `mb-{n}`, `ml-{n}`, `mx-{n}`, `my-{n}`
- **Padding**: `p-{n}`, `pt-{n}`, `pr-{n}`, `pb-{n}`, `pl-{n}`, `px-{n}`, `py-{n}`
- **Gap** (for flex/grid): `gap-{n}`
- **Position offsets**: `top-{n}`, `right-{n}`, `bottom-{n}`, `left-{n}`

`{n}` is an integer from `0` through `36`, multiplied by the base `--spacing` custom property.

### Basic examples

```html
<div class="p-4 m-4">
  <button class="px-4 py-2 mx-2">
    Spaced button
  </button>
  <button class="px-4 py-2 mx-2">
    Another button
  </button>
</div>
```

```html
<ul class="flex gap-4">
  <li class="p-2">Item 1</li>
  <li class="p-2">Item 2</li>
  <li class="p-2">Item 3</li>
  </ul>
```

### Auto spacing

Use `auto` variants to center or push content:

- `m-auto`, `mt-auto`, `mr-auto`, `mb-auto`, `ml-auto`, `mx-auto`, `my-auto`

```html
<div class="flex">
  <button class="ml-auto px-4 py-2">
    Right-aligned button
  </button>
</div>
```

### Responsive spacing

All spacing classes support breakpoint prefixes (e.g. `sm:`, `md:`, `lg:` depending on your `$breakpoints`):

```html
<section class="p-2 md:p-4 lg:p-8">
  <p class="mb-2 md:mb-4">
    Spacing increases as the viewport grows.
  </p>
</section>
```

You can copy any of these examples into your `.md` files as fenced code blocks to show how spacing works.

