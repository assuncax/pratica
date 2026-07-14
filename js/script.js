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

  // Reveal-on-scroll
  const revealTargets = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Teste de conexão (simulado/ilustrativo)
  const speedBtn = document.getElementById('speed-test-btn');
  if (speedBtn) {
    const results = document.getElementById('speed-results');
    const barPing = document.getElementById('bar-ping');
    const barDownload = document.getElementById('bar-download');
    const valPing = document.getElementById('val-ping');
    const valDownload = document.getElementById('val-download');
    const valSecurity = document.getElementById('val-security');
    const message = document.getElementById('speed-message');

    speedBtn.addEventListener('click', () => {
      speedBtn.disabled = true;
      speedBtn.textContent = 'Testando...';
      results.hidden = false;
      barPing.style.width = '0%';
      barDownload.style.width = '0%';
      valPing.textContent = '--';
      valDownload.textContent = '--';
      valSecurity.textContent = '--';
      message.textContent = '';

      setTimeout(() => {
        const ping = Math.round(6 + Math.random() * 34); // 6-40ms
        valPing.textContent = `${ping} ms`;
        barPing.style.width = `${Math.max(10, 100 - (ping / 45) * 100)}%`;
      }, 400);

      setTimeout(() => {
        const download = Math.round(80 + Math.random() * 400); // 80-480 Mbps
        valDownload.textContent = `${download} Mbps`;
        barDownload.style.width = `${Math.min(100, (download / 500) * 100)}%`;
      }, 1100);

      setTimeout(() => {
        valSecurity.textContent = 'Protegido';
        message.textContent = 'Sua conexão está segura para home office. Nenhuma porta suspeita detectada nesta simulação.';
        speedBtn.disabled = false;
        speedBtn.textContent = 'Testar novamente';
      }, 1800);
    });
  }

  // Simulador de ROI de TI (estimativa ilustrativa)
  const roiInput = document.getElementById('roi-input');
  if (roiInput) {
    const roiHours = document.getElementById('roi-hours');
    const roiProtection = document.getElementById('roi-protection');

    const updateRoi = () => {
      const computers = Math.min(500, Math.max(1, Number(roiInput.value) || 1));
      roiHours.textContent = `${Math.round(computers * 1.8)}h`;
      // ponytail: tiering simplificado para estimativa de marketing, não é um score real
      roiProtection.textContent = computers <= 3 ? 'Baixo' : computers <= 15 ? 'Médio' : 'Máximo';
    };

    roiInput.addEventListener('input', updateRoi);
    updateRoi();
  }

  // Ticker do painel de status de monitoramento
  const statusTime = document.getElementById('status-time');
  if (statusTime) {
    let seconds = 0;
    setInterval(() => {
      seconds += 5;
      statusTime.textContent = seconds >= 60 ? 'agora' : `há ${seconds}s`;
      if (seconds >= 60) seconds = 0;
    }, 5000);
  }

})();
