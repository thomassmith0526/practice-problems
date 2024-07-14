const twoSum = (array, goal) => {
  let mapOfNum = {};

  let twoIndexes = [];
  for (let 
    i = 0; i < array.length; i++) {
    mapOfNum[array[i]] = i;
  }
  for (let i = 0; i < array.length; i++) {
    let target = goal - array[i];
    if (mapOfNum[target] !== null && mapOfNum[target] !== undefined) {
      twoIndexes.push(i);
      twoIndexes.push(mapOfNum[target]);
      return twoIndexes;
    }
  }

  return twoIndexes;
};
const array = [1, 3, 10, 11, 14];
const goal = 13;
const result = twoSum(array, goal);
console.log(result);

function round(x) {
    return Math.ceil(x /5) * 5;
}
var n = 73;
console.log(round(n));