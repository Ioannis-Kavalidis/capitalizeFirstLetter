// 2nd way: with map() and charAt()

function capitalizeFirstLetter1(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
console.log(capitalizeFirstLetter1("hey there you, come and play with us"));
