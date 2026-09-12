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

### Fraction sizes

Tailwind-compatible fraction utilities (`/` escaped in CSS as `\/`):

- Halves: `w-1/2`
- Thirds: `w-1/3`, `w-2/3`
- Fourths: `w-1/4`, `w-2/4`, `w-3/4`
- Fifths: `w-1/5` … `w-4/5`
- Sixths: `w-1/6` … `w-5/6`
- Twelfths: `w-1/12` … `w-11/12`

Same set for `h-*`. Responsive prefixes work too (`md:w-1/2`).

```html
<div class="flex">
  <div class="w-1/3">One third</div>
  <div class="w-2/3">Two thirds</div>
</div>
```

### Percentage and pixel sizes

Fixed arbitrary-value whitelist (Tailwind-style brackets). Not open-ended — only these steps are generated:

- **Percent** (10% steps): `w-[10%]`, `w-[20%]`, …, `w-[100%]` and matching `h-[…]`
- **Pixels** (100px steps): `w-[100px]`, `w-[200px]`, …, `w-[1000px]` and matching `h-[…]`

```html
<div class="w-[50%] h-[300px]">
  50% width, 300px height
</div>
```

### Responsive sizing

All sizing classes support breakpoint prefixes (`xs:`, `sm:`, `md:`, `lg:`, `xl:`, `2xl:`, `3xl:`):

```html
<div class="w-full md:w-1/2 lg:w-64 2xl:w-80">
  Full width on mobile, half on medium, fixed on large+.
</div>
```
