const translations = {
  pt: {
    headline: 'O jeito moderno de bater ponto',
    subheadline: 'Controle de ponto digital, fácil e seguro para empresas e funcionários.',
    cta: 'Quero ser avisado',
    privacy: 'Não enviaremos spam.',
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
    email_placeholder: 'Seu e-mail'
  },
  en: {
    headline: 'The modern way to clock in and out',
    subheadline: 'Digital time tracking, easy and secure for companies and employees.',
    cta: 'Notify me',
    privacy: 'We will not send spam.',
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
    email_placeholder: 'Your email'
  },
  es: {
    headline: 'La forma moderna de fichar',
    subheadline: 'Control de asistencia digital, fácil y seguro para empresas y empleados.',
    cta: 'Avísame',
    privacy: 'No enviaremos spam.',
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
    email_placeholder: 'Tu correo electrónico'
  }
};

const langButtons = document.querySelectorAll('.lang-switcher button');
const i18nElements = document.querySelectorAll('[data-i18n]');
const emailInput = document.querySelector('input[type="email"]');

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
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
});

// Default language
setLang('pt');

// Simulate form submission
const form = document.getElementById('preRegisterForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  form.reset();
  alert('Pré-cadastro realizado!');
}); 