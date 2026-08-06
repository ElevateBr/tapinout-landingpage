// ===== CONFIGURAÇÕES GLOBAIS =====
const config = {
  animationDuration: 300,
  scrollOffset: 80,
  mobileBreakpoint: 1024,
  debounceDelay: 150
};

/* // ===== WIDGET DE SUPORTE (SEATHUB) =====
const SUPPORT_WIDGET_SRC =
  'https://app.gptmaker.ai/widget/3EBBCE26B25863D47D075ACDA2FE9334/float.js';

function initSupportWidget() {
  // Evitar carregar duas vezes
  if (document.querySelector(`script[src="${SUPPORT_WIDGET_SRC}"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = SUPPORT_WIDGET_SRC;
  script.dataset.widget = 'gptmaker-support-float';

  // Preferir anexar ao body (ou head como fallback)
  (document.body || document.head || document.documentElement).appendChild(script);
*/

// Sistema de tradução removido - todos os textos agora estão diretamente no HTML

// ===== ESTADO GLOBAL =====
let isMobileMenuOpen = false;
let lastFocusedBeforeMenu = null;

// ===== ELEMENTOS DOM =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const navBackdrop = document.querySelector('#navBackdrop');
const navCtaButton = document.querySelector('.nav-cta');

function isMobileNav() {
  return window.innerWidth <= config.mobileBreakpoint;
}

function getMenuFocusables() {
  if (!navMenu) return [];
  const items = Array.from(
    navMenu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
  ).filter((el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true');
  if (navToggle) items.push(navToggle);
  return items;
}

function setMenuOpen(open) {
  if (!navMenu || !navToggle) return;

  isMobileMenuOpen = open;
  navMenu.classList.toggle('active', open);
  navToggle.classList.toggle('active', open);
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  const openLabel = navToggle.dataset.labelOpen || 'Abrir menu';
  const closeLabel = navToggle.dataset.labelClose || 'Fechar menu';
  navToggle.setAttribute('aria-label', open ? closeLabel : openLabel);
  document.body.style.overflow = open ? 'hidden' : '';

  if (navBackdrop) {
    navBackdrop.hidden = !open;
    navBackdrop.classList.toggle('is-visible', open);
  }

  if (open) {
    lastFocusedBeforeMenu = document.activeElement;
    const focusables = getMenuFocusables();
    if (focusables.length) {
      requestAnimationFrame(() => focusables[0].focus());
    }
  } else if (lastFocusedBeforeMenu && typeof lastFocusedBeforeMenu.focus === 'function') {
    lastFocusedBeforeMenu.focus();
    lastFocusedBeforeMenu = null;
  }
}

// ===== NAVEGAÇÃO MOBILE =====
function toggleMobileMenu() {
  setMenuOpen(!isMobileMenuOpen);
}

if (navToggle) {
  navToggle.addEventListener('click', toggleMobileMenu);
}

if (navBackdrop) {
  navBackdrop.addEventListener('click', () => {
    if (isMobileMenuOpen) setMenuOpen(false);
  });
}

document.querySelectorAll('.nav-menu .nav-link, .nav-menu .nav-link-login-mobile').forEach((link) => {
  link.addEventListener('click', () => {
    if (isMobileMenuOpen) setMenuOpen(false);
  });
});

window.addEventListener('resize', () => {
  if (!isMobileNav() && isMobileMenuOpen) {
    setMenuOpen(false);
  }
});

// ===== SCROLL SUAVE PARA ÂNCORAS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const offsetTop = target.offsetTop - config.scrollOffset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ===== SCROLL SPY =====
function initNavScrollSpy() {
  if (!navMenu) return;

  const links = Array.from(navMenu.querySelectorAll('.nav-link[href^="#"]'));
  if (!links.length) return;

  const sections = links
    .map((link) => {
      const id = link.getAttribute('href');
      const section = id ? document.querySelector(id) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (activeLink) => {
    links.forEach((link) => {
      if (link === activeLink) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const onScroll = () => {
    const probe = window.scrollY + config.scrollOffset + 24;
    let current = sections[0];

    for (const entry of sections) {
      if (entry.section.offsetTop <= probe) {
        current = entry;
      }
    }

    setActive(current.link);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ===== HERO REVEAL =====
function initHeroReveal() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    hero.classList.add('is-revealed');
    return;
  }

  requestAnimationFrame(() => {
    hero.classList.add('is-revealed');
  });
}

// ===== PRODUCT SECTION REVEAL =====
function initProductReveal() {
  const section = document.querySelector('.product-section');
  if (!section) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    section.classList.add('is-inview');
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-inview');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

  observer.observe(section);
}

// ===== PRODUCT PANEL — PERSPECTIVA LIGADA AO SCROLL =====
function initProductPerspectiveScroll() {
  const section = document.querySelector('.product-section');
  const browser = document.querySelector('.product-browser');
  if (!section || !browser) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    browser.style.transform = 'none';
    return;
  }

  let ticking = false;

  function update() {
    ticking = false;
    const rect = section.getBoundingClientRect();
    const viewH = window.innerHeight || 1;
    const travel = viewH + rect.height;
    const progress = Math.min(1, Math.max(0, (viewH - rect.top) / travel));

    const isCompact = window.matchMedia('(max-width: 1023px)').matches;
    const rotateY = (isCompact ? -12 : -26) + progress * (isCompact ? 7 : 16);
    const rotateX = (isCompact ? 7 : 12) - progress * (isCompact ? 4 : 7);
    const rotateZ = (isCompact ? -1.2 : -2.5) + progress * (isCompact ? 0.8 : 1.5);

    browser.style.transform =
      'rotateY(' + rotateY.toFixed(2) + 'deg) ' +
      'rotateX(' + rotateX.toFixed(2) + 'deg) ' +
      'rotateZ(' + rotateZ.toFixed(2) + 'deg)';
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
    return;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ===== ANIMAÇÕES DOS DISPOSITIVOS =====
function initDeviceAnimations() {
  // Hover de escala/rotação removido — deixava o mockup brusco
}

// ===== ANIMAÇÕES DOS ELEMENTOS FLUTUANTES =====
function initFloatingAnimations() {
  const floatCards = document.querySelectorAll('.float-card');

  floatCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px) scale(1.05)';
      this.style.boxShadow = '0 20px 40px rgba(48, 92, 222, 0.2)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
}

// ===== FORMULÁRIO DE CONTATO =====
function initContactForm() {
  const form = document.querySelector('.demo-form');
  if (!form) return;

  // Botão de orçamento
  const quoteBtn = form.querySelector('button[type="button"]');
  if (quoteBtn) {
    quoteBtn.addEventListener('click', function () {
      // Coletar dados do formulário
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const company = formData.get('company');
      const phone = formData.get('phone');
      const employees = formData.get('employees');

      // Criar mensagem para orçamento
      const message = `💰 *Nova Solicitação de Orçamento - TapInOut*

👤 *Nome:* ${name}
📧 *Email:* ${email}
🏢 *Empresa:* ${company}
📱 *Telefone:* ${phone}
👥 *Funcionários:* ${employees}

💬 *Mensagem:* Olá! Gostaria de solicitar um orçamento personalizado do TapInOut para minha empresa.

---
*Enviado via landing page TapInOut*`;

      // Codificar mensagem para URL
      const encodedMessage = encodeURIComponent(message);

      // Número do WhatsApp
      const whatsappNumber = '5524999712243';

      // URL do WhatsApp
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Mostrar feedback visual
      const originalText = this.innerHTML;

      this.innerHTML = '<i class="fas fa-calculator"></i> Abrindo WhatsApp...';
      this.disabled = true;

      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');

      // Resetar botão após um delay
      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-check"></i> WhatsApp Aberto!';
        this.style.background = 'var(--success)';

        setTimeout(() => {
          this.innerHTML = originalText;
          this.disabled = false;
          this.style.background = '';
          form.reset();
        }, 2000);
      }, 1000);
    });
  }
}

// ===== EFEITOS DE HOVER PARA CARDS =====
function initCardHoverEffects() {
  const cards = document.querySelectorAll('.feature-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = '';
    });
  });
}

// ===== PARALLAX PARA ELEMENTOS DE FUNDO =====
function initParallax() {
  window.addEventListener('scroll', debounce(() => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-orb');

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1);
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }, config.debounceDelay));
}

