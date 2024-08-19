const quotes = [
  'The only limit to our realization of tomorrow is our doubts of today.',
  'In the end, we will remember not the words of our enemies, but the silence of our friends.',
  'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
  'Success is not final, failure is not fatal: It is the courage to continue that counts.',
  'Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.',
  'The best way to predict your future is to create it.',
  "Life is what happens when you're busy making other plans.",
  'Do not wait to strike till the iron is hot, but make it hot by striking.',
  'It does not matter how slowly you go as long as you do not stop.',
  'Our greatest glory is not in never falling, but in rising every time we fall.',
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQuote);
