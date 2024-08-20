function hurdleRace(k, height) {
    // Write your code here
  const max = Math.max(...height)
//   console.log(Math.max(...height))
if (k < max) {
    return (max - k)
} else {
    return 0
}
}
