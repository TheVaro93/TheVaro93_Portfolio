const PAGE_TRANSLATIONS = {
    index: {
        en: {
            heroSubtitle: "Here is my portfolio! What score out of 10? (✧ω✧)",
            aboutTitle: "About me (⌒_⌒/)",
            aboutText: "I have always been interested in screens. First through video games, then phones, tech and finally computers, and I eventually wanted to understand how all of this worked. I finally got a computer when I was 12, started tinkering, then got into programming, and that is when I discovered a whole new world that I jumped into head first! (＾ｖ＾)",
            skillsTitle: "Skills",
            skillsMastered: "Mastered ಥ‿ಥ",
            skillsLearning: "Learning (x_x)",
            skillsWant: "What I want to learn щ(ºДºщ)",
            wantedTitle: "Projects I want to build (ᗒᗨᗕ)",
            wantedText: "An open-source application to manage home automation, with Google Home simplicity but without spying and customization limits.",
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
