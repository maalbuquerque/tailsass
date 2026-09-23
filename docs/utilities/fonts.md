## Fonts

Tailsass does not ship a fixed set of brand fonts. Load the typeface you want, then apply it globally or through small custom classes. Size, weight, and alignment still come from the [Typography](./typography.md) utilities.

### Default stack

Preflight sets a system UI stack on `html`. Body text inherits it until you override it.

```css
html {
  font-family:
    system-ui,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji';
}
```

### Load a font

Pick any source — Google Fonts, Adobe Fonts, Fontshare, or self-hosted files. The family name you load must match the name you use in CSS.

Google Fonts via a stylesheet link:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

Or self-host with `@font-face`:

```css
@font-face {
  font-family: 'Fraunces';
  src: url('/fonts/Fraunces-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

### Apply globally

Override `html` (or `body`) after importing Tailsass so every element inherits your font.

```css
/* after importing Tailsass */
html {
  font-family: 'Fraunces', system-ui, sans-serif;
}
```

```scss
// styles/globals.scss
@use '@maalbuquerque/tailsass/src/index';

html {
  font-family: 'Fraunces', system-ui, sans-serif;
}
```

### Apply with your own classes

For mixed type (display headlines, body, code), define small font-family utilities and combine them with Tailsass size and weight classes.

```css
.font-display {
  font-family: 'Fraunces', Georgia, serif;
}

.font-mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}
```

```html
<h1 class="font-display text-4xl font-bold mb-2">
  Display headline
</h1>
<p class="text-base">
  Body stays on the default stack.
</p>
<code class="font-mono text-sm">const answer = 42;</code>
```

### Compose with Sass @extend

Define font classes once, then fold them into component selectors:

```scss
// styles/_fonts.scss
.font-display {
  font-family: 'Fraunces', Georgia, serif;
}

.font-mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}

.card-title {
  @extend .font-display;
  @extend .text-2xl;
  @extend .font-bold;
}
```

Size, weight, alignment, and color stay with Tailsass (`text-4xl`, `font-bold`, `text-center`, `text-purple-700`). Your CSS only needs to name the typeface.
