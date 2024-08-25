import { handleQuote } from './src/handlers/quote.js';
import { toggleFavorite } from './src/handlers/favorites.js';
import { quotes } from './src/data/quotes.js';
import { hideFavoriteBtn } from './src/handlers/favorites.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
hideFavoriteBtn();
const generateBtn = document.getElementById('generate-btn');
quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, quoteFavoriteBtn, favoritesContainer)
);

generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

export { quoteFavoriteBtn };
