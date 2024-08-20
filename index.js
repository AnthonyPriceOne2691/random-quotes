import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteindex;

function generateRandomQuote() {
  currentQuoteindex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteindex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoriteBtn.textContent = randomQuote.isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';

  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteindex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';
  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
      <p>${currentQuote.quote}</p>
      <p class="author">${currentQuote.author}</p>
      `;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
generateRandomQuote();
