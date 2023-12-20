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
        copyright: 'Designed by <a href="https://github.com/pavanmg007" class="highlight-footer">Pavan MG</a> and built by <span class="highlight-footer">Mikael Elias</span>',

        titleAboutme: "About Me",
        descriptionAboutme: "A passionate technology enthusiast and front-end developer dedicated to crafting engaging and intuitive user experiences. With a background in Information Technology, I embarked on my journey as a developer in early 2022 and have been working on various personal projects to expand my knowledge ever since. I firmly believe that commitment, consistency, and confidence form the foundation of a good developer, and it's upon these pillars that I build my daily growth.",
        titleExperience:"My Learning Strategy",
        company:"I believe that the most effective method for learning is to build a real project from the ground up. This approach allows me to apply and solidify the concepts I've acquired from different courses. One of the projects that fills me with pride is my portfolio. Creating it provided me with a chance to truly challenge myself and surmount numerous obstacles",
        titleEducation:"Education",
        year: "Feb 2013 - Dec 2014",
        functionWork: "Information Technology",    
        
        contactInformationTitle:"For any questions please mail us:"
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
        techStack: '<b>Tecnologia:</b> HTML, JavaScript, SASS, React',
        menuItem1Footer: "Home",
        menuItem2Footer: "Sobre",
        menuItem3Footer: "Contato",
        copyright: 'Projetado por <a href="https://github.com/pavanmg007" class="highlight-footer">Pavan MG</a> e construído por <span class="highlight-footer">Mikael Elias</span>',
        titleAboutme: "Sobre mim",

        descriptionAboutme: "Um entusiasta apaixonado por tecnologia e desenvolvedor front-end dedicado a criar conteúdo envolvente e experiências de usuário intuitivas. Com formação em Tecnologia da Informação, embarquei em minha jornada como um desenvolvedor no início de 2022 e tenho trabalhado em vários projetos pessoais para expandir meu conhecimento desde então. Acredito firmemente que o compromisso, a consistência e a confiança constituem a base de uma bom desenvolvedor, e é sobre esses pilares que construo meu crescimento diário.",
        titleExperience:"Minha estratégia de aprendizagem",
        company:"Acredito que o método mais eficaz de aprendizagem é construir uma verdadeira projeto desde o início. Esta abordagem permite-me aplicar e solidificar os conceitos que desenvolvi adquiridos em diferentes cursos. Um dos projetos que me enche de orgulho é o meu portfólio. Criá-lo me deu a chance de realmente me desafiar e superar numerosos obstáculos",
        titleEducation:"Educação",
        year: "Fev 2013 - Dez 2014",
        functionWork: "Tecnologia da Informação",

        contactInformationTitle: "Para qualquer dúvida, envie-me um email:",              
    }
}

function updateLanguage() {
    Object.keys(translations[getCurrentLang()]).forEach(key => {
        const elements = [...document.querySelectorAll(`[data-translation-key=${key}]`)];
        if (!elements.length) return;
        elements.forEach((el) => {
            el.innerHTML = translations[getCurrentLang()][key];
        })
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