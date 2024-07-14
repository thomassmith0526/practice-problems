function palinCheck(num) {
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result
}
console.log(palinCheck(121));
console.log(palinCheck(123));
