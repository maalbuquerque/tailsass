## Cursor utilities

Cursor utilities let you control the mouse cursor style for interactive elements.

### Common cursors

- `cursor-auto`, `cursor-default`
- `cursor-pointer` (links, buttons)
- `cursor-text`
- `cursor-move`
- `cursor-wait`, `cursor-progress`
- `cursor-help`
- `cursor-not-allowed`, `cursor-no-drop`

```html
<button class="px-4 py-2 cursor-pointer">
  Clickable button
</button>

<button class="px-4 py-2 cursor-not-allowed" disabled>
  Disabled button
</button>
```

### Advanced cursors

Additional helpers include:

- `cursor-none`, `cursor-context-menu`, `cursor-cell`, `cursor-crosshair`, `cursor-vertical-text`
- Grab/resize: `cursor-grab`, `cursor-grabbing`, `cursor-all-scroll`
- Resize variants: `cursor-col-resize`, `cursor-row-resize`, `cursor-n-resize`, `cursor-e-resize`, `cursor-s-resize`, `cursor-w-resize`, `cursor-ne-resize`, `cursor-nw-resize`, `cursor-se-resize`, `cursor-sw-resize`, `cursor-ew-resize`, `cursor-ns-resize`, `cursor-nesw-resize`, `cursor-nwse-resize`
- Zoom: `cursor-zoom-in`, `cursor-zoom-out`

```html
<div class="cursor-grab">
  Drag me
</div>
```

Most cursor utilities also support state prefixes (for example `hover:cursor-pointer`) based on `$states`.

