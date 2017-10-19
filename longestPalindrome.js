/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = ''
    for(let i=0;i<s.length;i++){
        const boundary = Math.min(i,s.length-i-1);
        for(let j=0;j<boundary;j++){

        }
    }
    console.log(longest)
    return longest
};
var isPalindrome = function (s) {
    let i = 0;
    let j = s.length - 1;
    while (j>=i){
        if(s.charAt(i++)!==s.charAt(j--)){
            return false
        }
    }
    return true
}
longestPalindrome('abcba')