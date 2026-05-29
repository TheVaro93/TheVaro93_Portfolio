const PAGE_TRANSLATIONS = {
    index: {
        en: {
            heroSubtitle: "Here is my portfolio! How much out of 10? (✧ω✧)",
            aboutTitle: "About me (⌒_⌒/)",
            aboutText: "I've always been interested in anything that worked with a computer. First video games on consoles, then on the family PC, followed by phones, tech, and finally computers. Around the age of 10, I wanted to understand how all of this worked, and I finally grabbed my very first computer from the closets! It was an old 2006 Dell Inspiron running Windows 7 (which I still have) that I switched to Ubuntu because someone told me it would boost the computer. Me, being ready to do anything just so it could boot in less than 3 minutes, started tweaking it. Then, much later (I'd say 4 years later), I decided to look into coding and creating my own tools. That's when I discovered a whole new universe, and I jumped into it head first! (＾ｖ＾)",
            skillsTitle: "Skills",
            skillsMastered: "Mastered ಥ‿ಥ",
            skillsLearning: "Learning (x_x)",
            skillsWant: "What I want to learn щ(ºДºщ)",
            wantedTitle: "Projects I want to build (ᗒᗨᗕ)",
            wantedText: "An open-source application to manage home automation using Arduino or Raspberry Pi, with the simplicity of Google Home but without the spying and customization limits.",
            currentTitle: "Current projects ヽ(ﾟ〇ﾟ)ﾉ",
            currentText: "BonkDrop: a platform currently in development to share content quickly and progress under real-world front-end and back-end conditions. I manage a server, a front-end, a database, and storage. ٩(^ᴗ^)۶",
            currentLink: "See BonkDrop",
            archivedTitle: "Archived and finished projects ¯＼_(ツ)_/¯",
            archivedText: "I put all my finished and archived projects here so I can index and share them easily. Feel free to take a look and give me your feedback! ^^",
            archivedLink: "See my projects",
            gridTitle: "My GitHub grid (¬‿¬)",
            gridAlt: "GitHub contribution grid for TheVaro93",
            license: "© 2026 TheVaro93 - MIT licensed content - Please do not steal my work without giving credit :P",
            pageTitle: "TheVaro93 Portfolio"
        }
    },
    projets: {
        en: {
            heroSubtitle: "Here are my projects! How much out of 10? (✧ω✧)",
            backHome: "Back to home",
            projectsTitle: "My finished and archived projects",
            panelDesc: "- <strong>Panel_Minecraft</strong>: A moderation panel with a UI to manage a self-hosted Minecraft Bedrock dedicated server. A simple but useful project for me and my friends... and great practice too! :]",
            panelLink: "See the Minecraft panel",
            license: "© 2026 TheVaro93 - MIT licensed content - Please do not steal my work without giving credit :P",
            pageTitle: "Projects | TheVaro93 Portfolio"
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