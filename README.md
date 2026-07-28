# Mohammad Othman — Portfolio

Personlig portfoliohemsida byggd med ren HTML, CSS och JavaScript (inga ramverk).

## Snabbstart

Öppna `index.html` i en webbläsare — det är allt.  
För live-reload, kör en lokal server: `npx serve .` eller använd VS Code Live Server.

---

## Lägga till profilbild

1. Lägg din bild i mappen `images/` och döp den till `profile.jpg`
2. Öppna `index.html` och hitta `.avatar-img`
3. Bilden laddas automatiskt om den finns på rätt plats — annars visas ett silhuettikon

---

## Konfigurera EmailJS (för kontaktformuläret)

1. Registrera gratis konto på [emailjs.com](https://www.emailjs.com)
2. Skapa en Email Service (Gmail, Outlook, etc.)
3. Skapa en Email Template med variablerna:
   - `{{from_name}}` — avsändarens namn
   - `{{from_email}}` — avsändarens e-post
   - `{{message}}` — meddelandet
4. Öppna `js/contact.js` och ersätt:
   ```js
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   ```

---

## Lägga till fler projekt

Öppna `js/translations.js` och lägg till objekt i `projects.sv` och `projects.en`:

```js
{
  tech: "React · TypeScript",
  title: "Mitt nya projekt",
  desc: "Kort beskrivning av vad projektet gör.",
  link: "https://github.com/Mhmd-othm/repo-name",
  linkText: "Se på GitHub",
  placeholder: true   // sätt till false om du har en riktig bild
}
```

---

## Filstruktur

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── translations.js   ← all data + texter
│   ├── language.js       ← rendering + språkbyte + navbar
│   └── contact.js        ← EmailJS-integration
├── images/
│   └── profile.jpg       ← lägg till själv
└── README.md
```

---

## Funktioner

- ✅ Responsiv (mobil, surfplatta, desktop)
- ✅ Svenska / Engelska utan omladdning
- ✅ Smooth scroll + aktiv nav-markering
- ✅ Scroll reveal-animationer
- ✅ Kontaktformulär via EmailJS
- ✅ Hamburger-meny på mobil
- ✅ Respekterar `prefers-reduced-motion`
