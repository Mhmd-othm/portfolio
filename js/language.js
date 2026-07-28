// =============================================
//  LANGUAGE & DOM RENDERING
// =============================================

let currentLang = localStorage.getItem('lang') || 'sv';

function t(key) {
  return translations[currentLang][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    const val = translations[currentLang][key];
    if (val) el.textContent = val;
  });

  document.querySelectorAll('[data-key-placeholder]').forEach(el => {
    const key = el.getAttribute('data-key-placeholder');
    const val = translations[currentLang][key];
    if (val) el.setAttribute('placeholder', val);
  });

  document.documentElement.lang = currentLang;
  document.getElementById('lang-toggle').textContent = currentLang === 'sv' ? 'EN' : 'SV';
}

// ---- Render Skills ----
function renderSkills() {
  const container = document.getElementById('skills-tags');
  if (!container) return;
  container.innerHTML = '';
  const list = currentLang === 'sv' ? skills : skillsEN;
  list.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'skill-tag';
    span.textContent = skill;
    container.appendChild(span);
  });
}

// ---- Render Education ----
function renderEducation() {
  const container = document.getElementById('education-list');
  if (!container) return;
  container.innerHTML = '';
  const items = education[currentLang];
  items.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'timeline-item reveal';
    div.style.transitionDelay = `${i * 0.1}s`;
    div.innerHTML = `
      <div class="timeline-period">${item.period}</div>
      <div class="timeline-title">${item.title}</div>
      <div class="timeline-school">${item.school}</div>
      ${item.desc ? `<div class="timeline-desc">${item.desc}</div>` : ''}
    `;
    container.appendChild(div);
  });
  observeReveal();
}

// ---- Render Experience ----
function renderExperience() {
  const container = document.getElementById('experience-list');
  if (!container) return;
  container.innerHTML = '';
  const items = experience[currentLang];
  items.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'exp-card reveal';
    div.style.transitionDelay = `${i * 0.08}s`;
    
    // Kolla om det finns en WOTM-bild
    let wotmHTML = '';
    if (item.wotmImage) {
      const wotmText = currentLang === 'sv' ? '🏆 Visa månadens medarbetare' : '🏆 View Employee of the Month';
      wotmHTML = `
        <button class="wotm-btn" onclick="openWOTM('${item.wotmImage}')">
          ${wotmText}
        </button>
      `;
    }
    
    div.innerHTML = `
      <div class="exp-period">${item.period}</div>
      <div class="exp-title">${item.title}</div>
      <div class="exp-company">${item.company}</div>
      <div class="exp-desc">${item.desc}</div>
      <div class="exp-location">📍 ${item.location}</div>
      ${wotmHTML}
    `;
    container.appendChild(div);
  });
  observeReveal();
}

// ---- WOTM Lightbox ----
function openWOTM(imageSrc) {
  const overlay = document.getElementById('wotm-lightbox');
  const img = document.getElementById('wotm-lightbox-img');
  img.src = imageSrc;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWOTM() {
  const overlay = document.getElementById('wotm-lightbox');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Stäng med Escape-tangent
document.addEventListener('keydown', (e) => {
  const overlay = document.getElementById('wotm-lightbox');
  if (!overlay.classList.contains('active')) return;
  if (e.key === 'Escape') closeWOTM();
});

// ---- Render Courses ----
function renderCourses() {
  const container = document.getElementById('courses-list');
  if (!container) return;
  container.innerHTML = '';
  const items = courses[currentLang];
  
  items.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'course-card reveal';
    div.style.transitionDelay = `${i * 0.1}s`;
    
    // Skapa status-badge med rätt färg
    const statusClass = item.status === 'Pågående' || item.status === 'Ongoing' ? 'status-ongoing' : 'status-completed';
    const statusIcon = item.status === 'Pågående' || item.status === 'Ongoing' ? '🔄' : '✅';
    
    const certHTML = item.certificateImg ? `
      <div class="course-certificate">
        <img src="${item.certificateImg}" alt="${item.title} certifikat" onerror="this.style.display='none'">
      </div>
    ` : '';
    
    const certLink = item.link ? `
      <a href="${item.link}" target="_blank" rel="noopener" class="course-cert-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        ${translations[currentLang]['courses.viewCert'] || 'Visa intyg'}
      </a>
    ` : '';
    
    div.innerHTML = `
      <div class="course-header">
        <div class="course-platform">${item.platform}</div>
        <div class="course-date">${item.date}</div>
      </div>
      <div class="course-title-row">
        <h3 class="course-title">${item.title}</h3>
        <span class="course-status ${statusClass}">${statusIcon} ${item.status}</span>
      </div>
      ${item.instructor ? `<div class="course-instructor">👨‍🏫 ${item.instructor}</div>` : ''}
      <p class="course-desc">${item.desc}</p>
      ${certHTML}
      <div class="course-actions">
        ${certLink}
      </div>
    `;
    container.appendChild(div);
  });
  observeReveal();
}


