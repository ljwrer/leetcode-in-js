/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const digitMap = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    const output = function(letterList){
        if(letterList.length===0) return []
        if(letterList.length===1) return [].map.call(letterList[0],letter=>letter)
        const first = letterList[0]
        const second = letterList[1]
        const result = [].reduce.call(first,(prev,firstLetter)=>prev.concat([].map.call(second,secondLetter=>firstLetter+secondLetter)),[])
        return output([result].concat(letterList.slice(2)))
    }
    return output([].map.call(digits,digit=>digitMap[digit]))
};
console.log(letterCombinations("2335"))