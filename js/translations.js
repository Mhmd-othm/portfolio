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

    "proj.label":        "// projekt",
    "proj.title":        "Vad jag byggt",
    "proj.clickHint":    "🔍 Klicka för stor bild/video",
    "proj.lightboxHint": "⬅️ ➡️ Använd piltangenterna",
    "proj.readMore":     "Läs mer",
    "proj.playItch":     "Itch.io",
    "proj.viewGithub":   "GitHub",
    "proj.openInYoutube":"Öppna på YouTube",
    "proj.videoSlide":   "▶ Spela video",

    "modal.bloodPrincess.eyebrow":     "Megaflop Studios · BTH (DV1694)",
    "modal.bloodPrincess.title":       "Blood Princess",
    "modal.bloodPrincess.tagline":     "Snabbt närstridsspel i förstaperson med pareringar, dashing och blodstänk – byggt i en egenutvecklad C++/DirectX 11-motor.",
    "modal.bloodPrincess.playItch":    "🎮 Spela på Itch.io",
    "modal.bloodPrincess.viewGithub":  "Se kod på GitHub",
    "modal.bloodPrincess.videosTitle": "Projektvideor & Speldemo",
    "modal.bloodPrincess.video1Title": "Gameplay Trailer",
    "modal.bloodPrincess.video2Title": "Speldemo & Arenastrider",
    "modal.bloodPrincess.aboutTitle":  "Om spelet & Story",
    "modal.bloodPrincess.aboutP1":     "Blood Princess är ett högintensivt närstridsspel i förstaperson utvecklat av Megaflop Studios (sex civilingenjörsstudenter i spelteknik på Blekinge Tekniska Högskola) i kursen DV1694 Litet spelprojekt.",
    "modal.bloodPrincess.aboutP2":     "Spelaren antar rollen som en prinsessa som kämpar genom dödliga arenor för att rädda sin kidnappade katt Britt-Marie från vågor av goblins och skelettmonster. Spelet är inspirerat av Warhammer 40,000: Darktide och bygger på pareringar, snabba dashes, svärdsattacker och dynamiskt blodstänk.",
    "modal.bloodPrincess.engineTitle": "Egenutvecklad Spelmotor (C++ & DirectX 11)",
    "modal.bloodPrincess.engineP1":    "I stället för att använda färdiga motorer som Unity eller Unreal byggde teamet en hel spelmotor från grunden. Motorn har en modulär komponentbaserad arkitektur (ECS) som gjorde det möjligt att utveckla grafik, stridsmekanik och ljud parallellt.",
    "modal.bloodPrincess.f1":          "Deferred Rendering med Physically Based Rendering (PBR)-belysning",
    "modal.bloodPrincess.f2":          "Dynamiska skuggor, partikelsystem och blodprojektion på golv och ytor",
    "modal.bloodPrincess.f3":          "3D-ljud via XAudio2 och vektormatematik via DirectXMath",
    "modal.bloodPrincess.f4":          "glTF 2.0-modelläsning och skelettanimationer via tinygltf",
    "modal.bloodPrincess.f5":          "Fönster- och inputhantering med SDL, debuggränssnitt med Dear ImGui",
    "modal.bloodPrincess.scrumTitle":  "Agilt arbetssätt & BTH Gameport",
    "modal.bloodPrincess.scrumP1":     "Projektet drevs enligt Scrum i tvåveckorssprintar med morgonmöten, backlog i GitHub Projects och timestimering. Under BTH Gameport ställdes spelet ut för allmänheten där 88 % internt och 67 % av externa testare gav toppbetyg till spelets intensitet och stridskänsla.",
    "modal.bloodPrincess.galleryTitle": "Skärmdumpar från spelet",
    "modal.bloodPrincess.caption4":     "Story: Katten Britt-Marie kidnappas av trollkarlen",
    "modal.bloodPrincess.caption3":     "Pareringsmekanik & gyllene träffeffekt",
    "modal.bloodPrincess.caption1":     "Arenastrid mot goblins & blodprojektion",
    "modal.bloodPrincess.caption2":     "Goblin-fiender i attackformation",
    "modal.bloodPrincess.caption5":     "Skelettfiender & svärdsstrider",
    "modal.bloodPrincess.teamTitle":   "Team & Kollegor",
    "modal.bloodPrincess.teamIntro":   "Spelet utvecklades av sex studenter på civilingenjörsprogrammet i spelteknik vid BTH (klicka för GitHub):",
    "modal.close":                     "Stäng",

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

    "proj.label":        "// projects",
    "proj.title":        "What I've built",
    "proj.clickHint":    "🔍 Click for full image/video",
    "proj.lightboxHint": "⬅️ ➡️ Use arrow keys",
    "proj.readMore":     "Read more",
    "proj.playItch":     "Itch.io",
    "proj.viewGithub":   "GitHub",
    "proj.openInYoutube":"Watch on YouTube",
    "proj.videoSlide":   "▶ Play video",

    "modal.bloodPrincess.eyebrow":     "Megaflop Studios · BTH (DV1694)",
    "modal.bloodPrincess.title":       "Blood Princess",
    "modal.bloodPrincess.tagline":     "Fast-paced first-person melee combat with parrying, dashing, and visceral blood decals – built in a custom C++/DirectX 11 engine.",
    "modal.bloodPrincess.playItch":    "🎮 Play on Itch.io",
    "modal.bloodPrincess.viewGithub":  "View Source on GitHub",
    "modal.bloodPrincess.videosTitle": "Project Videos & Gameplay Demo",
    "modal.bloodPrincess.video1Title": "Gameplay Trailer",
    "modal.bloodPrincess.video2Title": "Gameplay Demo & Arena Battles",
    "modal.bloodPrincess.aboutTitle":  "About the Game & Lore",
    "modal.bloodPrincess.aboutP1":     "Blood Princess is a high-intensity first-person melee combat game created by Megaflop Studios (six Master of Science in Game Technology students at Blekinge Institute of Technology) during course DV1694 Small Game Project.",
    "modal.bloodPrincess.aboutP2":     "Players take on the role of a princess venturing into dangerous combat arenas to rescue her kidnapped cat Britt-Marie from hordes of goblins and skeletal monsters. Inspired by Warhammer 40,000: Darktide, combat emphasizes precise timing, parrying, rapid dashes, heavy sword swings, and dynamic blood decals.",
    "modal.bloodPrincess.engineTitle": "Custom Game Engine (C++ & DirectX 11)",
    "modal.bloodPrincess.engineP1":    "Rather than using Unity or Unreal, the team authored a complete 3D game engine from scratch. An Entity Component System (ECS) architecture enabled modular and concurrent development across graphics, combat systems, and audio.",
    "modal.bloodPrincess.f1":          "Deferred Rendering with Physically Based Rendering (PBR) lighting",
    "modal.bloodPrincess.f2":          "Dynamic shadow mapping, particle systems, and blood projection on floors/surfaces",
    "modal.bloodPrincess.f3":          "3D spatial audio with XAudio2 and vector math with DirectXMath",
    "modal.bloodPrincess.f4":          "glTF 2.0 model and skeletal animation loading via tinygltf",
    "modal.bloodPrincess.f5":          "Window and input handling with SDL, plus runtime debug tooling with Dear ImGui",
    "modal.bloodPrincess.scrumTitle":  "Agile Workflow & BTH Gameport",
    "modal.bloodPrincess.scrumP1":     "The project followed Scrum with two-week sprints, physical daily standups, backlog management in GitHub Projects, and hourly task estimations. Showcased at BTH Gameport where 88% internal and 67% external attendees praised the combat intensity and feel.",
    "modal.bloodPrincess.galleryTitle": "In-Game Screenshots",
    "modal.bloodPrincess.caption4":     "Lore: Cat Britt-Marie captured by the wizard",
    "modal.bloodPrincess.caption3":     "Parry mechanic & golden visual impact",
    "modal.bloodPrincess.caption1":     "Arena combat with goblins & blood decals",
    "modal.bloodPrincess.caption2":     "Goblin horde in attack formation",
    "modal.bloodPrincess.caption5":     "Skeleton combat & sword strikes",
    "modal.bloodPrincess.teamTitle":   "Team & Colleagues",
    "modal.bloodPrincess.teamIntro":   "Developed collaboratively by six Game Technology students at BTH (click for GitHub):",
    "modal.close":                     "Close",

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
  "C++", "Python", "HLSL", "DirectX 11", "Scrum", "Office Apps",
  "Kundservice", "Försäljning", "Kreativ", "Tidshantering",
  "Teamwork", "Arbeta under press", "Programmering",
  "Engelska", "Svenska", "Arabiska", "Kurdiska"
];

