$(document).ready(function() {
  $('.pigLatin').submit(function(event) {
    event.preventDefault();
    var input = $('#request').val();


    $('.output').text(checkVowel(input));
  });
});


function checkVowel(vowelWord) {

  var nonRegex = vowelWord.replace(/[^a-zA-Z :]/g, "")

  if ((nonRegex.toLowerCase().includes("a")) || (nonRegex.toLowerCase().includes("e")) || (nonRegex.toLowerCase().includes("i")) || (nonRegex.toLowerCase().includes("o")) || (nonRegex.toLowerCase().includes("u"))) {
    if ((nonRegex.toLowerCase().charAt(0)) === "a" || (nonRegex.toLowerCase().charAt(0)) === "e" || (nonRegex.toLowerCase().charAt(0)) === "i" || (nonRegex.toLowerCase().charAt(0)) === "o" || (nonRegex.toLowerCase().charAt(0)) === "u") {
      return nonRegex + "ay";
    } else  {
        var i = 1
        while ((nonRegex.charAt(i)) !== "a" && (nonRegex.charAt(i)) !== "e" && (nonRegex.charAt(i)) !== "i" && (nonRegex.charAt(i)) !== "o" && (nonRegex.charAt(i)) !== "u") {
          i++;
        }

        if (nonRegex.toLowerCase().substring(i - 1, i + 1) === "qu") {
          return checkQu(nonRegex, i);
        } else {
          return checkConstant(nonRegex, i);
        }
    }
  } else {
    return "Please input a real word"
  }
}

function checkConstant(consanantWord, i) {
  var consanant = consanantWord.substring(i, consanantWord.length) + consanantWord.substring(0, i) + "ay";
  return consanant;
}

function checkQu(wordQu, i) {
  var wordsWithQ = (wordQu.substring(i + 1, wordQu.length) + wordQu.substring(0, i + 1) + "ay");
  return wordsWithQ;
}
