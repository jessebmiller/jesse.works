# Component Inventory for Jesse Works portfolio

## Layout Components

### Base Template (`templates/base.html`)
- HTML structure with head, metadata, CSS includes
- Theme toggle functionality
- Body with theme data attribute
- Navigation include
- Main content block
- Footer include

### Header/Navigation (`templates/partials/header.html`)
- Logo/site title
- Navigation links (About, Portfolio, Blog)
- Contact CTA button
- Theme toggle button
- Mobile menu toggle for responsive design

### Footer (`templates/partials/footer.html`)
- Copyright information
- Optional: social links, minimal footer navigation

## Home Page Components

### Hero Section (`templates/partials/hero.html`)
- Headline with accent text highlight
- Brief descriptive tagline
- CTA buttons ("See my work", "Read my thoughts")
- Visual element with geometric shapes, outlines, dot patterns

### Featured Work Grid (`templates/partials/featured_work.html`)
- Section heading
- Grid of project cards (featured projects)
- "View All Projects" link
- Each project card includes:
  - Visual representation with color background
  - Category tag
  - Project title
  - Short description
  - Year span
  - "Read Case Study" link

### Latest Articles (`templates/partials/latest_articles.html`)
- Section heading
- Grid of article cards (2 latest articles)
- "Browse All Articles" link
- Each article card includes:
  - Category tag with accent color
  - Publication date
  - Article title
  - Brief description
  - "Read Article" link

### Contact Section (`templates/partials/contact.html`)
- "Let's Connect" heading
- Brief description of collaboration interests
- Action buttons (Email, LinkedIn, BlueSky, GitHub)

## About Page Components

### Profile Section (`templates/partials/profile.html`)
- Photo/visual representation
- "Download Resume" button
- Social profile links
- Professional header with tagline

### Bio/Philosophy (`templates/partials/bio.html`)
- Section headings (Professional Philosophy, Career Journey, Personal Interests)
- Text content with professional approach
- Styled with typography hierarchy

### Skills Grid (`templates/partials/skills.html`)
- "Skills & Expertise" heading
- 2-column grid of skill categories
- Each skill category includes:
  - Icon with accent color background
  - Category title
  - List of specific skills

### Experience Timeline (`templates/partials/experience.html`)
- "Experience Highlights" heading
- Vertical timeline with dots and connecting line
- Timeline items for each role:
  - Date span
  - Role title
  - Company name
  - Brief description of achievements

### Call to Action (`templates/partials/cta.html`)
- "Interested in Working Together?" heading
- Brief description
- "Get in Touch" button

## Portfolio Components

### Project Filter Controls (`templates/portfolio/partials/filter.html`)
- Filter buttons for project categories (All, Consumer, B2B, Developer)
- Active state styling for current filter

### Project Grid (`templates/portfolio/partials/project_grid.html`)
- Responsive grid of project cards
- Filtered based on selected category

### Project Card (`templates/portfolio/partials/project_card.html`)
- Visual header with project color
- Category tag
- Project title
- Description
- Technology tags
- Year span
- "View Case Study" link

### Featured Case Study (`templates/portfolio/partials/featured_case.html`)
- Split layout with visual and content sides
- Project title and description
- Key achievements with checkmarks
- "Read Full Case Study" CTA

### Testimonial Block (`templates/portfolio/partials/testimonial.html`)
- Quote icon
- Testimonial text
- Client name and company
- Optional: client photo

## Blog Components

### Article Card (`templates/blog/partials/article_card.html`)
- Category tag with accent color
- Publication date
- Article title
- Brief description
- "Read Article" link

### Article List (`templates/blog/section.html`)
- Grid layout of article cards
- Pagination controls

### Blog Post Layout (`templates/blog/single.html`)
- Article header with metadata
- Content area with proper typography
- Optional: table of contents
- Optional: author bio
- Related articles

### Tag/Category Navigation (`templates/blog/partials/taxonomy_nav.html`)
- List of categories/tags with counts
- Active state for current filter

## UI Components

### Button (`templates/macros/buttons.html`)
- Primary button (solid background)
- Secondary button (outline style)
- Configurable size, color, and hover effects

### Theme System
- Light/dark mode toggle
- Color variables for Solarized palette
- Consistent application across components

### Visual Elements (`templates/macros/visuals.html`)
- Geometric shapes for visual interest
- Dot patterns for backgrounds
- Grid patterns for project visuals
- Miró-inspired abstract elements

## Interactive Features

### Theme Toggle
- Button to switch between light/dark modes
- LocalStorage for theme persistence
- System preference detection

### Project Filtering
- Category filter buttons
- Smooth transitions between filtered views

### Mobile Navigation
- Responsive menu for small screens
- Toggle button for expanding/collapsing

## Template Macros

Reusable template fragments defined as Tera macros:

```html
{% macro button(text, url, type="primary", size="normal") %}
<a href="{{ url }}" class="btn btn-{{ type }} btn-{{ size }}">
  {{ text }}
</a>
{% endmacro %}

{% macro tag(name, color="#268BD2") %}
<span class="tag" style="background-color: {{ color }}">
  {{ name }}
</span>
{% endmacro %}
```
