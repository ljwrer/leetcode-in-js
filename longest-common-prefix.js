/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return ''
    let prefix = ''
    let i = 0
    while(true){
        let same=0;
        for(let j=0;j<strs.length;j++){
            const code = strs[j].charCodeAt(i)
            if(!code){
                return prefix
            }else {
                same = same^code
                if(same&&j!==0){
                    return prefix
                }else {
                    same = code;
                }
            }
        }
        prefix+=strs[0].charAt(i++)
    }
    return prefix
};
console.log(longestCommonPrefix(['a']))