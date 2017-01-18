$(document).ready(function() {
  $('.pigLatin').submit(function(event) {
    event.preventDefault();
    var input = $('#request').val();

    $('.output').text(translate(input));
  })
})

function translate(word) {
  return word;
}
