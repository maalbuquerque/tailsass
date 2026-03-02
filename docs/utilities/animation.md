## Animation & transition utilities

Animation and transition utilities let you quickly add motion without writing keyframes or timing functions by hand.

### Animations

- `animate-spin`: continuous spin
- `animate-pulse`: soft pulsing effect
- `animate-bounce`: vertical bounce
- `animate-none`: disable animation

```html
<button class="w-10 h-10 rounded-full border animate-spin">
  <!-- Spinner -->
</button>
```

```html
<div class="p-4 animate-pulse">
  Loading state content...
</div>
```

### Transitions

- `transition-none`
- `transition-all`
- `transition-colors`
- `transition-opacity`
- `transition-transform`

```html
<button class="px-4 py-2 transition-colors">
  Hover me
</button>
```

Combine these with other utilities (for example colors, transforms, or opacity) to build smooth interactive states.

