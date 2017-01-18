$(document).ready(function() {
  $('.pigLatin').submit(function(event) {
    event.preventDefault();
    var input = $('#request').val();


    $('.output').text(translate(input));
  });
});


function translate(word) {

  if ((word.includes("a")) || (word.includes("e")) || (word.includes("i")) || (word.includes("o")) || (word.includes("u"))) {
    return word;
  } else {
    return false;
  }
}
