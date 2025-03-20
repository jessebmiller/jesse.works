# Sass Structure Documentation

## Overview

The Sass architecture follows a simplified, flat structure with each file handling distinct concerns:

```
sass/
├── _reset.scss      // CSS reset/normalize
├── _base.scss       // Base styles, typography, variables
├── _components.scss // Buttons, cards, navigation, hero
├── _layouts.scss    // Grid, header, footer, sections
├── _utilities.scss  // Mixins, functions, helper classes
├── _themes.scss     // Theme variables and toggle functionality
└── main.scss        // Main file that imports all partials
```

## File Purposes

### main.scss
The entry point that imports all other partials in the correct order. Import order is critical to ensure that variables and mixins are available where needed.

### _reset.scss
Modern CSS reset that normalizes browser defaults and sets a consistent foundation. Includes:
- Box sizing rules
- Margin and padding reset
- Improved focus styles
- Responsive image handling
- Accessibility considerations

### _base.scss
Defines the fundamental variables and base styles:
- Typography scales (font families, sizes, weights, line heights)
- Spacing scale
- Breakpoints
- Color-agnostic base styles for HTML elements
- Z-index scale

### _themes.scss
Implements the theme system:
- Color themes (Solarized, Rich, Catalan)
- Light/dark mode variants
- CSS custom properties (variables)
- Theme application to base elements

### _utilities.scss
Provides mixins, functions, and utility classes:
- Responsive breakpoint mixins
- Layout helpers (container, clearfix)
- Accessibility helpers
- Typography utilities
- Spacing utility classes
- Flexbox and grid helpers

### _components.scss
Defines reusable UI components:
- Buttons
- Cards (project, article)
- Navigation
- Tags
- Project cards
- Article cards
- Testimonials
- Hero section

### _layouts.scss
Handles page structure and section layouts:
- Container
- Header, footer
- Grid systems
- Section layouts
- Profile section
- Skills grid
- Experience timeline
- Portfolio layouts
- Blog post layout

## Usage Guidelines

### Variables
All variables are declared in `_base.scss` and `_themes.scss` and are available throughout the system. Use the predefined scales:

```scss
// Use spacing scale
margin-bottom: map-get($spacing, '4'); // 1rem (16px)

// Use font size scale
font-size: map-get($font-sizes, 'lg'); // 1.125rem (18px)
```

### Responsive Design
Use the `respond-to` mixin for consistent breakpoints:

```scss
.element {
  width: 100%;
  
  @include respond-to('medium') {
    width: 50%;
  }
}
```

### Theming
Custom properties provide theme values:

```scss
// Theme-aware styling
.element {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
}

// Using accent colors
.highlight {
  color: var(--color-accent-blue);
}
```

## JavaScript Integration

The `theme-toggle.js` file works alongside the Sass structure to:
- Load saved theme preferences from localStorage
- Toggle between light/dark modes
- Switch between color themes (Solarized, Rich, Catalan)
- Update UI to reflect current settings

```javascript
// Available on the global window object
window.themeManager.setTheme('rich');
window.themeManager.setMode('dark');
```

## Compilation for Zola

For Zola integration, compile the Sass files using the built-in Zola Sass processor by:

1. Place the Sass files in the `sass/` directory at the root of your Zola project
2. Ensure the `main.scss` file is correctly set up to import all partials
3. Reference the compiled CSS in your templates:

```html
<link rel="stylesheet" href="{{ get_url(path="main.css") | safe }}">
```
