// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
 
function findDigits(n) {
    // let n = 124
    let numberDiv = 0
    let digits = n.toString().split('');

    console.log("here", digits);

    for (let i = 0; i < digits.length; i++) {
        if (n % digits[i] === 0) {
            numberDiv++
        }

    } return numberDiv 
   
}


// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const t = parseInt(readLine().trim(), 10);

//     for (let tItr = 0; tItr < t; tItr++) {
//         const n = parseInt(readLine().trim(), 10);

//         const result = findDigits(n);

//         ws.write(result + '\n');
//     }

//     ws.end();
// }

// checking if the numbers 124 are divisible but 1,2,4
// An integer  is a divisor of an integer  if the remainder of n/d=0.

// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

// Example
// n= 124
// Check whether ,  and  are divisors of . All 3 numbers divide evenly into  so return .


// Check whether , , and  are divisors of . All 3 numbers divide evenly into  so return .


// Check whether  and  are divisors of .  is, but  is not. Return .

// Function Description

// Complete the findDigits function in the editor below.

// findDigits has the following parameter(s):

// int n: the value to analyze
// Returns

// int: the number of digits in  that are divisors of
// Input Format

// The first line is an integer, , the number of test cases.
// The  subsequent lines each contain an integer, .

// Constraints



