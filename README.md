# Tailsass

**Tailsass is an independent project and is not affiliated with, endorsed by, or supported by Tailwind Labs or the Tailwind CSS project.**

Unofficial utility-first CSS/Sass helpers. Use as compiled CSS or import the Sass source in your project.

**Docs:** [Documentation](https://github.com/maalbuquerque/tailsass/blob/main/docs/index.md)

## Install

```bash
npm install @maalbuquerque/tailsass
```

## Use

**As CSS** (e.g. in your app entry or bundler):

```js
import '@maalbuquerque/tailsass/dist/tailsass.css';
```

**As Sass** (if your build supports Sass):

```scss
@use '@maalbuquerque/tailsass/src/index' as tailsass;
```

## Scripts

| Script        | Description                          |
|---------------|--------------------------------------|
| `npm run build`   | Build expanded CSS to `dist/`        |
| `npm run build:min` | Build minified CSS to `dist/`      |
| `npm run watch`   | Watch and rebuild expanded CSS       |
| `npm run watch:min` | Watch and rebuild minified CSS    |

## Status / contributions

MIT-licensed and open to forks. Contributions are **best-effort** — see [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)
