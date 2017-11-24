/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    const openBracket = ['(','{','[']
    const closeBracket = [')','}',']']
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i)
        if(openBracket.includes(char)){
            stack.push(char)
        }else if(closeBracket.includes(char)){
            if(stack.pop()!==bracketMap[char]){
                return false
            }
        }
    }
    return stack.length === 0
};
console.log(isValid("{}{}"))
console.log(isValid("{{}}(){}"))
console.log(isValid("{[}]"))

