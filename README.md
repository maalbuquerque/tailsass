# Tailsass

**Tailsass is an independent project and is not affiliated with, endorsed by, or supported by Tailwind Labs or the Tailwind CSS project.**

Unofficial utility-first CSS/Sass helpers. Use as compiled CSS or import the Sass source in your project.

## Install

```bash
npm install @maalbuquerque/tailsass
```

Configure `.npmrc` if using GitHub Packages:

```
@maalbuquerque:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
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

## License

ISC
