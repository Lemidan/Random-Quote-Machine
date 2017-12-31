/*global $*/
$(document).ready(function () {
  "use strict";
  var randomAuthor = "";
  var randomQuote = "";
    //Generate quote-script.
  $("#newQuote").click(function newRandomQuote () {
    var randomNumber = Math.floor(Math.random() * 11);
    switch (randomNumber) {
    case 1:
      randomQuote = "Gambling is the tax of stupidity.";
      randomAuthor = "- Daniel Fredriksson";
      break;
    case 2:
      randomQuote = "If you can't explain it simply, you don't understand it well enough.";
      randomAuthor = "- Albert Einstein";
      break;
    case 3:
      randomQuote = "Life is far too important a thing ever to talk seriously about.";
      randomAuthor = "- Oscar Wilde";
      break;
    case 4:
      randomQuote = "Time is an illusion. Lunchtime doubly so.";
      randomAuthor = "- Douglas Adams";
      break;
    case 5:
      randomQuote = "In individuals, insanity is rare; but in groups, parties, nations and epochs, it is the rule.";
      randomAuthor = "- Friedrich Nietzsche";
      break;
    case 6:
      randomQuote = "The most common lie is that which one lies to himself; lying to others is relatively an exception.";
      randomAuthor = "- Friedrich Nietzsche";
      break;
    case 7:
      randomQuote = "I write my own quotes. Except this one. I obviously stole this from somebody really clever.";
      randomAuthor = "- Brian Celio";
      break;
    case 8:
      randomQuote = "Wise men speak because they have something to say; Fools because they have to say something.";
      randomAuthor = "- Plato";
      break;
    case 9:
      randomQuote = "The only thing necessary for the triumph of evil is for good men to do nothing.";
      randomAuthor = "- Edmund Burke";
      break;
    case 10:
      randomQuote = "Common sense is the collection of prejudices acquired by age eighteen.";
      randomAuthor = "- Albert Einstein";
      break;
    default:
      randomQuote = "Man cannot live by bread alone; he must have peanut butter.";
      randomAuthor = "- James A. Garfield";
    }
    $("#author").html(randomAuthor);
    $("#quoteText").html(randomQuote);

    //Tweet script with indexed quote.
    $("#tweet-quote").click(function tweetIt() {
      var tweetUrl = 'https://twitter.com/share?text=' + '"' + encodeURIComponent(randomQuote) + '" ' + encodeURIComponent(randomAuthor);
      window.open(tweetUrl);
    });
  });
});