const skillsEN = [
  "C++", "Python", "HLSL", "DirectX 11", "Scrum", "Office Apps",
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
      status: "Slutförd",
      desc: "En avancerad DirectX 11-kurs för C++-utvecklare som vill bygga högpresterande spelmotorer och bemästra realtids-3D-grafik. Täcker belysning, shaders, tessellation och hela grafikkretsloppet, med nya veckovideor som förstärker varje koncept.",
      certificate: "images/certificates/cpp_certificate.pdf",
      certificateImg: "images/certificates/cpp_certificate.jpg",
      link: "https://www.udemy.com/certificate/xxxxx"
    }
  ],
  en: [
    {
      title: "Advanced game programming with DirectX 11",
      platform: "Udemy",
      instructor: "Canberk Pitirli",
      date: "2025",
      status: "Done",
      desc: "An advanced DirectX 11 course for C++ developers who want to build high‑performance game engines and master real‑time 3D graphics. Covers lighting, shaders, tessellation, and the full graphics pipeline, with new weekly videos reinforcing each concept.",
      certificate: "images/certificates/cpp_certificate.pdf",
      certificateImg: "images/certificates/cpp_certificate.jpg",
      link: "https://www.udemy.com/certificate/xxxxx"
    }
  ]
};

const bloodPrincessTeam = {
  sv: [
    { name: "Emil Winroth", role: "Product Owner & Utvecklare", github: "https://github.com/Winroth13" },
    { name: "Johan Wisell", role: "Scrum Master & Utvecklare", github: "https://github.com/JoHaaaan" },
    { name: "Johannled", role: "Utvecklare", github: "https://github.com/Johannled" },
    { name: "castur1", role: "Utvecklare", github: "https://github.com/castur1" },
    { name: "KallanKallan1", role: "Utvecklare", github: "https://github.com/KallanKallan1" },
    { name: "Mohammad Othman", role: "Utvecklare (Portfolio-ägare)", github: "https://github.com/Mhmd-othm" }
  ],
  en: [
    { name: "Emil Winroth", role: "Product Owner & Developer", github: "https://github.com/Winroth13" },
    { name: "Johan Wisell", role: "Scrum Master & Developer", github: "https://github.com/JoHaaaan" },
    { name: "Johannled", role: "Developer", github: "https://github.com/Johannled" },
    { name: "castur1", role: "Developer", github: "https://github.com/castur1" },
    { name: "KallanKallan1", role: "Developer", github: "https://github.com/KallanKallan1" },
    { name: "Mohammad Othman", role: "Developer (Portfolio Owner)", github: "https://github.com/Mhmd-othm" }
  ]
};

