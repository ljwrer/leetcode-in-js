/**
 * @param {string} s
 * @return {string}
 */
//c b b d
var longestPalindrome = function(s) {
    let longest = ''
    for(let i=0;i<=s.length-1;i+=0.5){
        const boundary = Math.min(i,s.length-i-1);
        let sub = i%1?'':s.charAt(i)
        for(let j=1;j<=boundary+0.5;j++){
            const prev = s.charAt(Math.ceil(i-j))
            const next = s.charAt(Math.floor(i+j))
            if(prev===next){
                sub = prev+sub+next
            }else {
                break
            }
        }
        if(sub.length>longest.length){
            longest = sub
        }
    }
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
longestPalindrome("babad")