# Base Components Documentation

Based on a review of the website templates, this document outlines all base components and their variations in a simplified system.

## Layout Components

### Container
- **Base class**: `.container`
- **Usage**: Main content wrapper that provides consistent padding and max-width
- **Current variations**: `content-container`

### Section
- **Base class**: `.section`
- **Usage**: Wrapper for distinct page sections
- **Variations**: 
  - `.section--hero`: Hero section
  - `.section--featured`: Featured content
  - `.section--cta`: Call to action

### Grid
- **Base class**: `.grid`
- **Usage**: Layout component for arranging content in columns
- **Variations**:
  - `.grid--2col`, `.grid--3col`: Column variations
  - `.grid--articles`: Article listing
  - `.grid--projects`: Project listing

## Navigation Components

### Navigation
- **Base class**: `.nav`
- **Usage**: Site navigation
- **Variations**:
  - `.nav__link`: Standard navigation link
  - `.nav__cta`: Call-to-action navigation link
  - `.nav__toggle`: Mobile menu toggle

### Pagination
- **Base class**: `.pagination`
- **Usage**: Page navigation for listings
- **Variations**:
  - `.pagination__item`: Page number
  - `.pagination__prev`, `.pagination__next`: Previous/next links

### Taxonomy
- **Base class**: `.taxonomy`
- **Usage**: Category/tag filtering
- **Variations**:
  - `.taxonomy__link`: Category/tag link
  - `.taxonomy__count`: Item count indicator

## UI Components

### Button
- **Base class**: `.btn`
- **Usage**: Interactive controls
- **Variations**:
  - `.btn--primary`: Primary action
  - `.btn--secondary`: Secondary action
  - `.btn--cta`: Call to action
  - `.btn--icon`: With icon

### Card
- **Base class**: `.card`
- **Usage**: Content container with consistent styling
- **Variations**:
  - `.card--article`: Blog post card
  - `.card--project`: Portfolio project card
  - `.card--testimonial`: Testimonial card
  - `.card--featured`: Featured/highlighted card

### Tag
- **Base class**: `.tag`
- **Usage**: Label for categorization
- **Variations**:
  - `.tag--category`: Category indicator
  - `.tag--tech`: Technology indicator
  - `.tag--small`: Smaller variant

## Content Components

### Heading
- **Base class**: `.heading`
- **Usage**: Section and content headings
- **Variations**:
  - `.heading--page`: Page title
  - `.heading--section`: Section heading
  - `.heading--card`: Card heading

### Text
- **Base class**: `.text`
- **Usage**: Text content
- **Variations**:
  - `.text--description`: Descriptive text
  - `.text--accent`: Highlighted/accented text
  - `.text--meta`: Metadata text (dates, etc.)

### Visual
- **Base class**: `.visual`
- **Usage**: Visual elements like images and decorative elements
- **Variations**:
  - `.visual--profile`: Profile image
  - `.visual--hero`: Hero visual element
  - `.visual--project`: Project visual

### Timeline
- **Base class**: `.timeline`
- **Usage**: Chronological display of events
- **Variations**:
  - `.timeline__item`: Individual timeline entry
  - `.timeline__marker`: Timeline node marker
  - `.timeline__content`: Timeline entry content

## Utility Components

### Icon
- **Base class**: `.icon`
- **Usage**: SVG icons
- **Variations**:
  - `.icon--social`: Social media icon
  - `.icon--ui`: Interface icon

### Theme
- **Base class**: `.theme`
- **Usage**: Theme selection and toggle
- **Variations**:
  - `.theme__toggle`: Theme toggle control
  - `.theme__option`: Theme selection option

---

This simplified component system reduces the current numerous variations to a more manageable set of base components with logical variations, while maintaining all the necessary functionality. It follows BEM methodology for consistent naming and organization.
