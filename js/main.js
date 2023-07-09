var quotes = [
  {
    qText: "“Be yourself; everyone else is already taken.”",
    author: {
      aName: "Oscar Wilde",
      aImgSrc: "imgs/Oscar Wilde.jpg",
    },
  },
  {
    qText: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: {
      aName: "Albert Einstein",
      aImgSrc: "imgs/Albert Einstein.jpg",
    },
  },
  {
    qText: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: {
      aName: "Bernard M. Baruch",
      aImgSrc: "imgs/Bernard M. Baruch.jpg",
    },
  },
  {
    qText: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
    author: {
      aName: "William W. Purkey",
      aImgSrc: "imgs/William W. Purkey.jpg",
    },
  },
  {
    qText: "“Be the change that you wish to see in the world.”",
    author: {
      aName: "Mahatma Gandhi",
      aImgSrc: "imgs/Mahatma Gandhi.jpg",
    },
  },
  {
    qText: "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: {
      aName: "Robert Frost",
      aImgSrc: "imgs/Robert Frost.jpg",
    },
  },
  {
    qText: "“If you tell the truth, you don't have to remember anything.”",
    author: {
      aName: "Mark Twain",
      aImgSrc: "imgs/Mark Twain.jpg",
    },
  },
];

var currentQuoteIndex = 0;
var quoteTextElement = document.getElementById("quoteTextId");
var authorImgElement = document.getElementById("authorImgId");
var authorNameElement = document.getElementById("authorNameId");

function getNewQuoteIndex() {
  return Math.floor(Math.random() * quotes.length);
}
function getNewQuote() {
  var newQuoteIndex = getNewQuoteIndex();
  if (newQuoteIndex === currentQuoteIndex) {
    getNewQuote();
  } else {
    currentQuoteIndex = newQuoteIndex;
    var quote = quotes[currentQuoteIndex];
    quoteTextElement.innerHTML = quote.qText;
    authorImgElement.setAttribute("src", quote.author.aImgSrc);
    authorImgElement.setAttribute("alt", quote.author.aName);
    authorNameElement.innerHTML = quote.author.aName;
  }
}
