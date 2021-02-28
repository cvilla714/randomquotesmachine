const QuoteBank = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
];

window.onload = init;
function init() {
  // console.log("JS loaded");
  // document.querySelector("#text").innerText = "Cosmel";
  // document.querySelector("#author").innerText = "Author";
  generateQuote();
}

const generatorquote = document.querySelector("#new-quote");
generatorquote.addEventListener("click", generateQuote);

function generateQuote() {
  // console.log("Generate Quote");
  // console.log("JS loaded");
  let quoteSize = QuoteBank.length;
  let randomIndexQuote = Math.floor(Math.random() * quoteSize);
  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22";

  // formatting quote for twitter
  let quoteInApiFormat = QuoteBank[randomIndexQuote].quote.replace(/ /g, "%20");
  // adding the quote
  twitterLink += quoteInApiFormat;

  // adding author in apit format
  let authorInApiFormat = QuoteBank[randomIndexQuote].author.replace(/ /g, "%20");
  // adding the author
  twitterLink += " - " + authorInApiFormat;

  //  "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22If%20you%20can%20dream%20it%2C%20you%20can%20achieve%20it.%22%20Zig%20Ziglar"
  // <i class="fa fa-twitter"></i>

  ("https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Nothing%20is%20impossible%2C%20the%20word%20itself%20says%2C%20%E2%80%9CI%E2%80%99m%20possible!%E2%80%9D%22%20%E2%80%93Audrey%20Hepburn");

  console.log(randomIndexQuote);
  document.querySelector("#tweet-quote").href = twitterLink;
  document.querySelector("#text").innerText = QuoteBank[randomIndexQuote].quote;
  document.querySelector("#author").innerText = QuoteBank[randomIndexQuote].author;
}
