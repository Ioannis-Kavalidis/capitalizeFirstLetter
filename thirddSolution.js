// 3rd way: with map() and replace()

function capitalizeFirstLetter2(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}
console.log(capitalizeFirstLetter2("hey there you, come and play with us"));
