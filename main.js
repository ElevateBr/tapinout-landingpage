// ===== CONFIGURAÇÕES GLOBAIS =====
const config = {
  animationDuration: 300,
  scrollOffset: 80,
  mobileBreakpoint: 768,
  debounceDelay: 150
};

// Sistema de tradução removido - todos os textos agora estão diretamente no HTML

// ===== ESTADO GLOBAL =====
let isMobileMenuOpen = false;

// ===== ELEMENTOS DOM =====
// Estes elementos serão definidos dentro do DOMContentLoaded
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const navCtaButton = document.querySelector('.nav-cta');

// Sistema de tradução removido - todos os textos agora estão diretamente no HTML

// ===== EVENT LISTENER PARA BOTÃO ENTRAR =====
// Removido - o botão agora usa apenas o href do HTML que aponta para /register
// Isso evita conflito entre JavaScript e o comportamento padrão do link

// ===== NAVEGAÇÃO MOBILE =====
function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
  navMenu.classList.toggle('active', isMobileMenuOpen);
  navToggle.classList.toggle('active', isMobileMenuOpen);
  
  // Prevenir scroll do body quando menu está aberto
  document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
}

if (navToggle) {
  navToggle.addEventListener('click', toggleMobileMenu);
}

// ===== FECHAR MENU MOBILE AO CLICAR EM UM LINK =====
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  });
});

// ===== SCROLL SUAVE PARA ÂNCORAS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - config.scrollOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===== NAVBAR SCROLL EFFECT =====
// Removido - navbar mantém transparência constante

// ===== ANIMAÇÕES AOS (ANIMATE ON SCROLL) =====
function initAOS() {
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
  const phoneMockup = document.querySelector('.phone-mockup');
  const desktopMockup = document.querySelector('.desktop-mockup');
  
  if (phoneMockup) {
    phoneMockup.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    phoneMockup.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  }
  
  if (desktopMockup) {
    desktopMockup.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) rotate(-1deg)';
    });
    
    desktopMockup.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  }
}

// ===== ANIMAÇÕES DOS ELEMENTOS FLUTUANTES =====
function initFloatingAnimations() {
  const floatCards = document.querySelectorAll('.float-card');
  
  floatCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.05)';
      this.style.boxShadow = '0 20px 40px rgba(48, 92, 222, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
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
    quoteBtn.addEventListener('click', function() {
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
      const whatsappNumber = '5524999402412';
      
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
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
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
document.addEventListener('DOMContentLoaded', function() {
  
  // Inicializar animações originais
  initAOS();
  initDeviceAnimations();
  initFloatingAnimations();
  initContactForm();
  initCardHoverEffects();
  initParallax();
  initLazyLoading();
  
  // Inicializar novas melhorias
  initScrollProgress();
  // initCustomCursor(); // Desativado - cursor customizado removido
  initCounters();
  initTiltEffect();
  initRippleEffect();
  
  // Event listeners
  // handleNavbarScroll removido - navbar mantém transparência constante
  
  // Fechar menu mobile com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
      toggleMobileMenu();
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