// =============================================
//  LIGHTBOX — för att visa bilder i stort format
// =============================================

let lightboxImages = [];
let lightboxIndex = 0;
let lightboxSlider = null;
let lightboxCurrentIndex = 0;

function openLightbox(imageSrc, allImages, startIndex) {
  lightboxImages = allImages;
  lightboxCurrentIndex = startIndex;
  
  const overlay = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  
  img.src = imageSrc;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Uppdatera bildräknare
  updateLightboxCounter();
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  const newIndex = lightboxCurrentIndex + direction;
  if (newIndex < 0 || newIndex >= lightboxImages.length) return;
  
  lightboxCurrentIndex = newIndex;
  const img = document.getElementById('lightbox-img');
  img.src = lightboxImages[newIndex];
  updateLightboxCounter();
}

function updateLightboxCounter() {
  const counter = document.getElementById('lightbox-counter');
  if (counter) {
    counter.textContent = `${lightboxCurrentIndex + 1} / ${lightboxImages.length}`;
  }
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
  const overlay = document.getElementById('lightbox');
  if (!overlay.classList.contains('active')) return;
  
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') navigateLightbox(1);
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
});

// ---- Render Projects (with slider + lightbox) ----
function renderProjects() {
  const container = document.getElementById('projects-list');
  if (!container) return;
  container.innerHTML = '';
  const items = projects[currentLang];
  
  items.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'project-card reveal';
    div.style.transitionDelay = `${i * 0.1}s`;

    let imgHTML = '';
    const projectId = `project-${i}`;
    
    if (item.images && item.images.length > 0) {
      const imageId = `project-slider-${i}`;
      const allImages = item.images;
      const clickHint = translations[currentLang]['proj.clickHint'] || '🔍 Klicka på bild';
      
      imgHTML = `
        <div class="project-img" style="position: relative; overflow: hidden;">
          <div class="project-slider" id="${imageId}" style="display: flex; transition: transform 0.3s ease; height: 100%;">
            ${allImages.map((img, idx) => `
              <div style="min-width: 100%; height: 100%; cursor: pointer;" onclick="openLightbox('${img}', ${JSON.stringify(allImages).replace(/"/g, "'")}, ${idx})">
                <img src="${img}" alt="${item.title}" style="width: 100%; height: 180px; object-fit: cover; display: block;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Crect width=%22100%22 height=%22100%22 fill=%22%2352B788%22/%3E%3Ctext x=%2250%22 y=%2250%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22white%22 font-size=%2212%22%3EBild saknas%3C/text%3E%3C/svg%3E';">
              </div>
            `).join('')}
          </div>
          ${allImages.length > 1 ? `
            <button class="slider-prev" data-slider="${imageId}" style="position: absolute; left: 8px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; border-radius: 50%; width: 32px; height: 32px; cursor: pointer; z-index: 2; font-size: 16px; transition: opacity 0.2s;">◀</button>
            <button class="slider-next" data-slider="${imageId}" style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; border-radius: 50%; width: 32px; height: 32px; cursor: pointer; z-index: 2; font-size: 16px; transition: opacity 0.2s;">▶</button>
            <div style="position: absolute; bottom: 8px; left: 0; right: 0; text-align: center; z-index: 2;">
              ${allImages.map((_, idx) => `<span class="slider-dot" data-slider="${imageId}" data-index="${idx}" style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${idx === 0 ? 'white' : 'rgba(255,255,255,0.5)'}; margin: 0 4px; cursor: pointer; transition: background 0.2s;"></span>`).join('')}
            </div>
          ` : ''}
          <div style="position: absolute; bottom: 40px; right: 12px; z-index: 2; background: rgba(0,0,0,0.6); color: white; padding: 2px 10px; border-radius: 12px; font-size: 12px; font-family: var(--ff-code);">
            ${clickHint}
          </div>
        </div>
      `;
    } else if (item.upcoming) {
      imgHTML = `<div class="project-img"><div class="project-img-placeholder">— ${item.tech} —</div></div>`;
    } else {
      imgHTML = `<div class="project-img"><div class="project-img-placeholder">${item.tech}</div></div>`;
    }

    const linkDisabled = item.link === '#' ? 'style="pointer-events:none;opacity:0.4;"' : '';

    div.innerHTML = `
      ${imgHTML}
      <div class="project-body">
        <div class="project-tech">${item.tech}</div>
        <div class="project-title">${item.title}</div>
        <div class="project-desc">${item.desc}</div>
        <a href="${item.link}" target="_blank" rel="noopener" class="project-link" ${linkDisabled}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
          ${item.linkText}
        </a>
      </div>
    `;
    container.appendChild(div);
  });
  
  initSliders();
  observeReveal();
}

