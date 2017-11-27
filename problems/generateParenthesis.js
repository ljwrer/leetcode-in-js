/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    const getS = function (s,left,right,n) {
        if(left===n&&right==n){
            result.push(s)
        }
        if(left>=right&&left<=n){
            getS(s+'(',left+1,right,n)
            getS(s+')',left,right+1,n)
        }
    }
    getS('(',1,0,n)
    return result
};
console.log(generateParenthesis(0))
/**
1
 11
    111
        111-1-1-1
    11-1
        11-11
            11-11-1-1
        11-1-1
            11-1-11-1
 1-1
    1-11
        1-111
            1-111-1-1
        1-11-1
            1-11-11-1


sum>=0
amount1<=n

amount1=n
amount-1=n

 */


