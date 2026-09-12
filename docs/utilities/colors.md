## Color utilities

Color utilities provide background, text, border, outline, shadow, and accent colors based on the Tailsass color palette.

### Palette and naming

Colors are organized by name and shade (`50`–`950`). Full palettes:

`slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

- Background: `bg-{color}-{shade}`
- Text: `text-{color}-{shade}`
- Border: `border-{color}-{shade}`
- Outline: `outline-{color}-{shade}`
- Shadow glow: `shadow-{color}-{shade}`
- Accent (for checkboxes/radios): `accent-{color}-{shade}`

```html
<button class="px-4 py-2 bg-blue-600 text-white shadow-blue-400">
  Primary button
</button>
```

```html
<div class="border border-slate-300 bg-slate-50 text-slate-900 p-4">
  Subtle card using slate tones.
</div>
```

### White, black, and transparent

- `bg-white`, `bg-black`, `bg-transparent`
- `text-white`, `text-black`
- `border-white`, `border-black`
- `shadow-white`, `shadow-black`
- `outline-white`, `outline-black`
- `accent-white`, `accent-black`

```html
<button class="px-4 py-2 bg-black text-white border-white">
  High contrast
</button>
```

### State and color-scheme variants

Most color utilities support:

- **State prefixes** (for example `hover:bg-blue-700`, `focus:outline-emerald-500`) based on `$states`
- **Color-scheme prefixes** (for example `dark:bg-slate-900`, `light:text-slate-900`) based on `$color-schemes`

Use these to build consistent, theme-aware components without custom CSS.

