# Portfolio Website Specification: Zola Implementation

## 1. Project Overview

### Purpose
To create a distinctive portfolio website that effectively showcases a blend of software engineering and product management expertise, with an emphasis on product leadership. The site will serve as both a professional showcase and a content platform for thought leadership.

### Target Audience
- Product leaders and hiring managers at people-centric companies
- Organizations with collaborative cultures (similar to IDEO, 3M, Toyota)
- Companies that value equitable compensation structures
- Teams looking for pragmatic leadership with technical depth

### Key Objectives
- Differentiate from typical tech portfolios through authentic expression of values
- Establish credibility in both technical implementation and product strategy
- Filter potential employers by clearly communicating personal and professional values
- Provide a platform for ongoing thought leadership via blog posts

## 2. Content Requirements

### Core Sections
1. **Home/Landing Page**
   - Brief professional introduction
   - Visual representation of the dual product/engineering expertise
   - Featured/latest work and writing
   - Clear path to different portfolio sections

2. **About Section**
   - Professional philosophy and values statement
   - Career journey highlights
   - Personal interests that inform professional approach
   - Downloadable resume/CV

3. **Portfolio Showcase**
   - Case studies of shipped consumer/B2B products
   - Developer tool projects with implementation details
   - Each project should include:
     - Problem statement
     - Approach and methodology
     - Technologies/tools used
     - Outcome and impact
     - Role and specific contributions

4. **Blog/Articles Section**
   - Engineering articles
   - Product management insights
   - Leadership perspectives
   - Content organized by topic and date
   - Easy filtering system

5. **Contact Information**
   - Professional email
   - LinkedIn profile
   - GitHub profile (if applicable)
   - Contact form (optional)

## 3. Design Requirements

### Visual Style
- **Primary Aesthetic**: Humanistic and artistic
- **Design Approach**: "Spikes of productive disturbance in a bed of comfort" - create a visually calming base design with strategic, striking visual accents that draw attention
- **Typography**: Readable, modern sans-serif for body text, with more expressive typefaces for headings
- **Color Palette**: Implement the Solarized color scheme from existing designs
- **Imagery**: Abstract or geometric patterns that suggest both structure (engineering) and creativity (product design)

### User Experience
- Clean, intuitive navigation between sections
- Responsive design (mobile, tablet, desktop)
- Emphasis on readability for blog content
- Minimal animations, focused on usability
- Fast loading times

## 4. Technical Requirements

### Development Approach
- Zola as the static site generator
- Markdown-based content management for ease of updating
- Automated deployment pipeline

### Zola Implementation Details
- **Component Migration Strategy**:
  - Convert existing React components (HomePage.tsx, MoodBoard.tsx) to Tera templates
  - Implement the theme system using Sass variables
  - Create Sass mixins for color mode toggling (light/dark) and color theme switching

- **Content Structure**:
  - Use Zola sections for portfolio projects and blog posts
  - Implement taxonomies for article categories and tags
  - Leverage front matter for metadata (dates, categories, featured status)
  - Organize content in a `content/` directory with subdirectories for sections

- **Performance Optimization**:
  - Implement critical CSS inlining via Zola templates
  - Configure aggressive asset fingerprinting and caching
  - Use Zola's built-in image processing for responsive images
  - Implement preloading of critical assets via HTML `<link>` tags
  - Configure zlib compression for static assets

- **Hosting**:
  - Primary: Cloudflare Pages with full CDN integration
  - Alternatives: Netlify or Vercel with performance-optimized settings

- **Version Control**: Git repository for all site content and code

### Performance Requirements
- Page load time < 300ms (must feel instantaneous)
- Time to interactive < 500ms
- First contentful paint < 200ms
- Zero layout shifts during loading
- Mobile-optimized with optimized touch interactions
- Preloading of critical resources
- Accessibility compliance (WCAG 2.1 AA)
- SEO-friendly structure

## 5. Implementation Timeline for AI-Assisted Development

### Phase 1: Architecture & Data Modeling (1-2 days)
- Day 1 (Sr Dev):
  - Install Zola and establish project structure
  - Create comprehensive data schemas for all content types
  - Document Solarized color system in structured JSON/TOML
  - Define component boundaries and naming conventions

