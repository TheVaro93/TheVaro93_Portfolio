const PAGE_TRANSLATIONS = {
    index: {
        en: {
            heroSubtitle: "Here is my portfolio! What score out of 10? (✧ω✧)",
            aboutTitle: "About me (⌒_⌒/)",
            aboutText: "I have always been interested in how things worked on a computer. First through video games on console then on the family PC, then through phones, tech and finally computers. When I was about 10 years old, I wanted to understand how all of this worked and I finally pulled my first computer out of the closet! It was an old Dell Inspiron from 2006 running Windows 7 (which I still have) that I installed Ubuntu on, because I was told it would boost the computer. Me, who could do anything to get it to start in less than 3 minutes, I started tinkering with it. Then, much later (I'd say 4 years after), I decided to take an interest in code and create my own tools. That's when I discovered a whole different universe, into which I dove head first! (＾ｖ＾)",
            skillsTitle: "Skills",
            skillsMastered: "Mastered ಥ‿ಥ",
            skillsLearning: "Learning (x_x)",
            skillsWant: "What I want to learn щ(ºДºщ)",
            wantedTitle: "Projects I want to build (ᗒᗨᗕ)",
            wantedText: "An open-source application to manage home automation with Arduino or Raspberry Pi, with the simplicity of Google Home but without spying and customization limits.",
            currentTitle: "Current projects ヽ(ﾟ〇ﾟ)ﾉ",
            currentText: "BonkDrop: a platform currently in development to share content quickly and improve in real-world front-end and back-end conditions. I manage a server, a front-end, a database and storage. ٩(^ᴗ^)۶",
            currentLink: "See BonkDrop",
            archivedTitle: "Archived and finished projects ¯＼_(ツ)_/¯",
            archivedText: "I put all my finished and archived projects here so I can index and share them easily. Feel free to take a look and tell me what you think! ^^",
            archivedLink: "See my projects",
            gridTitle: "My GitHub grid (¬‿¬)",
            gridAlt: "GitHub contribution grid for TheVaro93",
            license: "© 2026 TheVaro93 - MIT licensed content - Please do not reuse my work without credit :P",
            pageTitle: "TheVaro93 Portfolio"
        },
        fr: {
            heroSubtitle: "Voici mon portfolio ! Combien, sur 10 ? (✧ω✧)",
            aboutTitle: "À propos de moi (⌒_⌒/)",
            aboutText: "J'ai toujours été intéressé par ce qui fonctionnait avec un ordinateur. Tout d'abord les jeux vidéo sur console puis sur le pc familial, ensuite par les téléphones, la tech et enfin les ordinateurs. Vers mes 10 ans, j'ai voulu comprendre comment fonctionnait tout ça et j'ai finalement attrapé dans les placards mon premier ordinateur ! C'etait un vieux Dell Inspiron de 2006 sous Windows 7 (que j'ai toujours) que j'ai mis sur ubuntu, car on m'a dit que ca allait booster l'ordi. Moi, qui pouvais tout faire pour que celui ci puisse démarrer en moins de 3 minutes, je me suis mis à le bidouiller. Puis, beaucoup plus tard (je dirai 4 ans après), j'ai décidé de m'intéresser au code et à créer mes propes outils. C'est là que j'ai découvert un tout autre univers, dans lequel j'ai sauté la tête la première ! (＾ｖ＾)",
            skillsTitle: "Compétences",
            skillsMastered: "Maîtrisé ಥ‿ಥ",
            skillsLearning: "En apprentissage (x_x)",
            skillsWant: "Que je voudrais apprendre щ(ºДºщ)",
            wantedTitle: "Projets que je veux faire (ᗒᗨᗕ)",
            wantedText: "Une application open-source pour gérer la domotique de sa maison avec du Arduino ou du Rasbperry Pi, avec la simplicité de Google Home mais sans l'espionnage et les limitations de customisation.",
            currentTitle: "Projets en cours ヽ(ﾟ〇ﾟ)ﾉ",
            currentText: "BonkDrop: une plateforme en cours de développement pour partager des contenus rapidement et progresser en conditions réelles sur le front et le back. Je gère un serveur, un front, une base de donnée et du stockage. ٩(^ᴗ^)۶",
            currentLink: "Voir BonkDrop",
            archivedTitle: "Projets archivés et terminés ¯＼_(ツ)_/¯",
            archivedText: "Je mets ici tous mes projets terminés et archivés, pour pouvoir les indexer facilement et les partager. N'hésiter pas à y jeter un coup d'oeuil et de me donner votre avis ! ^^",
            archivedLink: "Voir mes projets",
            gridTitle: "Ma grille GitHub (¬‿¬)",
            gridAlt: "Grille de contributions GitHub de TheVaro93",
            license: "© 2026 TheVaro93 - Contenu sous licence MIT - Merci de ne pas me voler mon travail sans me créditer :P",
            pageTitle: "TheVaro93 Portfolio"
        }
    },
    projets: {
        en: {
            heroSubtitle: "Here are my projects! What score out of 10? (✧ω✧)",
            backHome: "Back to home",
            projectsTitle: "My finished and archived projects",
            panelDesc: "- Panel_Minecraft: A moderation panel with a UI to manage a self-hosted Minecraft Bedrock dedicated server. A simple but useful project for me and my friends... and great practice too! :]",
            panelLink: "View Minecraft panel",
            license: "© 2026 TheVaro93 - MIT licensed content - Please do not reuse my work without credit :P",
            pageTitle: "Projects | TheVaro93 Portfolio"
        },
        fr: {
            heroSubtitle: "Voici mes projets ! Combien, sur 10 ? (✧ω✧)",
            backHome: "Retour accueil",
            projectsTitle: "Mes projets terminés et archivés",
            panelDesc: "- <strong>Panel_Minecraft</strong> : Un pannel de modération pour gérer avec une UI un serveur tournant en auto-hébergé pour les \"dicated server\" Minecraft Bedrock; Un projet simple mais utile pour moi et mes amis... Et pour m'entrainer !! :]",
            panelLink: "Voir le pannel Minecraft",
            license: "© 2026 TheVaro93 - Contenu sous licence MIT - Merci de ne pas me voler mon travail sans me créditer :P",
            pageTitle: "Projets | TheVaro93 Portfolio"
        }
    }
};

