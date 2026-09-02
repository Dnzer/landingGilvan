
document.getElementById("quoteForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const projeto = document.getElementById("projeto").value;
  const fase = document.getElementById("fase").value;
  const interesse = document.getElementById("interesse").value;
  const msg = `Olá! Vim pelo site Tijolos Ecológicos e gostaria de solicitar um orçamento.%0A%0ANome: ${nome}%0AWhatsApp: ${whatsapp}%0ACidade: ${cidade}%0ATipo de projeto: ${projeto}%0AFase da obra: ${fase}%0AInteresse: ${interesse}`;
  window.open(`https://wa.me/5521971349254?text=${msg}`, "_blank");
});


// Animações ativadas conforme os elementos entram na viewport.
document.addEventListener('DOMContentLoaded', () => {
  const animated = document.querySelectorAll(
    '.reveal-title, .section-kicker, .benefit, .compare-card, .showcase-photo, .showcase-copy, .spec-cards div, .quote-copy, .quote-form'
  );

  animated.forEach((el) => el.classList.add('reveal-item'));

  // Títulos usam sua própria transição para ficar mais elegante.
  document.querySelectorAll('.reveal-title').forEach((el) => {
    el.classList.remove('reveal-item');
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -45px 0px' });

  animated.forEach((el) => observer.observe(el));

  // Parallax muito sutil no hero — desabilitado para usuários que preferem menos movimento.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const heroBg = document.querySelector('.hero-bg');
    const hero = document.querySelector('.hero');
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY * 0.12, 70);
        if (hero && window.scrollY < hero.offsetHeight) {
          heroBg.style.transform = `scale(1.04) translateY(${y}px)`;
        }
        ticking = false;
      });
    }, { passive: true });
  }
});
