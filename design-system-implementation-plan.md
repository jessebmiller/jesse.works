# Design System Implementation Plan

## 1. Color System Implementation

**Status:** ✅ Colors extracted to TOML format

**Next Steps:**
- Create Sass map variables from TOML data
- Implement CSS custom properties for each theme
- Create theme switching mixins
- Define semantic color variables (e.g., `$color-primary`, `$color-text`)

**Implementation Details:**
```scss
// _colors.scss
// Generate CSS variables from theme data
@each $theme-name, $theme-data in $themes {
  [data-theme="#{$theme-name}"] {
    // Base colors
    @each $color-name, $color-value in map-get($theme-data, 'light', 'base') {
      --color-base-#{$color-name}: #{map-get($color-value, 'hex')};
    }

    // Content colors
    @each $color-name, $color-value in map-get($theme-data, 'light', 'content') {
      --color-content-#{$color-name}: #{map-get($color-value, 'hex')};
    }

    // Accent colors
    @each $color-name, $color-value in map-get($theme-data, 'accent') {
      --color-accent-#{$color-name}: #{map-get($color-value, 'hex')};
    }
  }

  // Repeat for dark mode
  [data-theme="#{$theme-name}"][data-mode="dark"] {
    // ...
  }
}
```

## 2. Sass Architecture

**Status:** 🔄 Planning stage

**Simplified File Structure:**
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

**Implementation Details:**
- Each partial contains related functionality in a single file
- Maintain clean separation of concerns
- Generate utility classes for common needs

**Example Pattern:**
```scss
// main.scss
@import 'reset';
@import 'base';
@import 'components';
@import 'layouts';
@import 'utilities';
@import 'themes';
```

## 3. Responsive Design System

**Status:** 🔄 Planning stage

**Breakpoints:**
```scss
// _variables.scss
$breakpoints: (
  'small': 480px,
  'medium': 768px,
  'large': 1024px,
  'xlarge': 1280px
);
```

**Responsive Mixins:**
```scss
// _mixins.scss
@mixin respond-to($breakpoint) {
  $value: map-get($breakpoints, $breakpoint);

  @if $value != null {
    @media (min-width: $value) {
      @content;
    }
  } @else {
    @warn "Unknown breakpoint: #{$breakpoint}";
  }
}

// Usage
.element {
  width: 100%;

  @include respond-to('medium') {
    width: 50%;
  }
}
```

**Component Implementation Pattern:**
- Mobile-first approach
- Component-specific breakpoints when needed
- Container-based layouts with max-width constraints

## 4. Typography System

**Status:** 🔄 Planning stage

**Font Families:**
```scss
// _typography.scss
$font-family-base: 'Montserrat', sans-serif;
$font-family-heading: 'Montserrat Alternates', sans-serif;
```

**Type Scale:**
```scss
// _typography.scss
$font-sizes: (
  'xs': 0.75rem,    // 12px
  'sm': 0.875rem,   // 14px
  'base': 1rem,     // 16px
  'lg': 1.125rem,   // 18px
  'xl': 1.25rem,    // 20px
  '2xl': 1.5rem,    // 24px
  '3xl': 1.875rem,  // 30px
  '4xl': 2.25rem,   // 36px
  '5xl': 3rem       // 48px
);

// Generate utility classes
@each $name, $size in $font-sizes {
  .text-#{$name} {
    font-size: $size;
  }
}
```

**Line Heights:**
```scss
// _typography.scss
$line-heights: (
  'none': 1,
  'tight': 1.25,
  'snug': 1.375,
  'normal': 1.5,
  'relaxed': 1.625,
  'loose': 2
);
```

**Font Weights:**
```scss
// _typography.scss
$font-weights: (
  'light': 300,
  'normal': 400,
  'medium': 500,
  'semibold': 600,
  'bold': 700
);
```

**Implementation Details:**
- Create text mixins for common text styles
- Implement consistent vertical rhythm
- Set base text styles on html/body elements

## 5. Theme Toggle Implementation

**Status:** 🔄 Planning stage

**Theme Data Structure:**
- Store theme preference in localStorage
- Use data attributes on body (`data-theme="solarized"` and `data-mode="light|dark"`)

**JavaScript Implementation:**
```javascript
// theme-toggle.js
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeSelector = document.getElementById('theme-selector');

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('theme') || 'solarized';
  const savedMode = localStorage.getItem('mode') ||
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.body.dataset.theme = savedTheme;
  document.body.dataset.mode = savedMode;

  // Mode toggle (light/dark)
  themeToggle.addEventListener('click', () => {
    const newMode = document.body.dataset.mode === 'light' ? 'dark' : 'light';
    document.body.dataset.mode = newMode;
    localStorage.setItem('mode', newMode);
  });

  // Theme selector (solarized/rich/catalan)
  themeSelector.addEventListener('change', (e) => {
    const newTheme = e.target.value;
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  });
});
```

**CSS Implementation:**
```scss
// _theme-toggle.scss
.theme-toggle {
  // Toggle button styling
}

.theme-selector {
  // Theme dropdown styling
}

// Theme transitions
body {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

## Next Steps & Timeline

1. **Day 1 (Today)**:
   - ✅ Extract color themes to TOML
   - Set up Sass architecture folders
   - Create initial variables and mixins

2. **Day 2**:
   - Implement color system in Sass
   - Build typography system
   - Create responsive mixins

3. **Day 3**:
   - Implement theme toggle functionality
   - Build core components (buttons, cards)
   - Create layout templates

4. **Day 4**:
   - Test components across breakpoints
   - Finalize themeable components
   - Polish and optimize
