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
const a = -7
console.log(isPrime(a))