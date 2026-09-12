## Position utilities

Position utilities expose the common CSS `position` values and pair well with spacing offsets.

### Position values

- `static`
- `relative`
- `absolute`
- `fixed`
- `sticky`

```html
<div class="relative">
  <div class="absolute top-2 right-2">
    Badge in the top-right corner
  </div>
</div>
```

### Responsive positions

All position classes support breakpoint prefixes (for example `sm:fixed`, `md:absolute`, `lg:relative`, `2xl:sticky`).

Combine these with spacing utilities such as `top-{n}`, `right-{n}`, `bottom-{n}`, `left-{n}` to precisely place elements.

