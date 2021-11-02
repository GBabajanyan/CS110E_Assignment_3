function reverseNum(num) {
    let digitArr = num.toString().split("")
    let reversed = digitArr.reverse().join("")
    let reversedNum = parseInt(reversed)
    return reversedNum
}
console.log(reverseNum(8900021));