function displayCurrentQuote(quote) {
  const { id, text, author, isFavorite } = quote;
  const quoteTextElement = document.getElementById('quote-text');
  const quoteElement = document.getElementById('quote');
  const quoteAuthorElement = document.getElementById('author');
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = `"${text}"`;
  quoteAuthorElement.textContent = author;
}

export { displayCurrentQuote };
