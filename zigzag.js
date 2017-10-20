/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1) return s
    const arr = Array(numRows).fill('')
    const step = numRows-1
    let x = 1;
    let change = -1
    for (let i=0;i<s.length;i++){
        x+=change
        if(i%step===0){
            change = -change
        }
        arr[x] +=s.charAt(i)
    }
    return arr.join('')
};
