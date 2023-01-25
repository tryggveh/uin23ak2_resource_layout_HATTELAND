const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


//Gir knappene mulighet til å gjemme og vise korrekte bokser, dette er en rotete måte å gjøre det på og det vil definitivt være mulighet for å minske koden på et eller annet vis.

function htmlButton(){
    document.getElementById("articleHTML").hidden = false;
    document.getElementById("articleCSS").hidden = true;
    document.getElementById("articleJS").hidden = true;
    document.getElementById("articleReact").hidden = true;
    document.getElementById("articleSanity").hidden = true;
    console.log("Changed to HTML tab")
}

function cssButton(){
    document.getElementById("articleHTML").hidden = true;
    document.getElementById("articleCSS").hidden = false;
    document.getElementById("articleJS").hidden = true;
    document.getElementById("articleReact").hidden = true;
    document.getElementById("articleSanity").hidden = true;
    console.log("Changed to CSS tab")
}

function jsButton(){
    document.getElementById("articleHTML").hidden = true;
    document.getElementById("articleCSS").hidden = true;
    document.getElementById("articleJS").hidden = false;
    document.getElementById("articleReact").hidden = true;
    document.getElementById("articleSanity").hidden = true;
    console.log("Changed to JavaScript tab")
}

function reactButton(){
    document.getElementById("articleHTML").hidden = true;
    document.getElementById("articleCSS").hidden = true;
    document.getElementById("articleJS").hidden = true;
    document.getElementById("articleReact").hidden = false;
    document.getElementById("articleSanity").hidden = true;
    console.log("Changed to React tab")
}

function cmsButton(){
    document.getElementById("articleHTML").hidden = true;
    document.getElementById("articleCSS").hidden = true;
    document.getElementById("articleJS").hidden = true;
    document.getElementById("articleReact").hidden = true;
    document.getElementById("articleSanity").hidden = false;
    console.log("Changed to Sanity tab")
}

//starter siden med HTML knapp klikket slik at siden ikke blir tom.
window.onload = function(){
    document.getElementById('BTN').click();
    document.getElementById('BTN').focus()
}

var textHTML = resources.splice(0,1);
console.log(textHTML)

var textCSS = resources.splice(0,1);
console.log(textCSS)

var textJS = resources.splice(0,1);
console.log(textJS)

var textReact = resources.splice(0,1);
console.log(textReact)

var textCMS = resources.splice(0,1);
console.log(textCMS)

//HTML Artikkel
//Rendrer tekst inn i artikkel
const HTMLArt = document.getElementById("articleHTML");

//Lager en for loop som går igjennom textHTML arrayen
for (let i = 0; i < textHTML.length; i++) {
    const category = textHTML[i].category;
    const text = textHTML[i].text;

    // Lager en overskrift som viser kategori
    const heading = document.createElement("h1");
    heading.innerText = category;
    articleHTML.appendChild(heading);

    //Lager nytt P element for å vise tekst
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    articleHTML.appendChild(paragraph);

    // Lager en ny ul element for å vise kilder
    const list = document.createElement("ul");
    for (let j = 0; j < textHTML[i].sources.length; j++) {
        const source = textHTML[i].sources[j];

        //lager et LI element som lager et link element med tittel på link
        const item = document.createElement("li");
        item.innerHTML = `<a href="${source.url}">${source.title}</a>`;
        list.appendChild(item);
    }
    articleHTML.appendChild(list);
}


//CSS Artikkel
//Rendrer tekst inn i artikkel
const articleCSS= document.getElementById("articleCSS");

//Lager en for loop som går igjennom textCSS arrayen
for (let i = 0; i < textCSS.length; i++) {
    const category = textCSS[i].category;
    const text = textCSS[i].text;

    // Lager en overskrift som viser kategori
    const heading = document.createElement("h1");
    heading.innerText = category;
    articleCSS.appendChild(heading);

    //Lager nytt P element for å vise tekst
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    articleCSS.appendChild(paragraph);

    // Lager en ny ul element for å vise kilder
    const list = document.createElement("ul");
    for (let j = 0; j < textCSS[i].sources.length; j++) {
        const source = textCSS[i].sources[j];

        //lager et LI element som lager et link element med tittel på link
        const item = document.createElement("li");
        item.innerHTML = `<a href="${source.url}">${source.title}</a>`;
        list.appendChild(item);
    }
    articleCSS.appendChild(list);
}


//JS Artikkel
//Rendrer tekst inn i artikkel
const articleJS = document.getElementById("articleJS");

//Lager en for loop som går igjennom textJS arrayen
for (let i = 0; i < textJS.length; i++) {
    const category = textJS[i].category;
    const text = textJS[i].text;

    // Lager en overskrift som viser kategori
    const heading = document.createElement("h1");
    heading.innerText = category;
    articleJS.appendChild(heading);

    //Lager nytt P element for å vise tekst
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    articleJS.appendChild(paragraph);

    // Lager en ny ul element for å vise kilder
    const list = document.createElement("ul");
    for (let j = 0; j < textJS[i].sources.length; j++) {
        const source = textJS[i].sources[j];

        //lager et LI element som lager et link element med tittel på link
        const item = document.createElement("li");
        item.innerHTML = `<a href="${source.url}">${source.title}</a>`;
        list.appendChild(item);
    }
    articleJS.appendChild(list);
}


//React Artikkel
//Rendrer tekst inn i artikkel
const articleReact = document.getElementById("articleReact");

//Lager en for loop som går igjennom textReact arrayen
for (let i = 0; i < textReact.length; i++) {
    const category = textReact[i].category;
    const text = textReact[i].text;

    // Lager en overskrift som viser kategori
    const heading = document.createElement("h1");
    heading.innerText = category;
    articleReact.appendChild(heading);

    //Lager nytt P element for å vise tekst
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    articleReact.appendChild(paragraph);

    // Lager en ny ul element for å vise kilder
    const list = document.createElement("ul");
    for (let j = 0; j < textReact[i].sources.length; j++) {
        const source = textReact[i].sources[j];

        //lager et LI element som lager et link element med tittel på link
        const item = document.createElement("li");
        item.innerHTML = `<a href="${source.url}">${source.title}</a>`;
        list.appendChild(item);
    }
    articleReact.appendChild(list);
}


//CMS Artikkel
//Rendrer tekst inn i artikkel
const articleSanity = document.getElementById("articleSanity");

//Lager en for loop som går igjennom textCMS arrayen
for (let i = 0; i < textCMS.length; i++) {
    const category = textCMS[i].category;
    const text = textCMS[i].text;

    // Lager en overskrift som viser kategori
    const heading = document.createElement("h1");
    heading.innerText = category;
    articleSanity.appendChild(heading);

    //Lager nytt P element for å vise tekst
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    articleSanity.appendChild(paragraph);

    // Lager en ny ul element for å vise kilder
    const list = document.createElement("ul");
    for (let j = 0; j < textCMS[i].sources.length; j++) {
        const source = textCMS[i].sources[j];

        //lager et LI element som lager et link element med tittel på link
        const item = document.createElement("li");
        item.innerHTML = `<a href="${source.url}">${source.title}</a>`;
        list.appendChild(item);
    }
    articleSanity.appendChild(list);
}