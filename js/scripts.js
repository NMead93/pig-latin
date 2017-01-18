$(document).ready(function() {
  $('.pigLatin').submit(function(event) {
    event.preventDefault();
    var input = $('#request').val();


    $('.output').text(translate(input));
  });
});


function translate(word) {

  if ((word.includes("a")) || (word.includes("e")) || (word.includes("i")) || (word.includes("o")) || (word.includes("u"))) {
    if ((word.charAt(0)) === "a" || (word.charAt(0)) === "e" || (word.charAt(0)) === "i" || (word.charAt(0)) === "o" || (word.charAt(0)) === "u") {
      return word + "ay";
    } else  {
        var i = 0
        while (i !== "a") || ()
    }
  } else {
    return "Please input a real word"
  }
}
