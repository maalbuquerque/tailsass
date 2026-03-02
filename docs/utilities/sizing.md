## Sizing utilities

Sizing utilities control width and height with a small, predictable set of classes.

### Core sizes

- `w-auto`, `h-auto`
- `w-full`, `h-full`
- `w-screen`, `h-screen`
- `w-min`, `h-min`, `w-max`, `h-max`, `w-fit`, `h-fit`

```html
<div class="w-full h-screen">
  <div class="w-fit h-fit p-4">
    I size to my content.
  </div>
</div>
```

### Percentage and pixel sizes

You can use simple percentage and fixed pixel helpers:

- Percent: `w-10`, `w-20`, ..., `w-100` (10% steps), and matching `h-*` versions
- Pixels: `w-100px`, `w-200px`, ..., `w-1000px` (100px steps), and matching `h-*` versions

```html
<div class="w-50 h-300px">
  50% width, 300px height
</div>
```

### Responsive sizing

All sizing classes support breakpoint prefixes (for example `sm:`, `md:`, `lg:` depending on your `$breakpoints`):

```html
<div class="w-full md:w-50 lg:w-33">
  I shrink on small screens and grow on larger ones.
</div>
```

Use these helpers anywhere you need quick layout sizing without hand-writing custom CSS.

