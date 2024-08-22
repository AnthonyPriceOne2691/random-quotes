import quotes from './src/quotes.js';
import { generateRandomInt } from './src/utils.js';
import {
  hideFavoriteCard,
  showFavoriteCard,
  toggleFavoriteIcon,
} from './src/favoritesHandlers.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteindex;

function generateRandomQuote() {
  const randomIndex = generateRandomInt(quotes.length);
  currentQuoteindex = randomIndex;
  const { quote, author, isFavorite } = quotes[randomIndex];
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoriteIcon(isFavorite, toggleFavoriteBtn);

  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteindex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
generateRandomQuote();
