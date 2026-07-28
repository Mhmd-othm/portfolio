const translations = {
  sv: {
    "nav.about":      "Om mig",
    "nav.education":  "Utbildning",
    "nav.experience": "Erfarenhet",
    "nav.projects":   "Projekt",
    "nav.contact":    "Kontakt",

    "hero.eyebrow":   "Civilingenjör · Spelteknik · BTH",
    "hero.tagline":   "Jag bygger saker — från 3D-renderare till karriärer. Alltid redo för nästa utmaning.",
    "hero.cta1":      "Se mina projekt",
    "hero.cta2":      "Kontakta mig",
    "hero.photoLabel":"Lägg till profile.jpg",

    "about.label":      "// om mig",
    "about.title":      "Vem är Mohammad?",
    "about.p1":         "Motiverad civilingenjörsstudent i spelteknik på BTH med ett brinnande intresse för grafikteknik, programmering och att lösa komplexa problem. Jag trivs med att kombinera teknisk noggrannhet med kreativt tänkande.",
    "about.p2":         "Utöver studierna har jag bred arbetslivserfarenhet – från ledarskap på McDonald's till teknisk support på Tele2 – vilket givit mig starka kommunikations- och teamworkfärdigheter.",
    "about.skillsTitle":"Kompetenser",
    "about.langSwedish":   "🇸🇪 Svenska",
    "about.langEnglish":   "🇬🇧 Engelska", 
    "about.langArabic":    "🇸🇦 Arabiska",
    "about.langKurdish":   "🏔️ Kurdiska",
    "edu.label": "// utbildning",
    "edu.title": "Akademisk bakgrund",

    "exp.label": "// erfarenhet",
    "exp.title": "Arbetslivserfarenhet",

    "proj.label":      "// projekt",
    "proj.title":      "Vad jag byggt",
    "proj.clickHint":  "🔍 Klicka på bild",
    "proj.lightboxHint": "⬅️ ➡️ Använd piltangenterna",
    "nav.courses":       "Kurser",
    "courses.label":     "// kurser & certifikat",
    "courses.title":     "Fortbildning",
    "courses.viewCert":  "Visa intyg", 

    "contact.label":           "// kontakt",
    "contact.title":           "Säg hej",
    "contact.intro":           "Har du ett projekt, en idé eller vill bara höra av dig? Fyll i formuläret så återkommer jag snart.",
    "contact.nameLabel":       "Namn",
    "contact.namePlaceholder": "Ditt namn",
    "contact.emailLabel":      "E-post",
    "contact.emailPlaceholder":"din@email.com",
    "contact.messageLabel":    "Meddelande",
    "contact.messagePlaceholder":"Vad vill du säga?",
    "contact.send":            "Skicka meddelande",

    "contact.referencesNote": "📌 Vid frågor om referenser – fråga bara!",
    "footer.text": "© 2026 Mohammad Othman — Byggt med HTML, CSS & JavaScript",
  },

  en: {
    "nav.about":      "About",
    "nav.education":  "Education",
    "nav.experience": "Experience",
    "nav.projects":   "Projects",
    "nav.contact":    "Contact",

    "hero.eyebrow":   "Computer Science Engineer · Game Technology · BTH",
    "hero.tagline":   "I build things — from 3D renderers to careers. Always ready for the next challenge.",
    "hero.cta1":      "See my projects",
    "hero.cta2":      "Get in touch",
    "hero.photoLabel":"Add profile.jpg",

    "about.label":      "// about me",
    "about.title":      "Who is Mohammad?",
    "about.p1":         "Motivated computer science engineering student specialising in game technology at BTH, with a deep passion for graphics programming, real-time rendering, and solving complex problems. I enjoy blending technical rigour with creative thinking.",
    "about.p2":         "Beyond my studies, I have broad professional experience — from team leadership at McDonald's to technical support at Tele2 — giving me strong communication and teamwork skills.",
    "about.skillsTitle":"Skills",
    "about.langSwedish":   "🇸🇪 Swedish",
    "about.langEnglish":   "🇬🇧 English", 
    "about.langArabic":    "🇸🇦 Arabic",
    "about.langKurdish":   "🏔️ Kurdish",
    "edu.label": "// education",
    "edu.title": "Academic background",

    "exp.label": "// experience",
    "exp.title": "Work experience",

    "proj.label":      "// projects",
    "proj.title":      "What I've built",
    "proj.clickHint":  "🔍 Click on image",
    "proj.lightboxHint": "⬅️ ➡️ Use arrow keys",

    "nav.courses":       "Courses",
    "courses.label":     "// courses & certificates",
    "courses.title":     "Continuing Education",
    "courses.viewCert":  "View certificate",
    "contact.label":           "// contact",
    "contact.title":           "Say hello",
    "contact.intro":           "Have a project, an idea, or just want to get in touch? Fill in the form and I'll get back to you soon.",
    "contact.nameLabel":       "Name",
    "contact.namePlaceholder": "Your name",
    "contact.emailLabel":      "Email",
    "contact.emailPlaceholder":"you@email.com",
    "contact.messageLabel":    "Message",
    "contact.messagePlaceholder":"What would you like to say?",
    "contact.send":            "Send message",

    "contact.referencesNote": "📌 For questions about references – just ask!",
    "footer.text": "© 2026 Mohammad Othman — Built with HTML, CSS & JavaScript",
  }
};

