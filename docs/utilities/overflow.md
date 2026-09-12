## Overflow utilities

Overflow utilities control how content that exceeds its container is handled.

### General overflow

- `overflow-auto`
- `overflow-hidden`
- `overflow-visible`
- `overflow-clip`
- `overflow-scroll`

```html
<div class="w-[200px] h-[100px] overflow-auto">
  Long content that becomes scrollable when it exceeds the box.
</div>
```

### Directional overflow

Directional helpers let you focus on a single axis:

- `overflow-x-auto`, `overflow-y-auto`
- `overflow-x-hidden`, `overflow-y-hidden`
- `overflow-x-visible`, `overflow-y-visible`
- `overflow-x-clip`, `overflow-y-clip`
- `overflow-x-scroll`, `overflow-y-scroll`

```html
<div class="w-[200px] overflow-x-scroll">
  <div class="w-[400px]">
    Horizontal scrolling only.
  </div>
</div>
```

Use these together with sizing and spacing utilities to build scrollable panels, code blocks, and containers.

