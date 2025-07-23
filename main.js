const translations = {
  pt: {
    headline: 'O jeito moderno de bater ponto',
    subheadline: 'Controle de ponto digital, fácil e seguro para empresas e funcionários.',
    cta: 'Quero me cadastrar',
    privacy: '',
    about_title: 'Sobre o TapInOut',
    feature_mobile: 'Check-in/out pelo celular',
    feature_gps: 'Monitoramento via GPS',
    feature_management: 'Gestão de ponto para empresas',
    feature_biometrics: 'Validação por biometria facial',
    benefits_title: 'Benefícios',
    benefit_fast: 'Rápido e prático',
    benefit_secure: 'Seguro e confiável',
    benefit_reports: 'Relatórios inteligentes',
    developed_by: 'Desenvolvido por <a href="https://www.elevatebr.org" target="_blank">Elevate</a>',
    privacy_policy: 'Política de Privacidade',
    terms: 'Termos',
    contact: 'Contato',
    contact_title: 'Contato',
    address_label: 'Endereço:',
    address: 'Rua Vinte Nove de Setembro, 53, 2º andar\nCampos Elíseos, Resende - RJ, Brasil',
    whatsapp_label: 'WhatsApp:',
    email_label: 'Email:',
    email_placeholder: 'Seu e-mail',
    mail_subject: 'Interesse no TapInOut',
    mail_body: 'Olá,\n\nTenho interesse em ser avisado sobre o lançamento do TapInOut. Meu e-mail é: ',
    coming_soon: 'Em breve',
    plan_title: 'Planos para todos os tamanhos de empresa',
    plan_basic: 'Básico',
    plan_basic_desc: 'Ideal para pequenas equipes',
    plan_basic_cta: 'Comece grátis',
    plan_pro: 'Profissional',
    plan_pro_desc: 'Recursos avançados para empresas em crescimento',
    plan_pro_cta: 'Comece grátis'
  },
  en: {
    headline: 'The modern way to clock in and out',
    subheadline: 'Digital time tracking, easy and secure for companies and employees.',
    cta: 'Register',
    privacy: '',
    about_title: 'About TapInOut',
    feature_mobile: 'Check-in/out via mobile',
    feature_gps: 'GPS monitoring',
    feature_management: 'Time management for companies',
    feature_biometrics: 'Facial biometrics validation',
    benefits_title: 'Benefits',
    benefit_fast: 'Fast and practical',
    benefit_secure: 'Secure and reliable',
    benefit_reports: 'Smart reports',
    developed_by: 'Developed by <a href="https://www.elevatebr.org" target="_blank">Elevate</a>',
    privacy_policy: 'Privacy Policy',
    terms: 'Terms',
    contact: 'Contact',
    contact_title: 'Contact',
    address_label: 'Address:',
    address: 'Rua Vinte Nove de Setembro, 53, 2nd floor\nCampos Elíseos, Resende - RJ, Brazil',
    whatsapp_label: 'WhatsApp:',
    email_label: 'Email:',
    email_placeholder: 'Your email',
    mail_subject: 'Interest in TapInOut',
    mail_body: 'Hello,\n\nI am interested in being notified about the launch of TapInOut. My email is: ',
    coming_soon: 'Coming soon',
    plan_title: 'Plans for every business size',
    plan_basic: 'Basic',
    plan_basic_desc: 'Ideal for small teams',
    plan_basic_cta: 'Start free',
    plan_pro: 'Professional',
    plan_pro_desc: 'Advanced features for growing companies',
    plan_pro_cta: 'Start free'
  },
  es: {
    headline: 'La forma moderna de fichar',
    subheadline: 'Control de asistencia digital, fácil y seguro para empresas y empleados.',
    cta: 'Registrarme',
    privacy: '',
    about_title: 'Sobre TapInOut',
    feature_mobile: 'Check-in/out por móvil',
    feature_gps: 'Monitoreo por GPS',
    feature_management: 'Gestión de asistencia para empresas',
    feature_biometrics: 'Validación por biometría facial',
    benefits_title: 'Beneficios',
    benefit_fast: 'Rápido y práctico',
    benefit_secure: 'Seguro y confiable',
    benefit_reports: 'Reportes inteligentes',
    developed_by: 'Desarrollado por <a href="https://www.elevatebr.org" target="_blank">Elevate</a>',
    privacy_policy: 'Política de Privacidad',
    terms: 'Términos',
    contact: 'Contacto',
    contact_title: 'Contacto',
    address_label: 'Dirección:',
    address: 'Rua Vinte Nove de Setembro, 53, 2º piso\nCampos Elíseos, Resende - RJ, Brasil',
    whatsapp_label: 'WhatsApp:',
    email_label: 'Correo:',
    email_placeholder: 'Tu correo electrónico',
    mail_subject: 'Interés en TapInOut',
    mail_body: 'Hola,\n\nTengo interés en ser avisado sobre el lanzamiento de TapInOut. Mi correo es: ',
    coming_soon: 'Próximamente',
    plan_title: 'Planes para todos los tamaños de empresa',
    plan_basic: 'Básico',
    plan_basic_desc: 'Ideal para equipos pequeños',
    plan_basic_cta: 'Empieza gratis',
    plan_pro: 'Profesional',
    plan_pro_desc: 'Funciones avanzadas para empresas en crecimiento',
    plan_pro_cta: 'Empieza gratis'
  }
};

const langButtons = document.querySelectorAll('.lang-switcher button');
const i18nElements = document.querySelectorAll('[data-i18n]');
const emailInput = document.querySelector('input[type="email"]');
let currentLang = 'pt';

function setLang(lang) {
  langButtons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.lang-switcher button[data-lang="${lang}"]`).classList.add('active');
  i18nElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && translations[lang][key]) {
      if (key === 'developed_by') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  if (emailInput) {
    emailInput.placeholder = translations[lang]['email_placeholder'];
  }
  document.documentElement.lang = lang;
  currentLang = lang;
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
});

// Default language
setLang('pt');

// Abrir cliente de e-mail padrão ao enviar o formulário
const form = document.getElementById('preRegisterForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (!email) return;
  const subject = encodeURIComponent(translations[currentLang].mail_subject);
  const body = encodeURIComponent(translations[currentLang].mail_body + email);
  window.location.href = `mailto:contato@elevatebr.org?subject=${subject}&body=${body}`;
}); 