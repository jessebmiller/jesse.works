# Portfolio Website Specification

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
- **Color Palette**: Warm, muted base colors with bold accent colors for contrast
- **Imagery**: Abstract or geometric patterns that suggest both structure (engineering) and creativity (product design)

### User Experience
- Clean, intuitive navigation between sections
- Responsive design (mobile, tablet, desktop)
- Emphasis on readability for blog content
- Minimal animations, focused on usability
- Fast loading times

### Design Inspirations
- IDEO's blend of humanity and design thinking
- Artistic portfolio sites that balance creativity with professionalism
- Design that reflects appreciation for "difficult" art forms like math rock and prog jazz

## 4. Technical Requirements

### Development Approach
- Static site generator (recommended options below)
- Markdown-based content management for ease of updating
- Automated deployment pipeline

### Recommended Technologies
- **Static Site Generator**: 
  - Primary recommendation: Hugo (Go-based) or Zola (Rust-based) for superior build and runtime performance
  - Selection criteria: Extreme build speed, minimal JS footprint, effective asset optimization
- **Performance Optimization**:
  - Pre-rendered HTML with minimal or no client-side JavaScript
  - Aggressive image optimization and modern formats (WebP, AVIF)
  - HTTP/2 or HTTP/3 enabled hosting
  - Effective use of browser caching headers
  - Critical CSS inlining
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

## 5. Implementation Timeline

### Phase 1: Initial Launch (1 week)
- Day 1-2: Design approval and site architecture
- Day 3-4: Core page development
- Day 5-6: Content migration and styling
- Day 7: Testing, review, and launch

### Phase 2: Post-Launch Enhancements
- Blog template refinements
- Analytics integration
- Additional case studies
- SEO optimization

## 6. Maintenance Plan

### Content Updates
- Self-service blog post publishing via markdown files
- Simple process for adding new portfolio projects
- Version-controlled content

### Technical Maintenance
- Minimal ongoing technical maintenance required
- Documentation for content update procedures
- Annual review of technologies and potential refreshes

## 7. Success Criteria

- Website successfully communicates both technical and product expertise
- Content effectively filters for companies with aligned values
- Site is distinctive from typical tech portfolios
- Platform supports ongoing thought leadership
- Website is completed and launched within one week

## 8. Budget Considerations

- Design time: 2-3 days
- Development time: 3-4 days
- Hosting costs: $0-15/month depending on provider
- Domain name: ~$10-15/year

## 9. Next Steps

1. Designer to provide mood board and initial mockups
2. Approval of visual direction
3. Selection of specific static site generator
4. Development of site structure
5. Content preparation (client responsibility)
6. Implementation and review
7. Launch
