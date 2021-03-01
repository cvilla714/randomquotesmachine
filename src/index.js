import { Tooltip, Toast, Popover } from "bootstrap";
import "./style.css";
import QuoteBank from "./quote";

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

  console.log(randomIndexQuote);
  document.querySelector("#tweet-quote").href = twitterLink;
  document.querySelector("#text").innerText = QuoteBank[randomIndexQuote].quote;
  document.querySelector("#author").innerText = QuoteBank[randomIndexQuote].author;
}
