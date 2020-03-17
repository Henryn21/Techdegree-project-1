/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * an array of objects with two strings each, quote and source
***/
const quotes=[
  { quote:"There is a Destiny which has the control of our actions, not to be resisted by the strongest efforts of Human Nature.",
    source:"George Washington",
    year:"1758",
  },
  { quote:"That which does not kill us makes us stronger.",
    source:"Friedrich Nietzsche",
  },
  { quote:"It is not the man who has too little that is poor, but the one who hankers after more.",
    source:"Lucius Annaeus Seneca",
  },
  { quote:"Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
    source:"Marcus Aurelius",
    citation:"Meditations",
  },
  { quote:"Do what you can, with what you have, where you are.",
    source:"Theodore Roosevelt",
  }
]
//test
//console.log(quotes);


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  //generate random number 0-4
  const randomNum=Math.ceil(Math.random()*5)-1;
  //variable for quote object from array
  const quote=quotes[randomNum];
  return quote;
}
//test
//console.log(getRandomQuote());

/***
 * `printQuote` function
***/
function printQuote(){
  const quoteObject=getRandomQuote();
  //a string with p tags
  const htmlString=`<p class="quote">${quoteObject.quote}
  <p class="source">${quoteObject.source}`;
  //if citation exists
  if(quoteObject.citation!=null){
    htmlString+=`<span>${quoteObject.citation}</span>`;
  }
  //if year exists
  if(quoteObject.year!=null){
    htmlString+=`<span>${quoteObject.year}</span>`;
  }
  console.log(htmlString);
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);