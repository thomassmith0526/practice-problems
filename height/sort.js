function hurdleRace(k, height) {
    let sortedArray = height.sort(function(a,b) {
    return a-b;
})
let maxHeight = sortedArray[sortedArray.length-1]

    if (maxHeight - k <= 0 ) {
        return 0
    } else {
        return maxHeight -k;
    }
}