// ===== LAZY LOADING PARA IMAGENS =====
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// ===== UTILITÁRIO DEBOUNCE =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== BARRA DE PROGRESSO DE SCROLL =====
function initScrollProgress() {
  // Criar elemento da barra
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  // Atualizar progresso no scroll
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// ===== CURSOR CUSTOMIZADO =====
function initCustomCursor() {
  // Não ativar em mobile
  if (window.innerWidth < 768) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
  document.body.appendChild(cursor);

  // Adicionar classe ao body para esconder cursor padrão
  document.body.classList.add('custom-cursor-active');

  // Movimento direto sem lag - mix-blend-mode faz a mágica automaticamente
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.classList.add('active');
  });

  // Efeito hover em elementos clicáveis
  const clickableElements = document.querySelectorAll('a, button, .btn-primary, .btn-secondary, .feature-card, .pricing-card, .blog-card');
  clickableElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// ===== NÚMEROS ANIMADOS (CONTADORES) =====
function initCounters() {
  const counters = document.querySelectorAll('.metric-value');

  const animateCounter = (element) => {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        animateCounter(entry.target);
        entry.target.dataset.animated = 'true';
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}


// ===== TILT EFFECT NOS CARDS =====
function initTiltEffect() {
  const cards = document.querySelectorAll('.feature-card, .pricing-card, .blog-card');

  cards.forEach(card => {
    card.classList.add('tilt-card');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.setProperty('--rotateX', rotateX + 'deg');
      card.style.setProperty('--rotateY', rotateY + 'deg');
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rotateX', '0deg');
      card.style.setProperty('--rotateY', '0deg');
    });
  });
}

// ===== RIPPLE EFFECT NOS BOTÕES =====
function initRippleEffect() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta');
  buttons.forEach(btn => btn.classList.add('ripple'));
}


// ===== INICIALIZAÇÃO QUANDO DOM ESTIVER PRONTO =====
document.addEventListener('DOMContentLoaded', function () {

  // Inicializar animações originais
  initAOS();
  initDeviceAnimations();
  initFloatingAnimations();
  initContactForm();
  initCardHoverEffects();
  initLazyLoading();
  initNavbarScroll();
  initNavScrollSpy();
  initHeroReveal();
  initProductReveal();
  initProductPerspectiveScroll();

  // Inicializar novas melhorias
  initScrollProgress();
  // initCustomCursor(); // Desativado - cursor customizado removido
  initCounters();
  initTiltEffect();
  initRippleEffect();

  // Fechar menu mobile com ESC + trap de foco
  document.addEventListener('keydown', (e) => {
    if (!isMobileMenuOpen) return;

    if (e.key === 'Escape') {
      setMenuOpen(false);
      return;
    }

    if (e.key !== 'Tab' || !navMenu) return;

    const focusables = getMenuFocusables();
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;

    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  });

  // Prevenir zoom em iOS
  document.addEventListener('gesturestart', (e) => e.preventDefault());
  document.addEventListener('gesturechange', (e) => e.preventDefault());
  document.addEventListener('gestureend', (e) => e.preventDefault());
});

// ===== SERVICE WORKER (OPCIONAL) =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
} 