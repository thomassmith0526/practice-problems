'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
     let newArray = []
    for (let i =0; i < grades.length; i ++) {
    if(grades[i] < 38){
         newArray.push(grades[i])
    } else if((grades[i] % 5 )> 3) {
        newArray.push(grades[i] + 2)
        //    console.log(grades[i] + 2); 
        } else if (grades[i] % 5 === 4) {
            newArray.push(grades[i] + 1)
            // console.log(grades[i] +1)
        } else {
            newArray.push(grades[i])
            // console.log(grades[i])
        }
           //73 should get rounded to 75

    }
    return newArray;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

// % Modulus
// variable % 5>3 then do something
//<38 dont do anything
// grades are an array