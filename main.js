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
    hero_subtitle: 'Aplicação de gestão web para líderes e RH com dashboards inteligentes, IA para detecção de riscos trabalhistas e gestão centralizada de múltiplos locais de trabalho.',
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
    feature_analytics_title: 'Dashboards e IA Inteligente',
    feature_analytics_desc: 'Dashboards em tempo real com IA para identificação e notificação de riscos trabalhistas, banco de horas e férias DSR.',
    feature_analytics_1: 'IA para detecção de riscos',
    feature_analytics_2: 'Alertas de banco de horas',
    feature_analytics_3: 'Controle de férias e DSR',
    feature_management_title: 'Gestão Multi-Local',
    feature_management_desc: 'Aplicação de gestão web para líderes e RH com controle centralizado de múltiplos locais de trabalho.',
    feature_management_1: 'Gestão centralizada',
    feature_management_2: 'Múltiplos locais',
    feature_management_3: 'Painel para RH',

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

    // Management Section
    management_title: 'Aplicação de Gestão Web para Líderes e RH',
    management_subtitle: 'Plataforma completa para gestão de pessoas com dashboards inteligentes e controle centralizado',
    management_ai_title: 'Inteligência Artificial',
    management_ai_desc: 'IA avançada para identificação automática de riscos trabalhistas, irregularidades de ponto e conformidade legal.',
    management_dashboard_title: 'Dashboards Inteligentes',
    management_dashboard_desc: 'Visualização em tempo real de métricas de produtividade, banco de horas, férias e indicadores de DSR.',
    management_multi_title: 'Gestão Multi-Local',
    management_multi_desc: 'Controle centralizado de múltiplos locais de trabalho, filiais e equipes remotas em uma única plataforma.',
    management_law_title: 'Conformidade Legal Trabalhista',
    management_law_desc: 'Conformidade total com a legislação trabalhista brasileira 671/2021, garantindo segurança jurídica e aderência regulatória.',
    dashboard_title: 'Painel de Gestão TapInOut',
    dashboard_status: 'Tempo Real',
    metric_employees: 'Funcionários',
    metric_punctuality: 'Pontualidade',
    metric_alerts: 'Alertas',
    metric_locations: 'Locais',

    // Blog Section
    blog_title: 'Artigos e Insights',
    blog_subtitle: 'Conteúdo especializado para ajudar sua empresa a evoluir',
    blog_category_1: 'Gestão Empresarial',
    blog_date_1: '15 Ago 2025',
    blog_title_1: 'Como um Aplicativo de Ponto Digital Pode Ajudar sua Empresa a Progredir',
    blog_excerpt_1: 'Descubra como a digitalização do controle de ponto pode transformar a gestão da sua empresa, aumentar a produtividade e reduzir custos operacionais.',
    blog_read_time_1: '5 min de leitura',
    blog_category_2: 'Conformidade Legal',
    blog_date_2: '12 Ago 2025',
    blog_title_2: 'Como o TapInOut Atende as Exigências da Regulamentação 671/2021',
    blog_excerpt_2: 'Entenda como nossa solução garante total conformidade com a legislação trabalhista brasileira, protegendo sua empresa de multas e processos.',
    blog_read_time_2: '7 min de leitura',
    blog_category_3: 'Inteligência Artificial',
    blog_date_3: '10 Ago 2025',
    blog_title_3: 'Como a IA Pode Ajudar sua Empresa a Melhorar e Avançar com Menos Riscos',
    blog_excerpt_3: 'Explore as possibilidades da inteligência artificial na gestão empresarial e como ela pode reduzir riscos trabalhistas e operacionais.',
    blog_read_time_3: '6 min de leitura',
    blog_read_more: 'Ler mais',
    blog_view_all: 'Ver Todos os Artigos',

    // Navigation
    login_btn: 'Entrar'
  },
  en: {
    // Hero Section
    hero_badge: 'Intelligent System',
    hero_title: 'Revolutionize your company\'s time tracking',
    hero_subtitle: 'Web management application for leaders and HR with intelligent dashboards, AI for labor risk detection and centralized management of multiple work locations.',
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
    feature_analytics_title: 'Intelligent Dashboards and AI',
    feature_analytics_desc: 'Real-time dashboards with AI for identification and notification of labor risks, overtime bank and vacation DSR.',
    feature_analytics_1: 'AI for risk detection',
    feature_analytics_2: 'Overtime bank alerts',
    feature_analytics_3: 'Vacation and DSR control',
    feature_management_title: 'Multi-Location Management',
    feature_management_desc: 'Web management application for leaders and HR with centralized control of multiple work locations.',
    feature_management_1: 'Centralized management',
    feature_management_2: 'Multiple locations',
    feature_management_3: 'HR panel',

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

    // Management Section
    management_title: 'Web Management Application for Leaders and HR',
    management_subtitle: 'Complete platform for people management with intelligent dashboards and centralized control',
    management_ai_title: 'Artificial Intelligence',
    management_ai_desc: 'Advanced AI for automatic identification of labor risks, time tracking irregularities and legal compliance.',
    management_dashboard_title: 'Intelligent Dashboards',
    management_dashboard_desc: 'Real-time visualization of productivity metrics, overtime bank, vacations and DSR indicators.',
    management_multi_title: 'Multi-Location Management',
    management_multi_desc: 'Centralized control of multiple work locations, branches and remote teams in a single platform.',
    management_law_title: 'Labor Law Compliance',
    management_law_desc: 'Full compliance with Brazilian labor legislation 671/2021, ensuring legal security and regulatory adherence.',
    dashboard_title: 'TapInOut Management Panel',
    dashboard_status: 'Real Time',
    metric_employees: 'Employees',
    metric_punctuality: 'Punctuality',
    metric_alerts: 'Alerts',
    metric_locations: 'Locations',

    // Blog Section
    blog_title: 'Articles and Insights',
    blog_subtitle: 'Specialized content to help your company evolve',
    blog_category_1: 'Business Management',
    blog_date_1: 'Aug 15, 2025',
    blog_title_1: 'How a Digital Time Tracking App Can Help Your Company Progress',
    blog_excerpt_1: 'Discover how digitizing time tracking can transform your company\'s management, increase productivity and reduce operational costs.',
    blog_read_time_1: '5 min read',
    blog_category_2: 'Legal Compliance',
    blog_date_2: 'Aug 12, 2025',
    blog_title_2: 'How TapInOut Meets the Requirements of Regulation 671/2021',
    blog_excerpt_2: 'Understand how our solution ensures full compliance with Brazilian labor legislation, protecting your company from fines and lawsuits.',
    blog_read_time_2: '7 min read',
    blog_category_3: 'Artificial Intelligence',
    blog_date_3: 'Aug 10, 2025',
    blog_title_3: 'How AI Can Help Your Company Improve and Advance with Less Risk',
    blog_excerpt_3: 'Explore the possibilities of artificial intelligence in business management and how it can reduce labor and operational risks.',
    blog_read_time_3: '6 min read',
    blog_read_more: 'Read more',
    blog_view_all: 'View All Articles',

    // Navigation
    login_btn: 'Login'
  },
  es: {
    // Hero Section
    hero_badge: 'Sistema Inteligente',
    hero_title: 'Revoluciona el control de tiempo de tu empresa',
    hero_subtitle: 'Aplicación de gestión web para líderes y RRHH con dashboards inteligentes, IA para detección de riesgos laborales y gestión centralizada de múltiples ubicaciones de trabajo.',
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
    feature_analytics_title: 'Dashboards e IA Inteligente',
    feature_analytics_desc: 'Dashboards en tiempo real con IA para identificación y notificación de riesgos laborales, banco de horas y vacaciones DSR.',
    feature_analytics_1: 'IA para detección de riesgos',
    feature_analytics_2: 'Alertas de banco de horas',
    feature_analytics_3: 'Control de vacaciones y DSR',
    feature_management_title: 'Gestión Multi-Ubicación',
    feature_management_desc: 'Aplicación de gestión web para líderes y RRHH con control centralizado de múltiples ubicaciones de trabajo.',
    feature_management_1: 'Gestión centralizada',
    feature_management_2: 'Múltiples ubicaciones',
    feature_management_3: 'Panel para RRHH',

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

    // Management Section
    management_title: 'Aplicación de Gestión Web para Líderes y RRHH',
    management_subtitle: 'Plataforma completa para gestión de personas con dashboards inteligentes y control centralizado',
    management_ai_title: 'Inteligencia Artificial',
    management_ai_desc: 'IA avanzada para identificación automática de riesgos laborales, irregularidades de registro de tiempo y cumplimiento legal.',
    management_dashboard_title: 'Dashboards Inteligentes',
    management_dashboard_desc: 'Visualización en tiempo real de métricas de productividad, banco de horas, vacaciones e indicadores de DSR.',
    management_multi_title: 'Gestión Multi-Ubicación',
    management_multi_desc: 'Control centralizado de múltiples ubicaciones de trabajo, sucursales y equipos remotos en una sola plataforma.',
    management_law_title: 'Cumplimiento Legal Laboral',
    management_law_desc: 'Cumplimiento total con la legislación laboral brasileña 671/2021, garantizando seguridad legal y adherencia regulatoria.',
    dashboard_title: 'Panel de Gestión TapInOut',
    dashboard_status: 'Tiempo Real',
    metric_employees: 'Empleados',
    metric_punctuality: 'Puntualidad',
    metric_alerts: 'Alertas',
    metric_locations: 'Ubicaciones',

    // Blog Section
    blog_title: 'Artículos e Insights',
    blog_subtitle: 'Contenido especializado para ayudar a tu empresa a evolucionar',
    blog_category_1: 'Gestión Empresarial',
    blog_date_1: '15 Ago 2025',
    blog_title_1: 'Cómo una App de Control de Asistencia Digital Puede Ayudar a tu Empresa a Progresar',
    blog_excerpt_1: 'Descubre cómo la digitalización del control de asistencia puede transformar la gestión de tu empresa, aumentar la productividad y reducir costos operacionales.',
    blog_read_time_1: '5 min de lectura',
    blog_category_2: 'Cumplimiento Legal',
    blog_date_2: '12 Ago 2025',
    blog_title_2: 'Cómo TapInOut Cumple con los Requisitos de la Regulación 671/2021',
    blog_excerpt_2: 'Entiende cómo nuestra solución garantiza total cumplimiento con la legislación laboral brasileña, protegiendo tu empresa de multas y procesos.',
    blog_read_time_2: '7 min de lectura',
    blog_category_3: 'Inteligencia Artificial',
    blog_date_3: '10 Ago 2025',
    blog_title_3: 'Cómo la IA Puede Ayudar a tu Empresa a Mejorar y Avanzar con Menos Riesgos',
    blog_excerpt_3: 'Explora las posibilidades de la inteligencia artificial en la gestión empresarial y cómo puede reducir riesgos laborales y operacionales.',
    blog_read_time_3: '6 min de lectura',
    blog_read_more: 'Leer más',
    blog_view_all: 'Ver Todos los Artículos',

    // Navigation
    login_btn: 'Entrar'
  }
};

