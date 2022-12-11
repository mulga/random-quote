let quoteSpan = document.getElementById("quote");
let authorSpan = document.getElementById("author");
let twitterButton = document.getElementById("twitter-button");

let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  quoteSpan.innerText = quote.text;
  authorSpan.innerText = quote.author;
}

async function getQuote() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    alert("Whoops, no quote", error);
    console.log("Whoops, no quote", error);
  }
}

getQuote();

//  href="https://twitter.com/intent/tweet?text=Hello%20world"

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteSpan.innerText} - ${authorSpan.innerText}`;
  window.open(twitterUrl, "_blank");
}

twitterButton.addEventListener("click", tweetQuote);

// local

// function newQuote() {
//   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//   console.log(quote);
//   quoteSpan.innerText = quote.text;
//   authorSpan.innerText = quote.author;
// }
// newQuote();