// ---- DATA ----

const skills = [
  "C++", "Python", "HLSL", "DirectX 11", "Office Apps",
  "Kundservice", "Försäljning", "Kreativ", "Tidshantering",
  "Teamwork", "Arbeta under press", "Programmering",
  "Engelska", "Svenska", "Arabiska", "Kurdiska"
];

const skillsEN = [
  "C++", "Python", "HLSL", "DirectX 11", "Office Apps",
  "Customer Service", "Sales", "Creative", "Time Management",
  "Teamwork", "Work Under Pressure", "Programming",
  "English", "Swedish", "Arabic", "Kurdish"
];

const education = {
  sv: [
    {
      period: "2024 – 2029 (pågående)",
      title: "Civilingenjör i spelteknik",
      school: "Blekinge Tekniska Högskola",
      desc: "Inriktning mot realtidsgrafik, spelmotor-arkitektur och avancerad programmering. Snittbetyg: B."
    },
    {
      period: "2023 – 2024",
      title: "Tekniskt basår",
      school: "Blekinge Tekniska Högskola",
      desc: "Förberedande ettårsprogram med fokus på matematik, fysik och introduktion till programmering. Betyg: B."
    },
    {
      period: "2019 – 2022",
      title: "Bygg och anläggning (Snickare)",
      school: "Alleskolan",
      desc: "Praktisk utbildning inom konstruktion och hantverk med godkänt betyg."
    }
  ],
  en: [
    {
      period: "2024 – 2029 (ongoing)",
      title: "Master of Science in Game Technology",
      school: "Blekinge Institute of Technology",
      desc: "Focus on real-time graphics, game engine architecture, and advanced programming. Grade average: B."
    },
    {
      period: "2023 – 2024",
      title: "Technical Foundation Year",
      school: "Blekinge Institute of Technology",
      desc: "Preparatory year covering mathematics, physics, and introductory programming. Grade: B."
    },
    {
      period: "2019 – 2022",
      title: "Construction & Civil Engineering (Carpentry)",
      school: "Alleskolan",
      desc: "Practical training in construction and craftsmanship. Passed with distinction."
    }
  ]
};

