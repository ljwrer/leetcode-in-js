/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch2 = function(s, p) {
    const pList = []
    for(let i =0;i<p.length;i++){
        const prev = p.charAt(i-1)
        const next = p.charAt(i+1)
        if(next!=='*'){
            pList.push(p.charAt(i))
        }else {
            pList.push(p.charAt(i)+'*')
            i++
        }
    }
    for(let i=0;i<pList.length;i++){
        const wildcard = pList[i]
        if(wildcard.includes('*')){
            const c = wildcard.charAt(0)
            while (s&&(c === s.charAt(0)||c === '.')){
                s = s.slice(1)
            }
        }else {
            if(s&&(wildcard === s.charAt(0)||wildcard === '.')){
                s = s.slice(1)
            }else {
                return false
            }
        }
    }
    return !s
};
var isMatch = function (s,p) {
    if(!p) return !s
    const first_match = !!(s.charAt(0)&&(s.charAt(0)===p.charAt(0)||p.charAt(0)==='.'))
    if(p.length>=2&&p.charAt(1)==='*'){
        return isMatch(s,p.slice(2))|| (first_match&&isMatch(s.slice(1),p))
    }else {
        return first_match&&isMatch(s.slice(1),p.slice(1))
    }
}
console.log(isMatch("aa","a"))
console.log(isMatch("aa","aa"))
console.log(isMatch("aaa","aa"))
console.log(isMatch("aa", "a*"))
console.log(isMatch("aa", ".*"))
console.log(isMatch("ab", ".*"))
console.log(isMatch("aab", "c*a*b"))