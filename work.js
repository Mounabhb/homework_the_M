// Array of quotes
const quotes = [
  {
    content: "Cause i'm heartless",
    author: "The weekend ",
  },
  {
    content: "in this world , it's just us ..",
    author: "harry styles",
  },
  {
    content:
      "oh, darling,all of the city lights never shine as bright as your eyes ..!",
    author: "james arthur ",
  },
  {
    content:
      "I don't care how long it takes , as long as I'am with you I'v got a smile on my face",
    author: "d4vd",
  },
  {
    content: "Met a lot of people but nobody feels like you",
    author: "Ali Gati ",
  },
  {
    content:
      "Cause all of the small things that you do , are what remind me why I fell for you ",
    author: "New West",
  },
  {
    content: "ْIgot the summertime, summertime sadness",
    author: "Lana  Del Rey",
  },
  {
    content: "I'm gonna pack my things and leave you behind ",
    author: "The walters",
  },
  {
    content: "I've got my eyes on you",
    author: "Raul Tonai",
  },
  {
    content:
      "I wanna cry and i wanna love but all my tears have been used up On another love, another love ",
    author: "Tom odell",
  },
  {
    content:
      "People fall in love in mysiterious ways maybe just the touch of a hand ..Well, I fall in love with you every single day",
    author: "Ed sheeran",
  },
  {
    content:
      "we keep this love in a photograph.. We make these memories for ourselves Where our eyes never closing Hearts are never broken And time's forever frozen ...",
    author: "ED sheeran",
  },
  {
    content:
      "We used to be close but peopme can go from people you know to people you don't ..",
    author: "Selena Gomez",
  },
  {
    content: "It's funny how a memory turns into a bad dream ",
    author: "Ashe",
  },
  {
    content:
      "Never mind ,i'll find someone like you i wish nothing but the best for you ,too",
    author: "Adele",
  },
  {
    content: "if we were meant to be we would have been by now.",
    author: "Billie eilish",
    image: "billie.jpg",
  },
  {
    content:
      "And i see forever in your eyes I feel okay when i see you smile,smile ",
    author: " Ruth B",
  },
];

// Get DOM elements
//la méthode getElementById pour récupérer les éléments du DOM
//(Document Object Model) avec les identifiants correspondants.
// Les éléments récupérés sont stockés dans des variables pour une utilisation ultérieure.

const quoteContentElement = document.getElementById("quote-content");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const favoriteBtn = document.getElementById("favorite-btn");
const favoritesList = document.getElementById("favorites-list");
const authorImage = document.getElementById("author-image");

//lorsque ces boutons sont cliquésles fonctions generateQuote et addToFavorites
//respectivement seront exécutées.

// Event listener for the generate button
generateBtn.addEventListener("click", generateQuote);

// Event listener for the favorite button
favoriteBtn.addEventListener("click", addToFavorites);

// Function to generate a random quote
// generateQuote est responsable de générer une citation aléatoire à partir du tableau quotes.
//Elle sélectionne un index aléatoire en utilisant Math.random() et Math.floor() pour obtenir un nombre entier
//entre 0 et la longueur du tableau quotes. Ensuite, elle récupère la citation correspondante à cet index
//et met à jour les éléments du DOM quoteContentElement et quoteAuthorElement avec le contenu et l'auteur de la citation.
const randomIndex = Math.floor(Math.random() * quotes.length);
const quote = quotes[randomIndex];
function generateQuote() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];

  quoteContentElement.textContent = quote.content;
  quoteAuthorElement.textContent = quote.author;
  authorImage.src = quote.image;
}
// Function to add a quote to favorites
//La fonction addToFavorites est appelée lorsque le bouton d'ajout aux favoris est cliqué.
// Elle récupère le contenu et l'auteur de la citation actuellement affichée à partir des éléments du DOM quoteContentElement et quoteAuthorElement.
//Ensuite, elle crée un nouvel élément li (élément de liste) et définit son contenu texte en utilisant une interpolation de chaîne pour afficher le contenu et l'auteur de la citation.
// Enfin, cet élément de liste est ajouté à la liste des favoris dans le DOM.

function addToFavorites() {
  const quoteContent = quoteContentElement.textContent;
  const quoteAuthor = quoteAuthorElement.textContent;
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${quoteContent} - ${quoteAuthor}
    <button class="remove-btn"><i class="fa-solid fa-trash" style="color: #513c1f;"></i></button>
  `;
  favoritesList.appendChild(listItem);

  const removeButton = listItem.querySelector(".remove-btn");
  removeButton.addEventListener("click", removeFavorite);
}

function removeFavorite(event) {
  const listItem = event.target.closest("li");
  listItem.remove();
}
const copyButton = document.getElementById("copy-btn");
copyButton.addEventListener("click", copyQuote);

function copyQuote(event) {
  const quoteElement = event.target.parentNode;
  const quoteText = quoteElement.querySelector("#quote-content").textContent;
  const authorText = quoteElement.querySelector("#quote-author").textContent;
  const formattedQuote = `${quoteText} - ${authorText}`;

  navigator.clipboard.writeText(formattedQuote).then(() => {
    alert("Quote copied to clipboard!");
  });
}