const experience = {
  sv: [
    {
      period: "Aug 2025 – Pågående",
      title: "Lärarassistent / Gruppledare",
      company: "Blekinge Tekniska Högskola",
      location: "Karlskrona",
      desc: "Håller räkneövningar och handledning i Analys 1, Analys 2 och Linjär algebra. Ansvarar för att rätta tentor, ge återkoppling till studenter och stötta dem i deras förståelse av matematiska koncept."
    },
    {
      period: "Mars 2025 – Juni 2026",
      title: "Taxiförare",
      company: "Rosen Taxi",
      location: "Karlskrona",
      desc: "Ansvarig för säker och effektiv persontransport. Planerade rutter, hanterade bokningar och levererade hög kundnöjdhet i en servicekrävande roll."
    },
    {
      period: "Jan 2023 – Aug 2023",
      title: "Teknisk support & säljare",
      company: "Tele2",
      location: "Eskilstuna",
      desc: "Felsökte och löste bredbandsproblem för privatkunder. Sålde Tele2-tjänster med fokus på matchning av kundens behov och hög konverteringsgrad."
    },
    {
      period: "Juni 2020 – Jan 2026",
      title: "Arbetsledare",
      company: "McDonald's",
      location: "Katrineholm",
      desc: "Ledde team om upp till 10 personer i en snabbrörlig miljö. Ansvarade för schemaläggning, upplärning av nyanställda och säkerställande av servicekvalitet.",
      wotmImage: "images/WOTM.jpeg"
    },
    {
      period: "Juni 2019 – Juli 2019",
      title: "Köksassistent (sommar)",
      company: "Lövåsgården",
      location: "Katrineholm",
      desc: "Stöttade kökspersonalen med alla förekommande uppgifter på ett äldreboende, inklusive matlagning, diskning och städning."
    }
  ],
  en: [
    {
      period: "Aug 2025 – Present",
      title: "Teaching Assistant / Group Leader",
      company: "Blekinge Institute of Technology",
      location: "Karlskrona",
      desc: "Conducts exercise sessions and tutoring in Calculus 1, Calculus 2 and Linear Algebra. Responsible for grading exams, providing feedback to students and supporting their understanding of mathematical concepts."
    },
    {
      period: "Mar 2025 – Jun 2026",
      title: "Taxi Driver",
      company: "Rosen Taxi",
      location: "Karlskrona",
      desc: "Responsible for safe and efficient passenger transport. Planned routes, handled bookings, and delivered high customer satisfaction in a service-oriented role."
    },
    {
      period: "Jan 2023 – Aug 2023",
      title: "Technical Support & Sales",
      company: "Tele2",
      location: "Eskilstuna",
      desc: "Diagnosed and resolved broadband issues for residential customers. Sold Tele2 services with a focus on matching customer needs and achieving strong conversion rates."
    },
    {
      period: "Jun 2020 – Jan 2026",
      title: "Team Leader",
      company: "McDonald's",
      location: "Katrineholm",
      desc: "Led teams of up to 10 people in a fast-paced environment. Responsible for scheduling, training new staff, and maintaining service quality standards.",
      wotmImage: "images/WOTM.jpeg"
    },
    {
      period: "Jun 2019 – Jul 2019",
      title: "Kitchen Assistant (Summer)",
      company: "Lövåsgården",
      location: "Katrineholm",
      desc: "Supported kitchen staff with all tasks at a care home for the elderly, including cooking, dishwashing, and cleaning."
    }
  ]
};

const courses = {
  sv: [
    {
      title: "Avancerad spelprogrammering med DirectX 11",
      platform: "Udemy",
      instructor: "Canberk Pitirli",
      date: "2025",
      status: "Pågående",
      desc: "En avancerad DirectX 11-kurs för C++-utvecklare som vill bygga högpresterande spelmotorer och bemästra realtids-3D-grafik. Täcker belysning, shaders, tessellation och hela grafikkretsloppet, med nya veckovideor som förstärker varje koncept.",
      certificate: "images/certificates/cpp_certificate.pdf",  // Länk till intyget
      certificateImg: "images/certificates/cpp_certificate.jpg", // Eller bild på intyget
      link: "https://www.udemy.com/certificate/xxxxx"  // Länk till verifierbart certifikat
    }
  ],
  en: [
    {
      title: "Advanced game programming with DirectX 11",
      platform: "Udemy",
      instructor: "Canberk Pitirli",
      date: "2025",
      status: "Ongoing",
      desc: "An advanced DirectX 11 course for C++ developers who want to build high‑performance game engines and master real‑time 3D graphics. Covers lighting, shaders, tessellation, and the full graphics pipeline, with new weekly videos reinforcing each concept.",
      certificate: "images/certificates/cpp_certificate.pdf",
      certificateImg: "images/certificates/cpp_certificate.jpg",
      link: "https://www.udemy.com/certificate/xxxxx"
    }
  ]
};

