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
var lengthOfLongestSubstring3 = function (s) {
    let longest = 0;
    let startIndex = 0;
    let endIndex = 0;
    const set = new Set();
    const len = s.length;
    while(startIndex<len&&endIndex<len){
        const c = s.charAt(endIndex);
        if(!set.has(c)){
            set.add(c)
            endIndex++
            longest = Math.max(longest,endIndex-startIndex)
        }else {
            set.delete(c)
            startIndex++
        }
    }
    return longest
}
var lengthOfLongestSubstring4 = function (s) {
    let longest = 0;
    let startIndex = 0;
    let endIndex = 0;
    const set = new Set();
    const len = s.length;
    while(startIndex<len&&endIndex<len){
        const c = s.charAt(endIndex);
        if(!set.has(c)){
            set.add(c)
            endIndex++
            longest = Math.max(longest,endIndex-startIndex)
        }else {
            set.delete(s.charAt(startIndex++))
        }
    }
    return longest
}
var lengthOfLongestSubstring5 = function (s) {
    let longest = 0;
    let startIndex = 0;
    const map  = new Map();
    for(let endIndex = 0;endIndex<s.length;endIndex++) {
        const c = s.charAt(endIndex);
        if(map.has(c)){
            startIndex = Math.max(map.get(c)+1,startIndex);
        }
        longest = Math.max(endIndex - startIndex +1,longest);
        map.set(s.charAt(endIndex),endIndex);
    }
    return longest
}
lengthOfLongestSubstring5('s')

