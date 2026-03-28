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

### Tailwind fixed size scale

Width and height classes follow the Tailwind size scale with `w-{n}` and `h-{n}`:

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

```html
<div class="w-64 h-32">
  Fixed 16rem × 8rem box.
</div>
```

### Percentage and pixel sizes

Percentage helpers use a `pct` suffix in 10% steps, and pixel helpers use a `px` suffix in 100px steps:

- **Percent**: `w-10pct`, `w-20pct`, …, `w-100pct` and matching `h-*` versions
- **Pixels**: `w-100px`, `w-200px`, …, `w-1000px` and matching `h-*` versions

```html
<div class="w-50pct h-300px">
  50% width, 300px height
</div>
```

### Responsive sizing

All sizing classes support breakpoint prefixes (for example `sm:`, `md:`, `lg:` depending on your `$breakpoints`):

```html
<div class="w-full md:w-50pct lg:w-64">
  Full width on mobile, 50% on medium, 16rem on large.
</div>
```
