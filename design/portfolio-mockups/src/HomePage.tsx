import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [colorMode, setColorMode] = useState('light');

  // Solarized color scheme
  const colors = {
    light: {
      background: "#FDF6E3",
      backgroundAlt: "#EEE8D5",
      contentLight: "#93A1A1",
      contentMedium: "#657B83",
      contentDark: "#586E75",
      contentDeep: "#002B36"
    },
    dark: {
      background: "#002B36",
      backgroundAlt: "#073642",
      contentLight: "#EEE8D5",
      contentMedium: "#93A1A1",
      contentDark: "#839496",
      contentDeep: "#FDF6E3"
    },
    accent: {
      yellow: "#B58900",
      orange: "#CB4B16",
      red: "#DC322F",
      magenta: "#D33682",
      violet: "#6C71C4",
      blue: "#268BD2",
      cyan: "#2AA198",
      green: "#859900"
    }
  };

  const c = colors[colorMode]; // Current color mode colors
  const a = colors.accent; // Accent colors

  return (
    <div className="portfolio-page" style={{ backgroundColor: c.background, color: c.contentDeep }}>
      {/* Navigation */}
      <nav className="nav-container" style={{ backgroundColor: `${c.background}E6` }}>
        <div className="nav-logo">Jesse Works</div>
        <div className="nav-links">
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Portfolio</a>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-cta" style={{ backgroundColor: a.red }}>Contact</a>
          <button
            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
            className="mode-toggle"
            style={{ backgroundColor: c.backgroundAlt }}
          >
            {colorMode === 'light' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>
        <div className="mobile-menu-button">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-container">
        <div className="content-container">
          <div className="hero-grid">
            <div>
              <h1 className="hero-heading">
                Engineering <span style={{ color: a.blue }}>meets</span> Product Leadership
              </h1>
              <p className="hero-description" style={{ color: c.contentMedium }}>
                Building pragmatic solutions with human-centered design and technical precision.
              </p>
              <div className="button-container">
                <a href="#" className="primary-button" style={{ backgroundColor: a.blue }}>
                  See my work
                </a>
                <a href="#" className="secondary-button" style={{ borderColor: c.contentMedium, color: c.contentMedium }}>
                  Read my thoughts
                </a>
              </div>
            </div>
            <div className="hero-visual">
              {/* Base circle representing structure/engineering */}
              <div className="circle-outline" style={{ borderColor: c.contentMedium }}></div>

              {/* Geometric shapes representing engineering */}
              <div className="visual-square" style={{ backgroundColor: a.blue }}></div>
              <div className="visual-circle" style={{ backgroundColor: a.yellow }}></div>

              {/* Lines representing connections/product thinking */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <path d="M20,50 Q50,20 80,50" stroke={a.red} strokeWidth="2" fill="none" />
                <path d="M20,50 Q50,80 80,50" stroke={a.violet} strokeWidth="2" fill="none" />
              </svg>

              {/* Dot pattern overlay */}
              <div className="dot-pattern">
                {Array(100).fill(0).map((_, i) => (
                  <div key={i} className="dot-cell">
                    <div className="dot" style={{ backgroundColor: c.contentDeep }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Work Section */}
      <section className="featured-work-section" style={{ backgroundColor: c.backgroundAlt }}>
        <div className="content-container">
          <h2 className="section-heading">
            Featured Work
          </h2>

          <div className="projects-grid">
            {/* Project Card 1 */}
            <div className="project-card" style={{ backgroundColor: colorMode === 'light' ? "#fff" : c.background }}>
              <div className="project-image" style={{ backgroundColor: a.blue }}>
                <div className="project-grid">
                  {Array(48).fill(0).map((_, i) => (
                    <div key={i} className="grid-cell"></div>
                  ))}
                </div>
              </div>
              <div className="project-content">
                <span className="project-tag" style={{ backgroundColor: c.backgroundAlt, color: c.contentMedium }}>
                  Consumer Product
                </span>
                <h3 className="project-title">Connected Wellness Platform</h3>
                <p className="project-description" style={{ color: c.contentMedium }}>
                  Reimagining how users track health data with an integrated approach.
                </p>
                <div className="project-footer">
                  <span className="project-year" style={{ color: a.blue }}>2022 – 2023</span>
                  <button className="project-link">Read Case Study →</button>
                </div>
              </div>
            </div>

            {/* Project Card 2 - With Miró-inspired element */}
            <div className="project-card" style={{ backgroundColor: colorMode === 'light' ? "#fff" : c.background }}>
              <div className="project-image" style={{ backgroundColor: a.violet }}>
                {/* Miró-inspired project visualization */}
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                  {/* Biomorphic shape */}
                  <path
                    d="M25,30 C40,20 60,25 70,40 C80,55 75,75 60,85 C45,95 25,90 15,75 C5,60 10,40 25,30 Z"
                    fill="#fff"
                    fillOpacity="0.2"
                    stroke="#002B36"
                    strokeWidth="1"
                  />

                  {/* Simple black outlined circle */}
                  <circle
                    cx="75"
                    cy="30"
                    r="12"
                    fill="#fff"
                    fillOpacity="0.2"
                    stroke="#002B36"
                    strokeWidth="1"
                  />

                  {/* Simple line */}
                  <line
                    x1="30"
                    y1="80"
                    x2="80"
                    y2="60"
                    stroke="#002B36"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />

                  {/* Small dot */}
                  <circle
                    cx="80"
                    cy="60"
                    r="4"
                    fill="#fff"
                    fillOpacity="0.4"
                  />
                </svg>
              </div>
              <div className="project-content">
                <span className="project-tag" style={{ backgroundColor: c.backgroundAlt, color: c.contentMedium }}>
                  Developer Tool
                </span>
                <h3 className="project-title">Static Site Compiler</h3>
                <p className="project-description" style={{ color: c.contentMedium }}>
                  A lightning-fast static site generator with best-in-class performance.
                </p>
                <div className="project-footer">
                  <span className="project-year" style={{ color: a.violet }}>2021 – 2022</span>
                  <button className="project-link">View Project →</button>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="project-card" style={{ backgroundColor: colorMode === 'light' ? "#fff" : c.background }}>
              <div className="project-image" style={{ backgroundColor: a.red }}>
                <div className="project-miro">
                  <div className="project-miro-center">
                    <div className="project-miro-shape"></div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <span className="project-tag" style={{ backgroundColor: c.backgroundAlt, color: c.contentMedium }}>
                  B2B SaaS
                </span>
                <h3 className="project-title">Enterprise Collaboration Suite</h3>
                <p className="project-description" style={{ color: c.contentMedium }}>
                  Reinventing how teams communicate across distributed organizations.
                </p>
                <div className="project-footer">
                  <span className="project-year" style={{ color: a.red }}>2020 – 2021</span>
                  <button className="project-link">Read Case Study →</button>
                </div>
              </div>
            </div>
          </div>

          <div className="view-all-container">
            <a href="#" className="secondary-button" style={{ borderColor: c.contentMedium, color: c.contentMedium }}>
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="articles-section">
        <div className="content-container">
          <h2 className="section-heading">
            Latest Articles
          </h2>

          <div className="articles-grid">
            {/* Article 1 */}
            <article className="article-card" style={{ backgroundColor: colorMode === 'light' ? "#fff" : c.backgroundAlt }}>
              <div className="article-header">
                <span className="article-tag" style={{ backgroundColor: c.backgroundAlt, color: a.blue }}>
                  Engineering
                </span>
                <span className="article-date" style={{ color: c.contentLight }}>
                  June 12, 2023
                </span>
              </div>
              <h3 className="article-title">The Case for Static Site Generators in 2023</h3>
              <p className="article-description" style={{ color: c.contentMedium }}>
                Why the pendulum is swinging back to simpler, faster, and more resilient web architectures.
              </p>
              <a href="#" className="article-link" style={{ color: a.blue }}>
                Read Article →
              </a>
            </article>

            {/* Article 2 */}
            <article className="article-card" style={{ backgroundColor: colorMode === 'light' ? "#fff" : c.backgroundAlt }}>
              <div className="article-header">
                <span className="article-tag" style={{ backgroundColor: c.backgroundAlt, color: a.red }}>
                  Product Leadership
                </span>
                <span className="article-date" style={{ color: c.contentLight }}>
                  May 28, 2023
                </span>
              </div>
              <h3 className="article-title">Building Teams That Ship: Lessons from Jazz Ensembles</h3>
              <p className="article-description" style={{ color: c.contentMedium }}>
                How improvisational structures from music can create both freedom and alignment in product teams.
              </p>
              <a href="#" className="article-link" style={{ color: a.red }}>
                Read Article →
              </a>
            </article>
          </div>

          <div className="view-all-container">
            <a href="#" className="secondary-button" style={{ borderColor: c.contentMedium, color: c.contentMedium }}>
              Browse All Articles
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" style={{ backgroundColor: c.contentDeep, color: "#FDF6E3" }}>
        <div className="content-container">
          <h2 className="contact-heading">
            Let's Connect
          </h2>
          <p className="contact-description">
            I'm always interested in discussing new opportunities with organizations that value both technical excellence and human-centered product thinking.
          </p>

          <div className="contact-buttons">
            <a href="mailto:contact@jesseworks.com" className="nav-cta">
              Send an Email
            </a>
            <a href="#" className="secondary-button">
              LinkedIn Profile
            </a>
            <a href="#" className="secondary-button">
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ backgroundColor: colorMode === 'light' ? "#073642" : "#002B36", color: "#839496" }}>
        <div className="content-container">
          <p>© 2023 Jesse Works. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
