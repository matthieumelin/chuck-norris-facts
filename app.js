let punchlines = [
    "Chuck Norris ne ment pas, c'est la vérité qui se trompe.",
    "Chuck Norris peut applaudir d'une seule main.",
    "A l'école, c'est le professeur qui devait lever la main pour parler a Chuck Norris.",
    "Chuck Norris aime la vie. Une chance pour elle.",
    "Chuck Norris a déjà frôlé la mort....elle ne s'en est jamais remise.",
    "Windows ne demande jamais à Chuck Norris d'envoyer le rapport d'erreur. Bill Gates vient le chercher lui même, avec toutes ses excuses.",
    "Des gamins pissent dans la neige pour écrire leur nom. Chuck Norris le fait dans le béton armé.",
    "Chuck Norris a fini Super Mario Bros sans sauter.",
    "Chuck Norris n'utilise pas de suppositoire. Les voies du seigneur sont impénétrables.",
    "Les ennemis de Chuck Norris lui disent souvent d'aller au diable. Le Diable aimerait bien qu'ils arrêtent.",
]

let color = getRandomColor();
let punchline = document.querySelector(".punchline");
punchline.style.color = color;
punchline.append(document.createTextNode(getPunchline()));

let punchlineAuthor = document.querySelector(".punchline_author");
punchlineAuthor.style.color = color;

let container = document.querySelector(".container");

let newQuoteButton = document.querySelector(".punchline_button");
newQuoteButton.style.backgroundColor = color;
newQuoteButton.addEventListener("click", setContent);

document.body.style.backgroundColor = color;

function setContent() {
    setPunchline();
    color = getRandomColor();
    document.body.style.backgroundColor = color;
    punchline.style.color = color;
    punchlineAuthor.style.color = color;
    newQuoteButton.style.backgroundColor = color;
}

function getRandomColor() {
    return "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
}

function getPunchline() {
    return punchlines[Math.floor(Math.random() * punchlines.length)];
}

function setPunchline() {
    punchline.innerHTML = getPunchline();
}