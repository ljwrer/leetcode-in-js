/**
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pw wke w", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const longest = [];
    for(let i=0;i<s.length;i++){
        longest[i] = ''
        for(let j=i;j<s.length;j++){
            const c = s.charAt(j)
            if(longest[i].includes(c)){
                break;
            }else {
                longest[i] += c
            }
        }
    }
    let l = ''
    longest.forEach(s=>{
        if(s.length>l.length){
            l = s
        }
    })
    console.log(l)
};
var lengthOfLongestSubstring2 = function (s) {
    let longest = '';
    let startIndex = 0;
    let newSubstring = '';
    for(let i=0;i<s.length;i++){
        const c = s.charAt(i);
        let index = newSubstring.indexOf(c)
        if(~index){
            if(newSubstring.length>longest.length){
                longest = newSubstring;
            }
            newSubstring = '';
            i = startIndex+index;
            startIndex++
        }else {
            newSubstring += c;
        }
    }
    if(newSubstring.length>longest.length){
        longest = newSubstring;
    }
    console.log(longest)
    return longest.length
}
lengthOfLongestSubstring2('dvdf')