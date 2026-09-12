## Border & radius utilities

Border utilities control border style, width, outline, and radius.

### Border styles

- `border-solid`, `border-dashed`, `border-dotted`, `border-double`, `border-none`
- `outline-solid`, `outline-dashed`, `outline-dotted`, `outline-double`, `outline-none`

```html
<div class="border-solid border-1 rounded p-4">
  Solid 1px border with default radius.
</div>
```

### Border widths

Use numeric suffixes from `0` through `12`:

- `border-{n}`, `border-t-{n}`, `border-r-{n}`, `border-b-{n}`, `border-l-{n}`
- `border-x-{n}`, `border-y-{n}`
- `outline-{n}`, `outline-offset-{n}`

```html
<div class="border-2 border-y-4 outline-2 outline-offset-2 p-4">
  Custom border and outline widths.
</div>
```

### Border radius

Tailwind-compatible named scale:

- `rounded-none`, `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
- Directional: `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-s`, `rounded-e` (and with size suffixes, e.g. `rounded-t-lg`)

```html
<button class="px-4 py-2 rounded-md">
  Medium rounded button
</button>

<button class="px-4 py-2 rounded-full">
  Pill button
</button>
```

Most border utilities also have state-prefixed variants (for example `hover:border-2`, `focus:outline-2`) based on the configured `$states`.

