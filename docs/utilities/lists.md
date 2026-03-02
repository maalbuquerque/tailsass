## List utilities

List utilities control the list marker style for ordered and unordered lists.

### List styles

- `list-disc`: filled circle bullets
- `list-decimal`: numbered list
- `list-none`: no bullets/numbers

```html
<ul class="list-disc pl-6">
  <li>First item</li>
  <li>Second item</li>
</ul>

<ol class="list-decimal pl-6">
  <li>First step</li>
  <li>Second step</li>
</ol>

<ul class="list-none pl-0">
  <li>No markers here</li>
</ul>
```

Use these with spacing/utilities like `pl-*` to control indentation separately from the marker style.

