# Tailsass

Utility-first CSS/Sass helpers. Use as compiled CSS or import the Sass source in your project.

**Docs:** [maalbuquerque.github.io/tailsass](https://maalbuquerque.github.io/tailsass/)

## Install

```bash
npm install @maalbuquerque/tailsass
```

## Use

**Core CSS** (spacing, sizing, typography, layout — no color palettes):

```js
import '@maalbuquerque/tailsass/dist/tailsass.css';
```

**Colors** are opt-in. Compile only the palettes you need, then import beside core:

```scss
// styles/colors.scss
@use '@maalbuquerque/tailsass/src/color-palette' as *;
@use '@maalbuquerque/tailsass/src/colors' with (
  $colors: (
    'slate': palette('slate'),
    'purple': palette('purple'),
  )
);
```

```bash
npx sass styles/colors.scss dist/app-colors.css
```

```js
import '@maalbuquerque/tailsass/dist/tailsass.css';
import './app-colors.css';
```

Tokens come from `src/color-variables` automatically. Override any `--*` in your app if you need a custom brand. See the [Colors docs](https://maalbuquerque.github.io/tailsass/docs/colors/).

**As Sass** (core utilities):

```scss
@use '@maalbuquerque/tailsass/src/index' as tailsass;
```

## Scripts

| Script        | Description                          |
|---------------|--------------------------------------|
| `npm run build`   | Build expanded core CSS to `dist/`   |
| `npm run build:min` | Build minified core CSS to `dist/` |
| `npm run watch`   | Watch and rebuild expanded CSS       |
| `npm run watch:min` | Watch and rebuild minified CSS    |

## Status / contributions

MIT-licensed and open to forks. Contributions are **best-effort** — see [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)
