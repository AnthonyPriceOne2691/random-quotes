import { handleFavorite } from './favorites.js';
import { generateRandomInt } from '../utils.js';
import { quotes } from '../data/quotes.js';

let currentQuote = null;

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteAuthorElement = document.getElementById('author');
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

function handleQuote() {
  const randomQuote = choseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(currentQuote);
}

export { handleQuote, currentQuote };
