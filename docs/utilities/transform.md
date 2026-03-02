## Transform utilities

Transform utilities provide simple translate helpers for moving elements fully on or off screen.

### Classes

- `translate-x-full`: move the element 100% along the X axis
- `translate-y-full`: move the element 100% along the Y axis
- `translate-x-0`: reset X translation
- `translate-y-0`: reset Y translation

```html
<div class="relative w-full h-64 overflow-hidden">
  <div class="absolute inset-0 bg-blue-500 translate-x-full">
    I start completely off-screen to the right.
  </div>
</div>
```

These classes are especially useful when combined with animation and transition utilities for sliding panels, drawers, or toasts.

```html
<aside class="fixed inset-y-0 right-0 w-80 translate-x-full transition-transform">
  <!-- Add .translate-x-0 (e.g. via JS) to slide the panel in -->
</aside>
```

