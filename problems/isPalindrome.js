/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const origin = x
    if(x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let r = 0
    while (x>0){
        r = r*10+x%10
        x = parseInt(x/10)
    }
    console.log(r)
    if(origin === r){
        return true
    }
    return false
};
console.log(isPalindrome(10))