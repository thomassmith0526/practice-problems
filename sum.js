
// const submitButton = document.getElementById('submit');
//   function calSum(arr) {
//   let sum = 0
//   for( let i = 0; i <= arr.length; i++ ) {
//     sum += arr[i];
//   }
//     return sum;
  
// }
// console.log(calSum([1,2,3,4,5]))
// console.log(calSum([4,6,8,9,10]))

// calSum()

// const arr = [1,2,3,4,5,];

// let sum = 0; 
// let i = -1;
// while (++i < arr.length) {
//   sum += arr[i];
// }
// console.log(sum)

function calSumArray(arr) {
  if (!arr || !Array.isArray(arr)) {
    return 0;
  }
  let sum = 0

for ( i = 0; i < arr.length; i++) {
  // console.log(sumArray)
  sum += arr[i]
}
return sum;

}
console.log(calSumArray([10,20,30]))
calSumArray()