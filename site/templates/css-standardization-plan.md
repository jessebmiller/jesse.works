# CSS Class Naming Convention Standardization Plan

## Introduction

This document outlines a plan to standardize the CSS class naming conventions across the website templates. The current implementation uses inconsistent naming patterns that make maintenance more difficult and increase the CSS file size due to redundant selectors.

A consistent naming convention will:
- Improve code readability and maintainability
- Reduce CSS file size by eliminating redundant patterns
- Make it easier to identify component relationships
- Create a more scalable system for future development

## Proposed Naming Convention: BEM

We recommend adopting a modified BEM (Block Element Modifier) methodology. BEM provides a logical structure that clearly communicates the relationships between components.

### Basic Structure

```
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
```

- **Block**: Standalone component that is meaningful on its own (e.g., `card`, `button`, `header`)
- **Element**: A part of a block with no standalone meaning (e.g., `card__title`, `button__icon`)
- **Modifier**: A flag on a block or element to change appearance or behavior (e.g., `button--primary`)

## Current Issues and Solutions

### 1. Inconsistent Section Headings

**Current implementation:**
```html
<!-- In some files -->
<h2 class="section-heading">Experience Highlights</h2>

<!-- In other files -->
<h2 class="section-title">FEATURED WORK</h2>
```

**Standardized approach:**
```html
<h2 class="section__heading">Experience Highlights</h2>
<h2 class="section__heading">FEATURED WORK</h2>
```

### 2. Button Variations

**Current implementation:**
```html
<a href="#" class="primary-button">See my work</a>
<a href="#" class="secondary-button">Read my thoughts</a>
<a href="#" class="cta-button">Get in Touch</a>
<a href="#" class="nav-cta">Contact</a>
<a href="#" class="case-study-button">Read Full Case Study</a>
```

**Standardized approach:**
```html
<a href="#" class="btn btn--primary">See my work</a>
<a href="#" class="btn btn--secondary">Read my thoughts</a>
<a href="#" class="btn btn--cta">Get in Touch</a>
<a href="#" class="nav__btn btn--cta">Contact</a>
<a href="#" class="btn btn--primary">Read Full Case Study</a>
```

### 3. Container Inconsistencies

**Current implementation:**
```html
<div class="content-container">...</div>
<div class="profile-grid">...</div>
<div class="articles-grid">...</div>
<div class="work-grid">...</div>
```

**Standardized approach:**
```html
<div class="container">...</div>
<div class="grid grid--profile">...</div>
<div class="grid grid--articles">...</div>
<div class="grid grid--work">...</div>
```

### 4. Component Prefixing Redundancy

**Current implementation:**
```html
<article class="article-card">
    <div class="article-header">...</div>
    <h3 class="article-title">...</h3>
    <p class="article-description">...</p>
</article>
```

**Standardized approach:**
```html
<article class="article">
    <div class="article__header">...</div>
    <h3 class="article__title">...</h3>
    <p class="article__description">...</p>
</article>
```

## Detailed Component Examples

### Hero Component

**Current:**
```html
<header class="hero-container">
  <div class="content-container">
    <div class="hero-grid">
      <div class="hero-content">
        <h1 class="hero-heading">
          Engineering <span class="accent">meets</span> Product Leadership
        </h1>
        <p class="hero-description">
          Building pragmatic solutions with human-centered design and technical precision.
        </p>
        <div class="button-container">
          <a href="#" class="primary-button">See my work</a>
          <a href="#" class="secondary-button">Read my thoughts</a>
        </div>
      </div>
      <div class="hero-visual">...</div>
    </div>
  </div>
</header>
```

**Standardized:**
```html
<header class="hero">
  <div class="container">
    <div class="hero__grid">
      <div class="hero__content">
        <h1 class="hero__heading">
          Engineering <span class="text--accent">meets</span> Product Leadership
        </h1>
        <p class="hero__description">
          Building pragmatic solutions with human-centered design and technical precision.
        </p>
        <div class="hero__buttons">
          <a href="#" class="btn btn--primary">See my work</a>
          <a href="#" class="btn btn--secondary">Read my thoughts</a>
        </div>
      </div>
      <div class="hero__visual">...</div>
    </div>
  </div>
</header>
```

### Card Components

**Current (Article Card):**
```html
<article class="article-card">
    <div class="article-header">
        <span class="article-tag" style="background-color: {{ page.extra.accent_color }}">
            {{ page.taxonomies.categories[0] }}
        </span>
        <span class="article-date">
            {{ page.date | date(format="%B %d, %Y") }}
        </span>
    </div>
    <h3 class="article-title">
        <a href="{{ page.permalink }}" class="article-title-link">{{ page.title }}</a>
    </h3>
    <p class="article-description">
        {{ page.description }}
    </p>
    <footer class="article-footer">
        <div class="article-tags">
            {% for tag in page.taxonomies.tags %}
                <span class="article-tag-small">{{ tag }}</span>
            {% endfor %}
        </div>
        <a href="{{ page.permalink }}" class="article-link">Read Article →</a>
    </footer>
</article>
```

