function binarSum(a, b) {
    //finding the number with the biggest length
    let biggest_num = a.length > b.length ? a : b
    //filling numbers with 0s till nearest byte
    const byteQ = (8 - biggest_num.length % 8) + biggest_num.length
    while (a.length < byteQ) {
        a="0"+a
    }
    while (b.length < byteQ) {
        b="0"+b
    }
    //creating a string variable for sum
    let sum=""
    let carryBit=false
    //suming up
    for (let i = byteQ - 1; i >= 0; i--) {
        let sumOfNums=parseInt(a[i])+parseInt(b[i])
        if(carryBit){
            sumOfNums++
            carryBit=false
        }
        if (sumOfNums===2){
            sumOfNums=0
            carryBit=true
        } else if(sumOfNums===3){
            sumOfNums=1
            carryBit=true
        }
        sum=sumOfNums+sum
    }
    //removing unnecessary 0s
    while(sum[0]==0){
        sum=sum.substring(1)
    }
    //return the sum    
    return sum
}
console.log(binarSum("01","1"));