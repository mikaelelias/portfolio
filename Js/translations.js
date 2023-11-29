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
        sectionTitleProjects: "Projects",
        sectionDescriptionProjects: "Things I've built so far",
        cardProjectTitle: "Project Tile goes here",
        cardProjectTitleDescription: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "<b>Tech stack:</b> HTML, JavaScript, SASS, React</p>",
        menuItem1Footer: "Home",
        menuItem2Footer: "About",
        menuItem3Footer: "Contact",
        /*copyright: "Designed by Pavan MG and built by Mikael Elias",*/
    },
    pt: {
        title: `Olá 👋, <br> Meu nome é <span class="highlight">Mikael Elias</span><br>e eu desenvolvo<br>coisas para a Web.`,
        menuItem1: "Home",
        menuItem2: "Sobre",
        menuItem3: "Contato",
        titleTechnologies: "Minhas Tecnologias",
        descriptionTechnologies: "Tecnologias com as quais tenho trabalhado recentemente",
        sectionTitleProjects: "Projetos",
        sectionDescriptionProjects: "Coisas que construí até agora",
        cardProjectTitle: "O bloco do projeto vai aqui",
        cardProjectTitleDescription: "Este é um exemplo de descrição do projeto, coisas aleatórias estão aqui na descrição Este é um exemplo de projeto, gerador lorem ipsum para conteúdo fictício",
        techStack: "<b>Tecnologia:</b> HTML, JavaScript, SASS, React</p>",
        menuItem1Footer: "Home",
        menuItem2Footer: "Sobre",
        menuItem3Footer: "Contato",
        /*copyright: "Projetado por Pavan MG e construído por Mikael Elias",*/
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