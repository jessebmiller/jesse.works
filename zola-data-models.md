# Zola Data Models for Portfolio Site

## Overview

Zola uses a content-first approach where data models are primarily defined through:
- Content files (Markdown with TOML frontmatter)
- Site configuration (config.toml)
- Directory structure

## Site Configuration (config.toml)

```toml
# Basic site configuration
base_url = "https://jesse.works"
title = "Jesse Works"
description = "Product leader with engineering roots, specializing in use-centered design and technical innovation."

# Taxonomies for content organization
taxonomies = [
  {name = "categories", feed = true}, # For blog posts
  {name = "tags", feed = true},       # For both blog and portfolio items
  {name = "project_types", feed = true, paginate_by = 6} # For filtering portfolio projects
]

# Theme configuration
[extra]
author = "Jesse"
github = "username"
linkedin = "username"
email = "contact@jesseworks.com"
color_scheme = "solarized" # Options: solarized, original, miro
mode = "light" # Default color mode
```

## Content Models

### 1. Section (_index.md)

Each section (like portfolio, blog) has its own _index.md file to define section metadata.

```toml
+++
title = "Portfolio"
description = "A selection of projects showcasing my experience across consumer products, B2B solutions, and developer tools."
template = "portfolio/section_default.html" # Custom template for this section
sort_by = "date"                    # Sort criteria
sort_order = "descending"           # newest first
paginate_by = 9                     # Projects per page
weight = 2                          # For menu ordering
+++

Introduction text for the portfolio section...
```

### 2. Portfolio Project (project1.md)

Individual portfolio projects:

```toml
+++
title = "Connected Wellness Platform"
date = 2023-01-15
description = "Reimagining how users track health data with an integrated approach."
project_types = ["consumer"]       # Taxonomy for filtering (consumer, b2b, developer)
featured = true                    # For featuring on homepage
year = "2022 – 2023"               # Display timeframe
tags = ["React Native", "Node.js", "GraphQL", "AWS"]
weight = 1                         # For ordering within featured section on homepage

[extra]
short_desc = "Reimagining how users track health data with an integrated approach."
outcome = "Increased user engagement by 47% through personalized insights"
challenges = ["Integration with diverse health data sources", "Ensuring privacy compliance", "Real-time sync across devices"]
role = "Director of Product"
client = "HealthTech Innovations"

# For featured case study
key_achievements = [
  "Increased user engagement by 47% through personalized insights",
  "Launched on iOS and Android with 4.8+ star ratings",
  "Achieved 86% data accuracy in health predictions"
]
+++

## Problem Statement

Detailed content about the problem...

## Approach

The methodology used...

## Technologies Used

- React Native
- Node.js
- GraphQL
- AWS

## Outcome and Impact

Results and metrics...
```

### 3. Blog Post (post1.md)

Blog articles:

```toml
+++
title = "The Case for Static Site Generators in 2023"
date = 2023-06-12
description = "Why the pendulum is swinging back to simpler, faster, and more resilient web architectures."
categories = ["Engineering"]       # Primary category
tags = ["Web Development", "Performance", "JAMstack"]
draft = false                      # Published status
featured = true                    # For featuring on homepage

[extra]
accent_color = "#268BD2"           # Solarized blue for article tag
estimated_reading_time = 8         # Minutes to read
+++

Article content goes here...
```

### 4. About Page (_index.md in about section)

```toml
+++
title = "About Me"
description = "Product leader with engineering roots, specializing in human-centered design and technical innovation."
template = "about.html"
+++

Content about professional philosophy, career journey, etc.
```

## Data Relationships & Access

### In Templates

Access data within templates using Tera syntax:

```html
<!-- Accessing page data -->
<h1>{{ page.title }}</h1>
<p>{{ page.description }}</p>

<!-- Accessing section data -->
{% for project in section.pages %}
  <div class="project-card" style="background-color: {{ project.extra.color }}">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <!-- Tags -->
    {% for tag in project.tags %}
      <span class="tag">{{ tag }}</span>
    {% endfor %}
  </div>
{% endfor %}

<!-- Accessing taxonomy data -->
{% for term in terms %}
  <a href="{{ term.permalink }}">{{ term.name }} ({{ term.pages | length }})</a>
{% endfor %}
```

### Taxonomy Usage

Taxonomies (categories, tags, project_types) are defined in config.toml and used in content frontmatter.

- `project_types` - For filtering portfolio projects (consumer, b2b, developer)
- `categories` - Main categories for blog posts
- `tags` - Detailed descriptors for both blog and portfolio items

## Theme Data

Theme preferences are managed through:

1. Initial default in `config.toml`
2. User selection stored in `localStorage`
3. CSS variables for applying theme colors

```javascript
// Theme toggle implementation
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    document.body.dataset.theme = savedTheme;
  } else if (prefersDark) {
    document.body.dataset.theme = 'dark';
  }

  themeToggle.addEventListener('click', () => {
    const newTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  });
});
```
