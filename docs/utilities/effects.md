## Effects (opacity) utilities

Effects utilities currently expose a simple, predictable set of opacity helpers.

### Opacity

- `opacity-0`, `opacity-10`, `opacity-20`, ..., `opacity-100`

```html
<div class="opacity-50">
  50% opaque content
</div>
```

You can also combine opacity with state prefixes (for example `hover:opacity-80`, `focus:opacity-100`) based on the configured `$states`.

```html
<button class="opacity-80 hover:opacity-100 transition-opacity">
  Fade in on hover
</button>
```

