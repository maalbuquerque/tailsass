## Display & layout utilities

Display utilities cover `display`, flexbox, grid, floats, visibility, and alignment.

### Display modes

- `inline`, `block`, `inline-block`, `flow-root`
- `flex`, `inline-flex`, `grid`, `inline-grid`, `contents`
- `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`
- `list-item`, `hidden`

```html
<div class="flex">
  <div class="block">Item 1</div>
  <div class="block">Item 2</div>
</div>
```

### Flexbox helpers

- Direction: `flex-row`, `flex-column`, `flex-row-reverse`, `flex-column-reverse`
- Wrapping: `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`
- Flex behavior: `flex-none`, `flex-auto`, `flex-initial`, `flex-{n}` (1–12)
- Growth/shrink: `grow`, `grow-0`, `shrink`, `shrink-0`

```html
<div class="flex flex-row gap-4">
  <div class="flex-1">Main</div>
  <aside class="flex-none w-64">Sidebar</aside>
</div>
```

### Grid & columns

- `columns-{n}`: multi-column layouts
- `grid-cols-{n}`: CSS grid columns

```html
<div class="grid grid-cols-3 gap-4">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

### Float & clear

- Floats: `float-left`, `float-right`, `float-none`, `float-start`, `float-end`
- Clearing: `clear-left`, `clear-right`, `clear-both`, `clear-none`, `clear-start`, `clear-end`

### Visibility & z-index

- Visibility: `visible`, `invisible`, `collapse`
- Z index: `z-{n}` in steps of 10 (for example `z-10`, `z-20`, ..., `z-120`)

```html
<div class="relative">
  <div class="absolute z-20">On top</div>
  <div class="absolute z-10">Behind</div>
</div>
```

### Alignment utilities

- Justify content: `justify-start`, `justify-end`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`, `justify-stretch`
- Justify items/self: `justify-items-*`, `justify-self-*`
- Align content: `content-normal`, `content-start`, `content-end`, `content-center`, `content-between`, `content-around`, `content-evenly`, `content-stretch`
- Align items/self: `items-*`, `self-*`
- Place content/items/self: `place-content-*`, `place-items-*`, `place-self-*`

```html
<div class="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>
```

### Screen-reader only

- `sr-only`: visually hides content but keeps it available to assistive technologies

```html
<button>
  <span class="sr-only">Open navigation menu</span>
  <!-- Icon only visible element -->
</button>
```

All display/layout utilities support responsive prefixes (for example `md:flex`, `lg:grid-cols-4`).

