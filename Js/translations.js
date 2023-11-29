const languageButton = document.querySelector('.language-button');

const translations = {
    en: {
        title: `Hi 👋, <br> My name is <br><span class="highlight">Mikael Elias</span><br>
        and I build things for web.`,
        menuItem1: "Home",
        menuItem2: "About",
        menuItem3: "Contact",
        titleTechnologies: "My Tech Stack",
        descriptionTechnologies: "Technologies I've been working with recently",
    },
    pt: {
        title: `Olá 👋, <br> Meu nome é <span class="highlight">Mikael Elias</span><br>e eu desenvolvo<br>coisas para a Web.`,
        menuItem1: "Home",
        menuItem2: "Sobre",
        menuItem3: "Contato",
        titleTechnologies: "Minhas Tecnologias",
        descriptionTechnologies: "Tecnologias com as quais tenho trabalhado recentemente",
    }
}

function updateLanguage() {
    Object.keys(translations[getCurrentLang()]).forEach(key => {
        const element = document.querySelector(`[data-translation-key=${key}]`);
        if (!element) return;
        element.innerHTML = translations[getCurrentLang()][key];
    })
}

function getCurrentLang() {
    return localStorage.getItem("lang") ?? "en"
}

function toogleLanguage() {
    localStorage.setItem("lang", getCurrentLang() === 'en' ? 'pt' : 'en');
}

function onClickLanguageButton() {
    toogleLanguage();
    updateLanguage();
}

languageButton.addEventListener('click', onClickLanguageButton)

updateLanguage();