// ---- Slider functionality ----
function initSliders() {
  document.querySelectorAll('.slider-next').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sliderId = btn.getAttribute('data-slider');
      const slider = document.getElementById(sliderId);
      const container = slider.parentElement;
      const images = slider.querySelectorAll('img');
      const currentIndex = parseInt(container.getAttribute('data-current') || '0');
      const newIndex = (currentIndex + 1) % images.length;
      slider.style.transform = `translateX(-${newIndex * 100}%)`;
      container.setAttribute('data-current', newIndex);
      
      container.querySelectorAll('.slider-dot').forEach((dot, idx) => {
        dot.style.background = idx === newIndex ? 'white' : 'rgba(255,255,255,0.5)';
      });
    });
  });
  
  document.querySelectorAll('.slider-prev').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sliderId = btn.getAttribute('data-slider');
      const slider = document.getElementById(sliderId);
      const container = slider.parentElement;
      const images = slider.querySelectorAll('img');
      const currentIndex = parseInt(container.getAttribute('data-current') || '0');
      const newIndex = (currentIndex - 1 + images.length) % images.length;
      slider.style.transform = `translateX(-${newIndex * 100}%)`;
      container.setAttribute('data-current', newIndex);
      
      container.querySelectorAll('.slider-dot').forEach((dot, idx) => {
        dot.style.background = idx === newIndex ? 'white' : 'rgba(255,255,255,0.5)';
      });
    });
  });
  
  document.querySelectorAll('.slider-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const sliderId = dot.getAttribute('data-slider');
      const slider = document.getElementById(sliderId);
      const container = slider.parentElement;
      const index = parseInt(dot.getAttribute('data-index'));
      slider.style.transform = `translateX(-${index * 100}%)`;
      container.setAttribute('data-current', index);
      
      container.querySelectorAll('.slider-dot').forEach((d, idx) => {
        d.style.background = idx === index ? 'white' : 'rgba(255,255,255,0.5)';
      });
    });
  });
}

// ---- Full render ----
function renderAll() {
  applyTranslations();
  renderSkills();
  renderEducation();
  renderExperience();
  renderProjects();
  renderCourses();
}

// ---- Language toggle ----
document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'sv' ? 'en' : 'sv';
  localStorage.setItem('lang', currentLang);
  renderAll();
});

// =============================================
//  NAVBAR: scroll effect + active link
// =============================================
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// =============================================
//  HAMBURGER MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// =============================================
//  SCROLL REVEAL
// =============================================
function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// =============================================
//  INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  observeReveal();
});