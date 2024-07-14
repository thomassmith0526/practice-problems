function reverseString(str) {
      
  let newString = "";
    for (let i = str.length - 1; i >= 0; i-- ) {
         newString += str[i];
    console.log(newString);
    }
   return newString

}
// const display = document.getElementById("display");

// function render(func) {
//   display.textContent = func;
// }
// render(reverseString("hello"));


//   let splitString = str.split("");
//   console.log(splitString);
//   let reverseArray = splitString.reverse();
//   console.log(reverseArray);
//   let joinArray = reverseArray.join("");
//   return join;

    // return str.split("").reverse().join("")
    

