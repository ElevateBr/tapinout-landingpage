// ===== CONFIGURAÇÕES GLOBAIS =====
const config = {
  animationDuration: 300,
  scrollOffset: 80,
  mobileBreakpoint: 768,
  debounceDelay: 150
};

// ===== TRADUÇÕES =====
const translations = {
  pt: {
    // Hero Section
    hero_badge: 'Sistema Inteligente',
    hero_title: 'Revolucione o controle de ponto da sua empresa',
    hero_subtitle: 'Ponto eletrônico via celular com biometria facial, GPS em tempo real e gestão completa pelo site. Modernize sua empresa com tecnologia de ponta.',
    cta_primary: 'Começar Agora',
    cta_secondary: 'Ver Demonstração',

    // Features Section
    features_title: 'Recursos que transformam sua empresa',
    features_subtitle: 'Tecnologia avançada para gestão moderna de ponto',
    feature_mobile_title: 'App Mobile Intuitivo',
    feature_mobile_desc: 'Ponto eletrônico com um toque no celular. Interface simples e rápida para todos os funcionários.',
    feature_mobile_1: 'Biometria facial',
    feature_mobile_2: 'GPS em tempo real',
    feature_mobile_3: 'Funciona offline',
    feature_security_title: 'Segurança Avançada',
    feature_security_desc: 'Proteção contra fraudes com validação de vivacidade e criptografia end-to-end.',
    feature_security_1: 'Detecção de fraudes',
    feature_security_2: 'Criptografia AES-256',
    feature_security_3: 'Auditoria completa',
    feature_analytics_title: 'Relatórios Inteligentes',
    feature_analytics_desc: 'Dashboards em tempo real com insights valiosos para tomada de decisões estratégicas.',
    feature_analytics_1: 'Tempo real',
    feature_analytics_2: 'Exportação automática',
    feature_analytics_3: 'Alertas inteligentes',
    feature_management_title: 'Gestão Completa',
    feature_management_desc: 'Controle total pelo painel web com permissões customizadas e integração com RH.',
    feature_management_1: 'Painel administrativo',
    feature_management_2: 'Permissões granulares',
    feature_management_3: 'API integrada',

    // Demo Section
    demo_title: 'Veja como funciona',
    demo_subtitle: 'Assista ao vídeo e descubra como o TapInOut pode transformar a gestão de ponto da sua empresa',
    demo_feature_1: 'Demonstração completa',
    demo_feature_2: '2 minutos',
    demo_feature_3: 'Legendas disponíveis',
    demo_play: 'Assistir Demo',

    // CTA Section
    cta_title: 'Pronto para modernizar sua empresa?',
    cta_subtitle: 'Junte-se a empresas que já confiam no TapInOut',
    cta_contact: 'Falar com Especialista',

    // Contact Section
    contact_title: 'Entre em contato',
    contact_subtitle: 'Nossa equipe está pronta para ajudar você a implementar o TapInOut na sua empresa',
    contact_phone_title: 'Telefone',
    contact_whatsapp_title: 'WhatsApp',
    contact_email_title: 'Email',
    contact_address_title: 'Endereço',
    contact_address: 'Rua Vinte Nove de Setembro, 53, 2º andar\nCampos Elíseos, Resende - RJ, Brasil',
    contact_form_title: 'Solicite um orçamento',
    contact_form_name: 'Nome completo',
    contact_form_email: 'Email corporativo',
    contact_form_company: 'Empresa',
    contact_form_phone: 'Telefone',
    contact_form_employees_placeholder: 'Número de funcionários',
    contact_form_submit: 'Solicitar Demo via WhatsApp',
    contact_form_quote: 'Solicitar Orçamento',

    // Footer
    footer_description: 'Sistema de ponto digital inteligente que revoluciona a gestão de jornada de trabalho.',
    footer_product: 'Produto',
    footer_features: 'Recursos',
    footer_demo: 'Demonstração',
    footer_api: 'API',
    footer_company: 'Empresa',
    footer_about: 'Sobre nós',
    footer_support: 'Suporte',
    footer_help: 'Central de Ajuda',
    footer_docs: 'Documentação',
    footer_contact: 'Contato',
    footer_status: 'Status',
    footer_legal: 'Legal',
    footer_privacy: 'Privacidade',
    footer_terms: 'Termos',
    footer_cookies: 'Cookies',
    footer_security: 'Segurança',

    // Navigation
    login_btn: 'Entrar'
  },
  en: {
    // Hero Section
    hero_badge: 'Intelligent System',
    hero_title: 'Revolutionize your company\'s time tracking',
    hero_subtitle: 'Clock in/out via mobile with facial biometrics, real-time GPS and complete management through the website. Modernize your company with cutting-edge technology.',
    cta_primary: 'Get Started',
    cta_secondary: 'Watch Demo',

    // Features Section
    features_title: 'Features that transform your company',
    features_subtitle: 'Advanced technology for modern time management',
    feature_mobile_title: 'Intuitive Mobile App',
    feature_mobile_desc: 'Clock in/out with one touch on your phone. Simple and fast interface for all employees.',
    feature_mobile_1: 'Facial biometrics',
    feature_mobile_2: 'Real-time GPS',
    feature_mobile_3: 'Offline available',
    feature_security_title: 'Advanced Security',
    feature_security_desc: 'Fraud protection with liveness validation and end-to-end encryption.',
    feature_security_1: 'Fraud detection',
    feature_security_2: 'AES-256 encryption',
    feature_security_3: 'Complete audit',
    feature_analytics_title: 'Smart Reports',
    feature_analytics_desc: 'Real-time dashboards with valuable insights for strategic decision making.',
    feature_analytics_1: 'Real-time',
    feature_analytics_2: 'Automatic export',
    feature_analytics_3: 'Smart alerts',
    feature_management_title: 'Complete Management',
    feature_management_desc: 'Total control through web panel with custom permissions and HR integration.',
    feature_management_1: 'Admin panel',
    feature_management_2: 'Granular permissions',
    feature_management_3: 'Integrated API',

    // Demo Section
    demo_title: 'See how it works',
    demo_subtitle: 'Watch the video and discover how TapInOut can transform your company\'s time management',
    demo_feature_1: 'Complete demonstration',
    demo_feature_2: '2 minutes',
    demo_feature_3: 'Subtitles available',
    demo_play: 'Watch Demo',

    // CTA Section
    cta_title: 'Ready to modernize your company?',
    cta_subtitle: 'Join companies that already trust TapInOut',
    cta_contact: 'Talk to Specialist',

    // Contact Section
    contact_title: 'Get in touch',
    contact_subtitle: 'Our team is ready to help you implement TapInOut in your company',
    contact_phone_title: 'Phone',
    contact_whatsapp_title: 'WhatsApp',
    contact_email_title: 'Email',
    contact_address_title: 'Address',
    contact_address: 'Rua Vinte Nove de Setembro, 53, 2nd floor\nCampos Elíseos, Resende - RJ, Brazil',
    contact_form_title: 'Request a quote',
    contact_form_name: 'Full name',
    contact_form_email: 'Corporate email',
    contact_form_company: 'Company',
    contact_form_phone: 'Phone',
    contact_form_employees_placeholder: 'Number of employees',
    contact_form_submit: 'Request Demo via WhatsApp',
    contact_form_quote: 'Request Quote',

    // Footer
    footer_description: 'Intelligent digital time tracking system that revolutionizes work schedule management.',
    footer_product: 'Product',
    footer_features: 'Features',
    footer_demo: 'Demo',
    footer_api: 'API',
    footer_company: 'Company',
    footer_about: 'About us',
    footer_support: 'Support',
    footer_help: 'Help Center',
    footer_docs: 'Documentation',
    footer_contact: 'Contact',
    footer_status: 'Status',
    footer_legal: 'Legal',
    footer_privacy: 'Privacy',
    footer_terms: 'Terms',
    footer_cookies: 'Cookies',
    footer_security: 'Security',

    // Navigation
    login_btn: 'Login'
  },
  es: {
    // Hero Section
    hero_badge: 'Sistema Inteligente',
    hero_title: 'Revoluciona el control de tiempo de tu empresa',
    hero_subtitle: 'Registro de entrada/salida vía móvil con biometría facial, GPS en tiempo real y gestión completa a través del sitio web. Moderniza tu empresa con tecnología de vanguardia.',
    cta_primary: 'Comenzar Ahora',
    cta_secondary: 'Ver Demostración',

    // Features Section
    features_title: 'Características que transforman tu empresa',
    features_subtitle: 'Tecnología avanzada para gestión moderna de tiempo',
    feature_mobile_title: 'App Móvil Intuitiva',
    feature_mobile_desc: 'Registro de entrada/salida con un toque en tu teléfono. Interfaz simple y rápida para todos los empleados.',
    feature_mobile_1: 'Biometría facial',
    feature_mobile_2: 'GPS en tiempo real',
    feature_mobile_3: 'Funciona sin conexión',
    feature_security_title: 'Seguridad Avanzada',
    feature_security_desc: 'Protección contra fraudes con validación de vivacidad y encriptación end-to-end.',
    feature_security_1: 'Detección de fraudes',
    feature_security_2: 'Encriptación AES-256',
    feature_security_3: 'Auditoría completa',
    feature_analytics_title: 'Reportes Inteligentes',
    feature_analytics_desc: 'Dashboards en tiempo real con insights valiosos para toma de decisiones estratégicas.',
    feature_analytics_1: 'Tiempo real',
    feature_analytics_2: 'Exportación automática',
    feature_analytics_3: 'Alertas inteligentes',
    feature_management_title: 'Gestión Completa',
    feature_management_desc: 'Control total a través del panel web con permisos personalizados e integración con RRHH.',
    feature_management_1: 'Panel administrativo',
    feature_management_2: 'Permisos granulares',
    feature_management_3: 'API integrada',

    // Demo Section
    demo_title: 'Ve cómo funciona',
    demo_subtitle: 'Mira el video y descubre cómo TapInOut puede transformar la gestión de tiempo de tu empresa',
    demo_feature_1: 'Demostración completa',
    demo_feature_2: '2 minutos',
    demo_feature_3: 'Subtítulos disponibles',
    demo_play: 'Ver Demo',

    // CTA Section
    cta_title: '¿Listo para modernizar tu empresa?',
    cta_subtitle: 'Únete a empresas que ya confían en TapInOut',
    cta_contact: 'Hablar con Especialista',

    // Contact Section
    contact_title: 'Ponte en contacto',
    contact_subtitle: 'Nuestro equipo está listo para ayudarte a implementar TapInOut en tu empresa',
    contact_phone_title: 'Teléfono',
    contact_whatsapp_title: 'WhatsApp',
    contact_email_title: 'Email',
    contact_address_title: 'Dirección',
    contact_address: 'Rua Vinte Nove de Setembro, 53, 2º piso\nCampos Elíseos, Resende - RJ, Brasil',
    contact_form_title: 'Solicita una cotización',
    contact_form_name: 'Nombre completo',
    contact_form_email: 'Email corporativo',
    contact_form_company: 'Empresa',
    contact_form_phone: 'Teléfono',
    contact_form_employees_placeholder: 'Número de empleados',
    contact_form_submit: 'Solicitar Demo vía WhatsApp',
    contact_form_quote: 'Solicitar Cotización',

    // Footer
    footer_description: 'Sistema de control de asistencia digital inteligente que revoluciona la gestión de jornada laboral.',
    footer_product: 'Producto',
    footer_features: 'Recursos',
    footer_demo: 'Demostración',
    footer_api: 'API',
    footer_company: 'Empresa',
    footer_about: 'Sobre nosotros',
    footer_support: 'Soporte',
    footer_help: 'Centro de Ayuda',
    footer_docs: 'Documentación',
    footer_contact: 'Contacto',
    footer_status: 'Estado',
    footer_legal: 'Legal',
    footer_privacy: 'Privacidad',
    footer_terms: 'Términos',
    footer_cookies: 'Cookies',
    footer_security: 'Seguridad',

    // Navigation
    login_btn: 'Entrar'
  }
};

