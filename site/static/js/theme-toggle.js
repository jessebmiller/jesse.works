/**
 * Theme and mode toggle functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  const themeToggle = document.getElementById('theme-toggle');
  const themeSelector = document.getElementById('theme-selector');
  
  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('theme') || 'solarized';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedMode = localStorage.getItem('mode') || (prefersDark ? 'dark' : 'light');
  
  // Apply saved theme and mode to body
  document.body.dataset.theme = savedTheme;
  document.body.dataset.mode = savedMode;
  
  // Update UI to reflect current theme and mode
  if (themeSelector) {
    themeSelector.value = savedTheme;
  }
  
  // Set up theme toggle button
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', 
      `Switch to ${savedMode === 'light' ? 'dark' : 'light'} mode`);
    
    themeToggle.innerHTML = savedMode === 'light' 
      ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    
    // Mode toggle event (light/dark)
    themeToggle.addEventListener('click', () => {
      const newMode = document.body.dataset.mode === 'light' ? 'dark' : 'light';
      document.body.dataset.mode = newMode;
      localStorage.setItem('mode', newMode);
      
      // Update button aria-label and icon
      themeToggle.setAttribute('aria-label', 
        `Switch to ${newMode === 'light' ? 'dark' : 'light'} mode`);
      
      themeToggle.innerHTML = newMode === 'light' 
        ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    });
  }
  
  // Set up theme selector
  if (themeSelector) {
    // Theme selector event (solarized/rich/catalan)
    themeSelector.addEventListener('change', (e) => {
      const newTheme = e.target.value;
      document.body.dataset.theme = newTheme;
      localStorage.setItem('theme', newTheme);
    });
  }
  
  // Set up theme swatches if available
  const themeSwatches = document.querySelectorAll('.theme-option');
  if (themeSwatches.length > 0) {
    themeSwatches.forEach(swatch => {
      // Update active state
      if (swatch.classList.contains(savedTheme)) {
        swatch.classList.add('active');
      }
      
      // Add click event
      swatch.addEventListener('click', () => {
        // Remove active class from all swatches
        themeSwatches.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked swatch
        swatch.classList.add('active');
        
        // Get theme from class list
        const newTheme = Array.from(swatch.classList)
          .find(cls => ['solarized', 'rich', 'catalan'].includes(cls));
        
        if (newTheme) {
          document.body.dataset.theme = newTheme;
          localStorage.setItem('theme', newTheme);
          
          // Update dropdown if it exists
          if (themeSelector) {
            themeSelector.value = newTheme;
          }
        }
      });
    });
  }
  
  // Expose theme functions globally
  window.themeManager = {
    getTheme: () => document.body.dataset.theme,
    getMode: () => document.body.dataset.mode,
    setTheme: (theme) => {
      if (['solarized', 'rich', 'catalan'].includes(theme)) {
        document.body.dataset.theme = theme;
        localStorage.setItem('theme', theme);
      }
    },
    setMode: (mode) => {
      if (['light', 'dark'].includes(mode)) {
        document.body.dataset.mode = mode;
        localStorage.setItem('mode', mode);
      }
    }
  };
});