const projects = {
  sv: [
    {
      tech: "C++ · DirectX 11 · HLSL · SDL · ECS · Scrum",
      title: "Blood Princess",
      desc: "Ett snabbt närstridsspel i förstaperson utvecklat av Megaflop Studios (6 studenter vid BTH). Byggt med en egen spelmotor i C++ och DirectX 11 med Deferred Rendering, PBR-ljus, partiklar och blodsystem. Parera, dasha och rädda katten Britt-Marie från trollkarlen!",
      github: "https://github.com/Winroth13/Blood-Princess",
      itch: "https://reflexentertainment.itch.io/blood-princess",
      hasDetails: true,
      media: [
        {
          type: "video",
          youtubeId: "kO2K_o1HW5k",
          title: "Trailer – Blood Princess",
          thumb: "https://img.youtube.com/vi/kO2K_o1HW5k/hqdefault.jpg"
        },
        {
          type: "video",
          youtubeId: "652-3XnLyUo",
          title: "Gameplay Demo – Blood Princess",
          thumb: "https://img.youtube.com/vi/652-3XnLyUo/hqdefault.jpg"
        },
        {
          type: "image",
          url: "Projects/bloodPrincess/bloodPrincess4.png",
          title: "Story / Intro – Rädda katten Britt-Marie"
        },
        {
          type: "image",
          url: "Projects/bloodPrincess/bloodPrincess3.png",
          title: "Parering & träffeffekt"
        },
        {
          type: "image",
          url: "Projects/bloodPrincess/bloodPrincess1.png",
          title: "Arenastrid & blodstänk"
        },
        {
          type: "image",
          url: "Projects/bloodPrincess/bloodPrincess2.png",
          title: "Goblin-fiender i arenan"
        },
        {
          type: "image",
          url: "Projects/bloodPrincess/bloodPrincess5.png",
          title: "Skelett-fiender & svärdshugg"
        }
      ]
    },
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
      tech: "C++ · DirectX 11 · HLSL · SDL · ECS · Scrum",
      title: "Blood Princess",
      desc: "A fast-paced first-person melee combat game developed by Megaflop Studios (6 students at BTH). Built with a custom C++/DirectX 11 engine featuring Deferred Rendering, PBR lighting, particles, and blood decals. Parrying, dashing, and arena combat to rescue the cat Britt-Marie from the wizard!",
      github: "https://github.com/Winroth13/Blood-Princess",
      itch: "https://reflexentertainment.itch.io/blood-princess",
      hasDetails: true,
      media: [
        {
          type: "video",
          youtubeId: "kO2K_o1HW5k",
          title: "Trailer – Blood Princess",
          thumb: "https://img.youtube.com/vi/kO2K_o1HW5k/hqdefault.jpg"
        },
        {
          type: "video",
          youtubeId: "652-3XnLyUo",
          title: "Gameplay Demo – Blood Princess",
          thumb: "https://img.youtube.com/vi/652-3XnLyUo/hqdefault.jpg"
        },
        {
          type: "image",
          url: "Projects/bloodPrincess/bloodPrincess4.png",
          title: "Story / Intro – Rescuing cat Britt-Marie"
        },
        {
          type: "image",
          url: "Projects/bloodPrincess/bloodPrincess3.png",
          title: "Parry & golden hit effect"
        },
        {
          type: "image",
          url: "Projects/bloodPrincess/bloodPrincess1.png",
          title: "Arena combat & blood decals"
        },
        {
          type: "image",
          url: "Projects/bloodPrincess/bloodPrincess2.png",
          title: "Goblin horde in the arena"
        },
        {
          type: "image",
          url: "Projects/bloodPrincess/bloodPrincess5.png",
          title: "Skeleton combat & sword strikes"
        }
      ]
    },
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
