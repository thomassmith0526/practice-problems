function sortArrayByIncreasingFrequency(arr) {
    const frequencyMap = arr.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
}, {});

arr.sort((a, b) => {
    if (frequencyMap[a] !== frequencyMap[b]) {
        return frequencyMap[a] - frequencyMap[b] 
    } else {
        return a-b;
    }
});
return arr;

}
const arr = [3,3,1,1,1,8,3,6,8,6]
const sortedArr = sortArrayByIncreasingFrequency(arr);
console.log(sortedArr)