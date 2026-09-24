## Color utilities

Color utilities are **opt-in**. The core Tailsass stylesheet has no palette CSS. Each app compiles the palettes it needs, then imports that bundle beside the core file.

### Why colors are separate

Every palette × shade × `bg` / `text` / `border` / … × hover/focus/dark adds a lot of CSS. Keep core utilities lean, and ship only the colors your product uses.

### Build an app color bundle

Configure `$colors` with `palette()`, compile, and import beside core. Loading `colors` also pulls in `color-variables` (all `--*` tokens). Override any token in your app if you need a custom brand.

```scss
// styles/colors.scss
@use '@maalbuquerque/tailsass/src/color-palette' as *;
@use '@maalbuquerque/tailsass/src/colors' with (
  $colors: (
    'slate': palette('slate'),
    'purple': palette('purple'),
  )
);

// Optional brand override
// :root {
//   --purple-600: hsl(271 81% 48%);
// }
```

```bash
npx sass styles/colors.scss dist/app-colors.css --no-source-map
```

```js
import '@maalbuquerque/tailsass/dist/tailsass.css';
import './app-colors.css';
```

### Add another palette

Add it to `$colors`. Catalog tokens already exist — you only choose which utility classes to generate.

```scss
@use '@maalbuquerque/tailsass/src/color-palette' as *;
@use '@maalbuquerque/tailsass/src/colors' with (
  $colors: (
    'slate': palette('slate'),
    'purple': palette('purple'),
    'blue': palette('blue'),
  )
);
```

### Full catalog

Available names: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

```scss
@use '@maalbuquerque/tailsass/src/colors';
```

### Naming

- Background: `bg-{color}-{shade}`
- Text: `text-{color}-{shade}`
- Border: `border-{color}-{shade}`
- Outline: `outline-{color}-{shade}`
- Shadow glow: `shadow-{color}-{shade}`
- Accent: `accent-{color}-{shade}`

Shades are `50`–`950`.

```html
<button class="px-4 py-2 bg-purple-600 text-white shadow-purple-400">
  Primary button
</button>
```

```html
<div class="border border-slate-300 bg-slate-50 text-slate-900 p-4">
  Subtle card using slate tones.
</div>
```

### White, black, and transparent

Included whenever you emit color utilities: `bg-white`, `bg-black`, `bg-transparent`, plus matching `text-*`, `border-*`, `shadow-*`, `outline-*`, and `accent-*` for white and black.

### State and color-scheme variants

- **State prefixes** (for example `hover:bg-purple-800`, `focus:border-purple-500`) based on `$states`
- **Color-scheme prefixes** (for example `dark:bg-slate-900`, `light:text-slate-900`) based on `$color-schemes`