// ===== ESTADO GLOBAL =====
let currentLang = 'pt';
let isMobileMenuOpen = false;

// ===== ELEMENTOS DOM =====
const langButtons = document.querySelectorAll('.lang-btn');
const i18nElements = document.querySelectorAll('[data-i18n]');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const navCtaButton = document.querySelector('.nav-cta');

// ===== SISTEMA DE TRADUÇÃO =====
function setLang(lang) {
  // Atualizar botões de idioma
  langButtons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
  
  // Atualizar elementos com tradução
  i18nElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Atualizar atributo lang do HTML
  document.documentElement.lang = lang;
  currentLang = lang;
}

// ===== EVENT LISTENERS PARA BOTÕES DE IDIOMA =====
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    setLang(lang);
  });
});

// ===== EVENT LISTENER PARA BOTÃO ENTRAR =====
if (navCtaButton) {
  navCtaButton.addEventListener('click', () => {
    window.open('https://app.tapinout.com/login', '_blank');
  });
}

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
function handleNavbarScroll() {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

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
  const quoteBtn = form.querySelector('button[data-i18n="contact_form_quote"]');
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

// ===== INICIALIZAÇÃO QUANDO DOM ESTIVER PRONTO =====
document.addEventListener('DOMContentLoaded', function() {
  // Configurar idioma padrão
  setLang('pt');
  
  // Inicializar animações
  initAOS();
  initDeviceAnimations();
  initFloatingAnimations();
  initContactForm();
  initCardHoverEffects();
  initParallax();
  initLazyLoading();
  
  // Event listeners
  window.addEventListener('scroll', debounce(handleNavbarScroll, config.debounceDelay));
  
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