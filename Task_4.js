function reverseNum(num) {
    let digitArr = num.toString().split("")
    let reversedstr = digitArr.reverse().join("")
    let reversedNum = parseInt(reversedstr)
    return reversedNum
}
function isPolyndrome(num){
    return num===reverseNum(num)
}
console.log(isPolyndrome(121));