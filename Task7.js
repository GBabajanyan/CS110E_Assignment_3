function binarSum(a, b) {
    let sum=""
    let carryBit=false
    const biggest_num = a.length > b.length ? a : b
    const byteQ = (8 - biggest_num.length % 8) + biggest_num.length
    while (a.length < byteQ) {
        a="0"+a
    }
    while (b.length < byteQ) {
        b="0"+b
    }
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
    while(sum[0]==0){
        sum=sum.substring(1)
    }
    return sum
}
function inverser(num){
    let arrNum=num.split("")
    for(let i in arrNum){
        if (arrNum[i]==0) {
            arrNum[i]=1
        }else if(arrNum[i]==1) {
            arrNum[i]=0
        }else{
            arrNum[i]='err'
        }   
    }
    if(arrNum.includes('err')){
        return 'Error! insert only 1s and 2s'
    }else{
        const invNum=arrNum.join('')
        return invNum
    }
}
function minuser(numb){
    return binarSum(inverser(numb),'1')
}
console.log(minuser('010'));