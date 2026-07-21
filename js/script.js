(() => {
  'use strict';

  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  // Header shadow/background on scroll
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  if (!hasGsap || prefersReducedMotion) {
    // No animation library loaded (offline/blocked) or user prefers reduced
    // motion: show everything immediately instead of leaving it hidden.
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // ---------- Hero entrance ----------
  const heroReveals = gsap.utils.toArray('.hero .reveal');
  heroReveals.forEach((el) => el.classList.add('gsap-handled'));
  gsap.set(heroReveals, { opacity: 0, y: 28 });
  gsap.to(heroReveals, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12,
    delay: 0.1,
  });

  // ---------- Grids: cards/steps/metrics fade + pop in with a staggered icon "spring" ----------
  gsap.utils.toArray('.services-grid, .process-grid, .metrics-grid').forEach((grid) => {
    const items = gsap.utils.toArray(grid.children).filter((el) => el.classList.contains('reveal'));
    if (!items.length) return;
    items.forEach((el) => el.classList.add('gsap-handled'));

    const icons = items
      .map((el) => el.querySelector('.card-icon, .process-icon'))
      .filter(Boolean);

    gsap.set(items, { opacity: 0, y: 32, scale: 0.97 });
    if (icons.length) gsap.set(icons, { opacity: 0, scale: 0.5 });

    const line = grid.querySelector('.process-line');
    if (line) gsap.set(line, { scaleX: 0 });

    ScrollTrigger.create({
      trigger: grid,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
        });
        if (icons.length) {
          gsap.to(icons, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
            stagger: 0.08,
            delay: 0.15,
          });
        }
        if (line) {
          gsap.to(line, { scaleX: 1, duration: 1, ease: 'power2.inOut', delay: 0.1 });
        }
      },
    });
  });

  // ---------- Everything else tagged .reveal: simple fade-up ----------
  gsap.utils.toArray('.reveal:not(.gsap-handled)').forEach((el) => {
    gsap.set(el, { opacity: 0, y: 28 });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }),
    });
  });

})();
