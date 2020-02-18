# capitalizeFirstLetter

// 1st way: with a for loop and charAt()

function capitalizeFirstLetter(str) {
  //converting the giving string into array
  str = str.split(" ");
  //iterating over all elements in the array
  for (let i = 0; i < str.length; i++) {
    //converting the first char to upper case &concatenating to the rest chars
    str[i] = str[i].charAt(0).toUpperCase(str[i]) + str[i].substring(1);
  }
  return str.join(" ");
}

console.log(capitalizeFirstLetter("hey there you, come and play with us"));
