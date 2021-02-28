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
  console.log("Generate Quote");
  console.log("JS loaded");
  document.querySelector("#text").innerText = "Cosmel";
  document.querySelector("#author").innerText = "Author";
}
