/* Shared <head> assets, header, footer — injected so pages stay tiny.
   Each page sets <body data-page="..."> for active-link highlighting and
   includes <div id="site-header"></div> + <div id="site-footer"></div>. */

(function () {
  // -- Inject shared <head> resources (fonts) --
  const fonts = document.createElement('link');
  fonts.rel = 'stylesheet';
  fonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap';
  document.head.appendChild(fonts);

  const NAV_ITEMS = [
    { href: 'index.html', label: 'Home' },
    { href: 'projects.html', label: 'Projects' },
    { href: 'work.html', label: 'Work' },
    { href: 'research.html', label: 'Research' },
    // { href: 'notes.html', label: 'Notes' },
    { href: 'astrophotography.html', label: 'Astro' },
    { href: 'about.html', label: 'About' },
    { href: 'contact.html', label: 'Contact' }
  ];

  const navLinks = NAV_ITEMS
    .map(n => `<a href="${n.href}">${n.label}</a>`)
    .join('');

  const headerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="index.html">
          <span class="brand-mark">DC</span>
          <span><span class="brand-prompt">~/</span>diptanil</span>
        </a>
        <nav class="nav-links" aria-label="Primary">${navLinks}</nav>
        <div class="nav-controls">
          <button class="icon-btn" data-mode-toggle type="button" aria-label="Toggle dark mode">
            <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
          <button class="icon-btn menu-toggle" data-menu-toggle type="button" aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="col">
          <div style="font-family: var(--font-mono),serif; font-size: .8rem; margin-bottom:6px; color: var(--accent);">$ whoami</div>
          Diptanil Chaudhuri · engineer, gardener, occasional astrophotographer
        </div>
        <nav class="links">
          <a href="https://github.com/" target="_blank" rel="noopener">github</a>
          <a href="https://twitter.com/" target="_blank" rel="noopener">twitter</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener">linkedin</a>
          <a href="contact.html">contact</a>
        </nav>
        <div class="col" style="font-family: var(--font-mono),serif; font-size: .76rem;">
          © ${new Date().getFullYear()} · built with attention
        </div>
      </div>
    </footer>
  `;

  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.outerHTML = headerHTML;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = footerHTML;
})();