function getPageKey() {
    const path = window.location.pathname.toLowerCase();
    return path.includes("projets") ? "projets" : "index";
}

function captureOriginalState() {
    const original = {
        text: {},
        html: {},
        alt: {},
        pageTitle: document.title
    };

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (key && !Object.prototype.hasOwnProperty.call(original.text, key)) {
            original.text[key] = element.textContent;
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const key = element.getAttribute("data-i18n-html");
        if (key && !Object.prototype.hasOwnProperty.call(original.html, key)) {
            original.html[key] = element.innerHTML;
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const key = element.getAttribute("data-i18n-alt");
        if (key && !Object.prototype.hasOwnProperty.call(original.alt, key)) {
            original.alt[key] = element.getAttribute("alt") || "";
        }
    });

    return original;
}

function restoreOriginalState(original) {
    document.documentElement.lang = "fr";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (key && Object.prototype.hasOwnProperty.call(original.text, key)) {
            element.textContent = original.text[key];
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const key = element.getAttribute("data-i18n-html");
        if (key && Object.prototype.hasOwnProperty.call(original.html, key)) {
            element.innerHTML = original.html[key];
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const key = element.getAttribute("data-i18n-alt");
        if (key && Object.prototype.hasOwnProperty.call(original.alt, key)) {
            element.setAttribute("alt", original.alt[key]);
        }
    });

    document.title = original.pageTitle;
}

function setActiveLanguageButton(lang) {
    document.querySelectorAll(".lang-btn").forEach((button) => {
        const isActive = button.getAttribute("data-lang") === lang;
        button.classList.toggle("active", isActive);
    });
}

function applyLanguage(lang, original) {
    if (lang === "fr") {
        restoreOriginalState(original);
        setActiveLanguageButton("fr");
        localStorage.setItem("siteLanguage", "fr");
        return;
    }

    const pageKey = getPageKey();
    const dictionary = PAGE_TRANSLATIONS[pageKey]?.en;

    if (!dictionary) {
        return;
    }

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (key && Object.prototype.hasOwnProperty.call(dictionary, key)) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const key = element.getAttribute("data-i18n-html");
        if (key && Object.prototype.hasOwnProperty.call(dictionary, key)) {
            element.innerHTML = dictionary[key];
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const key = element.getAttribute("data-i18n-alt");
        if (key && Object.prototype.hasOwnProperty.call(dictionary, key)) {
            element.setAttribute("alt", dictionary[key]);
        }
    });

    if (dictionary.pageTitle) {
        document.title = dictionary.pageTitle;
    }

    setActiveLanguageButton("en");

    localStorage.setItem("siteLanguage", "en");
}

function initLanguageSwitcher() {
    const original = captureOriginalState();
    const storedLang = localStorage.getItem("siteLanguage");
    const initialLang = storedLang === "en" ? "en" : "fr";

    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const lang = button.getAttribute("data-lang");
            if (lang === "fr" || lang === "en") {
                applyLanguage(lang, original);
            }
        });
    });

    applyLanguage(initialLang, original);
}

document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
