## Typography utilities

Typography utilities cover text alignment, wrapping, truncation, and font weight.

### Text alignment

- `text-left`, `text-right`, `text-center`, `text-justify`

```html
<p class="text-left">Left aligned</p>
<p class="text-center">Centered</p>
<p class="text-right">Right aligned</p>
```

### Wrapping and truncation

- `truncate`: single-line text with ellipsis
- `text-ellipsis`, `text-clip`: overflow behavior
- `text-wrap`: normal wrapping
- `text-nowrap`: no wrapping
- `text-balance`, `text-pretty`: advanced wrapping where supported

```html
<p class="truncate w-[200px]">
  Very long line of text that will be cut off with an ellipsis when it exceeds the container width.
</p>
```

```html
<p class="text-nowrap">
  This sentence will never wrap to the next line.
</p>
```

### Font sizes

You can use text size utilities to scale your typography:

- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`
- `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl`, `text-8xl`, `text-9xl`

```html
<h1 class="text-4xl font-bold">Page title</h1>
<p class="text-base">
  Regular body copy.
</p>
<small class="text-xs">
  Tiny helper text.
</small>
```

### Font weight

- `font-bold`

```html
<span class="font-bold">Important label</span>
```

All typography utilities support responsive prefixes (for example `md:text-center`, `lg:text-4xl`).