- Day 1-2 (Sr Dev + AI):
  - Generate skeleton templates for all site sections
  - Implement core Sass architecture and variables
  - Create documentation for AI about Zola capabilities and constraints

### Phase 2: Component Implementation (2-3 days)
- Day 2-3 (AI with Sr Dev review):
  - Generate base template implementation
  - Implement header, footer, and navigation components
  - Create home page template from skeleton

- Day 3-4 (AI with Sr Dev review):
  - Implement portfolio listing and detail templates
  - Generate blog templates and taxonomy pages
  - Create about page templates

- Day 4 (Sr Dev):
  - Refine critical UI components 
  - Implement theme toggle functionality
  - Optimize critical rendering path

### Phase 3: Content Integration and Optimization (1-2 days)
- Day 5 (AI with Sr Dev review):
  - Generate sample content based on specifications
  - Create responsive styles for all breakpoints
  - Implement accessibility enhancements

- Day 5-6 (Sr Dev):
  - Performance testing and optimization
  - Final cross-browser testing
  - Fix edge cases and visual inconsistencies

### Phase 4: Launch and Deployment (1 day)
- Day 6-7 (Sr Dev):
  - Configure CI/CD pipeline with GitHub Actions
  - Set up Cloudflare Pages deployment
  - Final testing and launch

## 6. Zola-Specific Technical Details

### Template Structure
```
templates/
├── base.html          # Base template with common elements
├── index.html         # Homepage template
├── section.html       # Section page template
├── portfolio/
│   ├── single.html    # Individual portfolio item
│   └── section.html   # Portfolio listing
├── blog/
│   ├── single.html    # Individual blog post
│   └── section.html   # Blog listing page
└── partials/
    ├── header.html    # Site header
    ├── footer.html    # Site footer
    └── nav.html       # Navigation
```

### Content Organization
```
content/
├── _index.md          # Homepage content
├── about/
│   └── _index.md      # About page content
├── portfolio/
│   ├── _index.md      # Portfolio section content
│   ├── project1.md    # Individual project
│   └── project2.md    # Individual project
└── blog/
    ├── _index.md      # Blog section content
    ├── post1.md       # Individual blog post
    └── post2.md       # Individual blog post
```

### Theme Toggle Implementation
```html
<!-- In base.html -->
<body data-theme="{{ theme | default(value='light') }}">
  <!-- Site content -->

  <script>
    // Minimal JS only for theme toggle persistence
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
  </script>
</body>
```

## 7. Maintenance Plan

### Content Updates
- Content updates via markdown files in the Git repository
- Simple front matter for metadata management
- CI/CD pipeline for automatic rebuilds on content changes

## 8. Success Criteria

- Website successfully communicates both technical and product expertise
- Content effectively filters for companies with aligned values
- Site is distinctive from typical tech portfolios
- Platform supports ongoing thought leadership
- Website loads in under 300ms on typical connections
- Achieves 100/100 on Google Lighthouse performance metrics
- Zero JavaScript required for core site functionality

## 9. AI-Assisted Development Principles

### Structured Data Modeling
- Create comprehensive schema files for all content types before implementation
- Document the Solarized color system in structured JSON/TOML for consistent reference
- Define explicit taxonomy for blog categories and portfolio project types
- Use consistent front matter schemas across similar content types

### Component-Based Architecture
- Break templates into smaller, well-named partials (under 100 lines each)
- Use explicit naming conventions for all template files and partial blocks
- Create a component inventory document to track implementation status
- Maintain clear separation between layout, content, and styling concerns

### AI-Optimized Workflow
- Start with skeleton implementations of all templates before detailed work
- Use AI to generate complete implementations one component at a time
- Implement human review checkpoints after each major component
- Maintain a prompt library for consistent AI guidance

### Developer Focus Areas
- Sr Developer should focus on:
  - Core architecture decisions and data modeling
  - Design system implementation (Sass architecture)
  - Performance optimization and critical rendering path
  - Complex interactive elements like theme toggling
  - Final review and quality assurance

### Plan
[x] Create data models and component inventory document
[x] Install Zola and initialize project structure with skeleton templates
[ ] Implement design system foundations with Sass
[ ] Use AI to generate template implementations based on component specs
[ ] Integrate and optimize components
[ ] Set up CI/CD pipeline with GitHub Actions
[ ] Launch and verify performance metrics
