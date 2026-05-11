/* ============================================================
   Theme + mode + nav controls
   ============================================================ */
(function () {
  const root = document.documentElement;

  // ---- Initialize from storage (or sensible defaults) ----
  // const savedTheme = localStorage.getItem('site.theme') || 'modern';     // modern | storybook
  const savedMode  = localStorage.getItem('site.mode')  || 'light';      // light | dark
  // root.setAttribute('data-theme', savedTheme);
  root.setAttribute('data-mode', savedMode);

  function reflect() {
    // document.querySelectorAll('[data-theme-pill] button').forEach(b => {
    //   b.classList.toggle('active', b.dataset.themeValue === root.dataset.theme);
    // });
    document.querySelectorAll('[data-mode-toggle]').forEach(b => {
      const mode = root.dataset.mode;
      b.setAttribute('aria-label', mode === 'dark' ? 'Switch to light' : 'Switch to dark');
      b.querySelector('.icon-sun')?.style?.setProperty('display', mode === 'dark' ? 'none' : 'block');
      b.querySelector('.icon-moon')?.style?.setProperty('display', mode === 'dark' ? 'block' : 'none');
    });
  }

  // function setTheme(theme) {
  //   root.setAttribute('data-theme', theme);
  //   localStorage.setItem('site.theme', theme);
  //   reflect();
  // }

  function setMode(mode) {
    root.setAttribute('data-mode', mode);
    localStorage.setItem('site.mode', mode);
    reflect();
  }

  document.addEventListener('click', e => {
    // const themeBtn = e.target.closest('[data-theme-pill] button');
    // if (themeBtn) {
    //   setTheme(themeBtn.dataset.themeValue);
    //   return;
    // }
    const modeBtn = e.target.closest('[data-mode-toggle]');
    if (modeBtn) {
      setMode(root.dataset.mode === 'dark' ? 'light' : 'dark');
      return;
    }
    const menuBtn = e.target.closest('[data-menu-toggle]');
    if (menuBtn) {
      document.querySelector('.nav-links')?.classList.toggle('open');
    }
  });

  // Mark active nav link based on filename
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === path || (path === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });

  reflect();
})();
