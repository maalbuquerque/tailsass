## Spacing utilities

Tailsass provides margin, padding, gap, and positional spacing helpers that follow Tailwind's size scale.

### Class naming

- **Margin**: `m-{n}`, `mt-{n}`, `mr-{n}`, `mb-{n}`, `ml-{n}`, `mx-{n}`, `my-{n}`
- **Padding**: `p-{n}`, `pt-{n}`, `pr-{n}`, `pb-{n}`, `pl-{n}`, `px-{n}`, `py-{n}`
- **Gap** (for flex/grid): `gap-{n}`
- **Position offsets**: `top-{n}`, `right-{n}`, `bottom-{n}`, `left-{n}`

`{n}` follows the Tailwind fixed size scale:

| Class suffix | Value |
|---|---|
| `0` | `0rem` |
| `1` | `0.25rem` |
| `2` | `0.5rem` |
| `3` | `0.75rem` |
| `4` | `1rem` |
| `5` | `1.25rem` |
| `6` | `1.5rem` |
| `7` | `1.75rem` |
| `8` | `2rem` |
| `9` | `2.25rem` |
| `10` | `2.5rem` |
| `11` | `2.75rem` |
| `12` | `3rem` |
| `14` | `3.5rem` |
| `16` | `4rem` |
| `20` | `5rem` |
| `24` | `6rem` |
| `28` | `7rem` |
| `32` | `8rem` |
| `36` | `9rem` |
| `40` | `10rem` |
| `44` | `11rem` |
| `48` | `12rem` |
| `52` | `13rem` |
| `56` | `14rem` |
| `60` | `15rem` |
| `64` | `16rem` |
| `72` | `18rem` |
| `80` | `20rem` |
| `96` | `24rem` |

Note that values 0–12 are contiguous, then the scale becomes non-linear (14, 16, 20, 24, …, 96).

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
