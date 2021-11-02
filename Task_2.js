function isPrime(num) {
    if (num != 0 && num != 1) {
        if (num > 0) {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false
                }
            }
            return true
        }
        else {
            return false
        }
    }
    else {
        return 'the number entered is neither prime nor composite'
    }
}

function primeArrGenerator(num1, num2) {
    if (num1 > num2) {
        num1 = num1 + num2
        num2 = num1 - num2
        num1 = num1 - num2
    }
    let Arr=[]
    while(num1<=num2){
        if(isPrime(num1)===true){
            Arr.push(num1)
        }
        num1++
    }
    if(Arr){
        return Arr
    }
    else{
        return 'there are no prime numbers between those two.'
    }
}
console.log(primeArrGenerator(-4,7))