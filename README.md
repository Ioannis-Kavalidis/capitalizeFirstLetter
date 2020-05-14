# 1st solution on the "capitalizeFirstLetter" exercise

<img src="./snapshot_1st_solution.png"  width=100)


Created a function named "capitalizeFirstLetter" in which I used firstly .split(" ") method to convert the string into an array and then used a for loop to iterate over all the elements inside the array. Inside the loop I converted the first character of each indivual index of the array with charAt().toUppercase and concatenated the rest of each indexes back to their first character with subsctring(). Ath the end I used the join(" ") method to return a string back.