const projects = {
  sv: [
    {
      tech: "C++ · HLSL · DirectX 11 · ImGui",
      title: "DX11 3D Renderer",
      desc: "Avancerad 3D-renderare byggd från grunden med deferred rendering, GPU-partiklar, dynamiska reflektioner, shadow maps och tessellation. ImGui-kontroller möjliggör justering av ljus och effekter i realtid.",
      link: "https://github.com/Mhmd-othm/DX11_Project_2",
      linkText: "Se på GitHub",
      images: [
        "Projects/projectOne/projectOne1.png",
        "Projects/projectOne/projectOne2.png",
        "Projects/projectOne/projectOne3.png",
        "Projects/projectOne/projectOne4.png",
        "Projects/projectOne/projectOne5.png",
        "Projects/projectOne/projectOne6.png",
        "Projects/projectOne/projectOne7.png"
      ],
      placeholder: false
    },
    {
      tech: "C++ · Raylib · ImGui",
      title: "Fysikbaserad flygsimulator",
      desc: "Avancerad 3D-flygsimulator byggd från grunden med realistisk fysik, dynamiskt vindsystem, atmosfärisk modellering och realtids-HUD. Interaktiva kontroller möjliggör full manövrering av flygplanet med gas, pitch, roll och gir.",
      link: "https://github.com/Mhmd-othm/Physics-based-flight-simulator",
      linkText: "Se på GitHub",
      images: [                                   // Bild(er) – lägg till i mappen
        "Projects/projectTwo/projectTwo1.png",
        "Projects/projectTwo/projectTwo2.png",
        "Projects/projectTwo/projectTwo3.png"
      ],
      placeholder: false,
      upcoming: true
    },
    {
      tech: "Python · NumPy · Matplotlib",
      title: "Grafisk Algebrakalkylator",
      desc: "Interaktivt Python-program för vektor- och planberäkningar i 3D. Visualiserar addition, subtraktion, skalärprodukt, vektorprodukt och projektion med matplotlib. Inkluderar stöd för bråktal och vektorlagring.",
      link: "https://github.com/Mhmd-othm/Graph-calculator",
      linkText: "Se på GitHub",
      images: [
        "Projects/projectThree/projectThree1.png",
        "Projects/projectThree/projectThree2.png",
        "Projects/projectThree/projectThree3.png",
        "Projects/projectThree/projectThree4.png",
        "Projects/projectThree/projectThree5.png",
        "Projects/projectThree/projectThree6.png"
      ],
      placeholder: false
    }
  ],
  en: [
    {
      tech: "C++ · HLSL · DirectX 11 · ImGui",
      title: "DX11 3D Renderer",
      desc: "Advanced 3D renderer built from scratch featuring deferred rendering, GPU particles, dynamic reflections, shadow maps, and tessellation. ImGui controls allow real-time adjustment of lights and effects.",
      link: "https://github.com/Mhmd-othm/DX11_Project_2",
      linkText: "View on GitHub",
      images: [
        "Projects/projectOne/projectOne1.png",
        "Projects/projectOne/projectOne2.png",
        "Projects/projectOne/projectOne3.png",
        "Projects/projectOne/projectOne4.png",
        "Projects/projectOne/projectOne5.png",
        "Projects/projectOne/projectOne6.png",
        "Projects/projectOne/projectOne7.png"
      ],
      placeholder: false
    },
    {
      tech: "C++ · Raylib · ImGui",
      title: "Physics-based-flight-simulator",
      desc: "Advanced 3D flight simulator built from scratch featuring realistic physics, dynamic wind system, atmospheric modeling, and real-time HUD. Interactive controls allow full aircraft maneuverability with throttle, pitch, roll, and yaw.",
      link: "https://github.com/Mhmd-othm/Physics-based-flight-simulator",
      linkText: "View on GitHub",
      images: [                                   
        "Projects/projectTwo/projectTwo1.png",
        "Projects/projectTwo/projectTwo2.png",
        "Projects/projectTwo/projectTwo3.png"
      ],
      placeholder: false,
      upcoming: true
    },
    {
      tech: "Python · NumPy · Matplotlib",
      title: "Graphical Algebra Calculator",
      desc: "Interactive Python program for 3D vector and plane calculations. Visualizes addition, subtraction, dot product, cross product, and projection using matplotlib. Includes fraction support and vector storage.",
      link: "https://github.com/Mhmd-othm/Graph-calculator",
      linkText: "View on GitHub",
      images: [
        "Projects/projectThree/projectThree1.png",
        "Projects/projectThree/projectThree2.png",
        "Projects/projectThree/projectThree3.png",
        "Projects/projectThree/projectThree4.png",
        "Projects/projectThree/projectThree5.png",
        "Projects/projectThree/projectThree6.png",
        "Projects/projectThree/projectThree7.png"
      ],
      placeholder: false
    }
  ]
};