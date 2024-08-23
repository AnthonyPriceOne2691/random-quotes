import { handleQuote } from './src/handlers/quote.js';
import { toggleFavorite } from './src/handlers/favorites.js';
import { quotes } from './src/data/quotes.js';
import { hideFavoriteBtn } from './src/handlers/favorites.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
hideFavoriteBtn(favoriteBtn);
const generateBtn = document.getElementById('generate-btn');
favoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
);

generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

export { favoriteBtn };
