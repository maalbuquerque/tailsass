## Preflight (base styles)

Preflight is a small set of base styles that normalize browser defaults and provide sensible typography foundations.

### What preflight does

Preflight:

- Resets margins, padding, and border box-sizing for most elements
- Normalizes font families for `html` and code-like elements (`code`, `kbd`, `samp`, `pre`)
- Resets heading elements (`h1`–`h6`) to inherit font sizing and weight
- Removes default list styles for `ol`, `ul`, and `menu`
- Normalizes form controls (`button`, `input`, `select`, `textarea`)
- Ensures `[hidden]` elements are actually hidden
- Adjusts various small browser quirks (spin buttons, search inputs, file upload buttons, etc.)

You don’t use preflight with classes; it is applied globally when you include the compiled stylesheet.

### When to use it

Include preflight when you want:

- A clean, predictable baseline across browsers
- Utility classes (like spacing and typography) to fully control layout and appearance

If you prefer to keep native browser styles, you can fork the library and remove or customize the `preflight` import in `src/index.scss`.

