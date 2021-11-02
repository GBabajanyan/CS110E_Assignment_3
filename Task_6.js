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
        let invNum=arrNum.join('')
        return invNum
    }
}
console.log(inverser("1010100"));