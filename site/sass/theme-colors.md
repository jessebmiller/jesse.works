# Theme Color System Guide

## Introduction

Our unified theme system provides a consistent approach to colors across all themes. Instead of remembering different color names for each theme, you can use functional, role-based color variables that work the same way regardless of which theme is active.

## Color Structure

Each theme is organized into three main categories:

### Base Colors

Base colors are used for backgrounds and containers:

- `--color-base-background`: Primary background color (page background)
- `--color-base-surface`: Secondary background color (card, modal backgrounds)
- `--color-base-muted`: Subtle background or border color (dividers, subtle UI elements)
- `--color-base-subtle`: Very subtle background variations (hover states, alternating rows)

### Content Colors

Content colors are used for text and icons:

- `--color-content-primary`: Main text color (headings, body text)
- `--color-content-medium`: Secondary text color (less emphasized text)
- `--color-content-muted`: Tertiary text color (captions, hints)
- `--color-content-subtle`: De-emphasized text (disabled text, placeholders)

### Accent Colors

Accent colors are used for interactive elements and visual emphasis:

- `--color-accent-primary`: Main brand color (primary buttons, links)
- `--color-accent-secondary`: Alternative accent (secondary buttons)
- `--color-accent-info`: Information color (info notifications, help icons)
- `--color-accent-success`: Success/positive color (success messages, checkmarks)
- `--color-accent-warning`: Warning color (warning messages, alert icons)
- `--color-accent-error`: Error/negative color (error messages, delete buttons)
- `--color-accent-highlight`: Highlight color (selected items, highlighted text)
- `--color-accent-special`: Special accent (premium features, promotions)


For common UI elements, we provide these semantic variables:

- `--color-bg-primary`: Main background color
- `--color-bg-secondary`: Secondary/component background color
- `--color-text-primary`: Main text color
- `--color-text-secondary`: Secondary text color
- `--color-border`: Standard border color

## Usage Examples

### Buttons

```css
/* Primary button */
.button-primary {
  background-color: var(--color-accent-primary);
  color: var(--color-base-background);
}

/* Secondary button */
.button-secondary {
  background-color: var(--color-accent-secondary);
  color: var(--color-base-background);
}

/* Danger button */
.button-danger {
  background-color: var(--color-accent-error);
  color: var(--color-base-background);
}
```

### Cards and Containers

```css
.card {
  background-color: var(--color-base-surface);
  border: 1px solid var(--color-border);
}

.card-header {
  border-bottom: 1px solid var(--color-border);
}

.subtle-container {
  background-color: var(--color-base-subtle);
}
```

### Typography

```css
body {
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--color-content-primary);
}

.caption, .hint {
  color: var(--color-content-muted);
}

.disabled-text {
  color: var(--color-content-subtle);
}
```

### Status Elements

```css
.status-info {
  background-color: var(--color-accent-info);
}

.status-success {
  background-color: var(--color-accent-success);
}

.status-warning {
  background-color: var(--color-accent-warning);
}

.status-error {
  background-color: var(--color-accent-error);
}
```

## Available Themes

Our system includes the following themes, each with light and dark modes:

### Solarized
A precise color scheme built with specific, fixed color values.

### Rich
A warm, vibrant theme with clay tones and punchy accents.

### Catalan
An earthy theme inspired by Mediterranean colors.

## Dark/Light Mode

Each theme has both light and dark mode variants that automatically switch based on the `data-mode` attribute. The system maintains the same color roles between modes, keeping your design consistent.

## Best Practices

1. **Use semantic variables** when possible for better consistency.
2. **Avoid hardcoded colors** - always use the theme variables.
3. **Consider contrast** - ensure text remains readable in all themes and modes.
4. **Test all themes** - verify your design works across all themes in both light and dark modes.
5. **Use accent colors purposefully** - maintain their meaning (errors should always use error color).

## Adding New Components

When adding new components, consider where they fit in the existing color system:

1. Identify the role of the component (container, content, interactive)
2. Choose the appropriate color variables based on that role
3. Test across themes and modes

By following these guidelines, we can maintain a consistent look and feel across our application while supporting multiple themes and accessibility needs.
