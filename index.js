const quotes = [
  {
    quote:
      'The only limit to our realization of tomorrow is our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'In the end, we will remember not the words of our enemies, but the silence of our friends.',
    author: 'Martin Luther King Jr.',
  },
  {
    quote:
      'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    author: 'Ralph Waldo Emerson',
  },
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote:
      'Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.',
    author: 'Albert Einstein',
  },
  {
    quote: 'The best way to predict your future is to create it.',
    author: 'Peter Drucker',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote:
      'Do not wait to strike till the iron is hot, but make it hot by striking.',
    author: 'William Butler Yeats',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    quote:
      'Our greatest glory is not in never falling, but in rising every time we fall.',
    author: 'Confucius',
  },
];

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);