**Standardized (Article Card):**
```html
<article class="card card--article">
    <div class="card__header">
        <span class="tag tag--category" style="background-color: {{ page.extra.accent_color }}">
            {{ page.taxonomies.categories[0] }}
        </span>
        <span class="card__date">
            {{ page.date | date(format="%B %d, %Y") }}
        </span>
    </div>
    <h3 class="card__title">
        <a href="{{ page.permalink }}" class="card__link">{{ page.title }}</a>
    </h3>
    <p class="card__description">
        {{ page.description }}
    </p>
    <footer class="card__footer">
        <div class="card__tags">
            {% for tag in page.taxonomies.tags %}
                <span class="tag tag--small">{{ tag }}</span>
            {% endfor %}
        </div>
        <a href="{{ page.permalink }}" class="card__link card__link--action">Read Article →</a>
    </footer>
</article>
```

**Current (Project Card):**
```html
<div class="project-card">
    <div class="project-image" style="background-color: var(--{{ project.taxonomies.project_types[0] }}-color)">
        <div class="project-grid">
            {% for i in range(end=48) %}
                <div class="grid-cell"></div>
            {% endfor %}
        </div>
        <div class="project-tag-container">
            <span class="project-tag">
                {{ project.taxonomies.project_types[0] | capitalize }}
                {% if project.taxonomies.project_types[0] == "b2b" %}
                    Solution
                {% elif project.taxonomies.project_types[0] == "consumer" %}
                    Product
                {% else %}
                    Tool
                {% endif %}
            </span>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">
            {{ project.extra.short_desc }}
        </p>
        <div class="project-tags">
            {% for tag in project.taxonomies.tags %}
                <span class="tech-tag">{{ tag }}</span>
            {% endfor %}
        </div>
        <div class="project-footer">
            <span class="project-year" style="color: var(--{{ project.taxonomies.project_types[0] }}-color)">{{ project.extra.year }}</span>
            <a href="{{ project.permalink }}" class="project-link">View Case Study →</a>
        </div>
    </div>
</div>
```

**Standardized (Project Card):**
```html
<div class="card card--project">
    <div class="card__image" style="background-color: var(--color-{{ project.taxonomies.project_types[0] }})">
        <div class="card__grid">
            {% for i in range(end=48) %}
                <div class="card__cell"></div>
            {% endfor %}
        </div>
        <div class="card__tag-container">
            <span class="tag tag--project">
                {{ project.taxonomies.project_types[0] | capitalize }}
                {% if project.taxonomies.project_types[0] == "b2b" %}
                    Solution
                {% elif project.taxonomies.project_types[0] == "consumer" %}
                    Product
                {% else %}
                    Tool
                {% endif %}
            </span>
        </div>
    </div>
    <div class="card__content">
        <h3 class="card__title">{{ project.title }}</h3>
        <p class="card__description">
            {{ project.extra.short_desc }}
        </p>
        <div class="card__tags">
            {% for tag in project.taxonomies.tags %}
                <span class="tag tag--tech">{{ tag }}</span>
            {% endfor %}
        </div>
        <div class="card__footer">
            <span class="card__year" style="color: var(--color-{{ project.taxonomies.project_types[0] }})">{{ project.extra.year }}</span>
            <a href="{{ project.permalink }}" class="card__link card__link--action">View Case Study →</a>
        </div>
    </div>
</div>
```

## Implementation Plan

1. **Create a design system document:**
   - Document all base components and their variations
   - Define reusable patterns and their intended usage

2. **Refactor CSS files:**
   - Create a new set of base styles using the new naming convention
   - Reorganize stylesheets to match component structure
   - Implement a more efficient CSS architecture (consider ITCSS or similar)

3. **Template updates:**
   - Update templates in batches, starting with most frequently used components
   - Use search and replace for common patterns
   - Test each batch before moving to the next

4. **Create a component library:**
   - Document all standardized components
   - Include examples of proper usage
   - Create a reference for team members

## Core Component Classes

Here's a list of core component classes that will form the foundation of the new system:

### Layout Components
- `.container` - Main content container
- `.grid` - Base grid layout
- `.section` - Page section wrapper

### UI Components
- `.btn` - Button base class
- `.card` - Card base class
- `.tag` - Tag base class
- `.nav` - Navigation base class
- `.form` - Form base class

### Typography
- `.heading` - Heading base class
- `.text` - Text base class
- `.link` - Link base class

### Utility Classes
- `.text--accent` - Accent text styling
- `.hidden` - Hide element
- `.visible` - Show element
- `.spacing--*` - Margin/padding utilities

## Benefits of Standardization

1. **Improved maintainability:**
   - Clear component relationships
   - Reduced specificity issues
   - Easier to identify and update components

2. **Better scalability:**
   - Consistent pattern for adding new components
   - Reduced risk of naming conflicts
   - Easier to extend existing components

3. **Reduced file size:**
   - Less redundant selectors
   - More efficient cascade
   - Better caching potential

4. **Enhanced collaboration:**
   - Clearer patterns for team members to follow
   - Reduced learning curve for new team members
   - Better documentation of component relationships

## Conclusion

Implementing this standardized naming convention will significantly improve the maintainability and scalability of the website's codebase. While the initial refactoring will require some effort, the long-term benefits in development efficiency, reduced CSS file size, and improved collaboration far outweigh the upfront cost.