// ===== ESTADO GLOBAL =====
let currentLang = 'pt';
let isMobileMenuOpen = false;

// ===== ELEMENTOS DOM =====
// Estes elementos serão definidos dentro do DOMContentLoaded
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const navCtaButton = document.querySelector('.nav-cta');

// ===== SISTEMA DE TRADUÇÃO =====
function setLang(lang, langButtons, i18nElements) {
  // Se não especificar idioma, detectar automaticamente pela URL
  if (!lang) {
    const path = window.location.pathname;
    if (path.includes('/en/')) lang = 'en';
    else if (path.includes('/es/')) lang = 'es';
    else lang = 'pt';
  }
  
  // Atualizar botões de idioma
  if (langButtons) {
    langButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
    if (activeBtn) {
      activeBtn.classList.add('active');
      activeBtn.setAttribute('aria-pressed', 'true');
    }
  }
  
  // Atualizar elementos com tradução
  if (i18nElements) {
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
  
  // Atualizar atributo lang do HTML
  document.documentElement.lang = lang;
  currentLang = lang;
}

// ===== EVENT LISTENERS PARA BOTÕES DE IDIOMA =====
function setupLanguageButtons(langButtons) {
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      const path = window.location.pathname;
      let target = '/';
      if (lang === 'en') target = '/en/';
      if (lang === 'es') target = '/es/';
      if (lang === 'pt') target = '/';

      const hash = window.location.hash;
      window.location.href = target + (hash ? hash : '');
    });
  });
}

// A função setLang() agora detecta automaticamente o idioma baseado na URL

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
  // Definir elementos DOM
  const langButtons = document.querySelectorAll('.lang-btn');
  const i18nElements = document.querySelectorAll('[data-i18n]');
  
  // Configurar botões de idioma
  setupLanguageButtons(langButtons);
  
  // Detectar e configurar idioma automaticamente baseado na URL
  setLang(null, langButtons, i18nElements);
  
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
  initCustomCursor();
  initCounters();
  initTiltEffect();
  initRippleEffect();
  
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