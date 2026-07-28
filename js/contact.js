// =============================================
//  CONTACT FORM — EmailJS (Vercel-vänlig)
// =============================================

// Dina EmailJS-nycklar
const EMAILJS_PUBLIC_KEY = '-fTtnG6rtixWp8C2e';
const EMAILJS_SERVICE_ID = 'service_encnrtv';
const EMAILJS_TEMPLATE_ID = 'template_azs5d7k';

// Initiera EmailJS
if (typeof emailjs !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'sv';
    const sending = lang === 'sv' ? 'Skickar…' : 'Sending…';
    const success = lang === 'sv' ? '✅ Meddelandet skickades!' : '✅ Message sent!';
    const error = lang === 'sv' ? '❌ Något gick fel. Försök igen.' : '❌ Something went wrong. Please try again.';

    btn.disabled = true;
    btn.textContent = sending;
    status.textContent = '';

    // Kolla om EmailJS finns
    if (typeof emailjs === 'undefined') {
      setTimeout(() => {
        status.textContent = lang === 'sv'
          ? '⚠️ EmailJS laddades inte. Kontrollera din internetanslutning.'
          : '⚠️ EmailJS failed to load. Check your internet connection.';
        btn.disabled = false;
        btn.textContent = lang === 'sv' ? 'Skicka meddelande' : 'Send message';
      }, 600);
      return;
    }

    // Skicka med EmailJS
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(() => {
        status.style.color = '#2D6A4F';
        status.textContent = success;
        form.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        status.style.color = '#c0392b';
        status.textContent = error + ' - Försök igen eller kontakta mig direkt på therealymohammad2002@gmail.com';
      })
      .finally(() => {
        btn.disabled = false;
        btn.textContent = lang === 'sv' ? 'Skicka meddelande' : 'Send message';
      });
  });
}