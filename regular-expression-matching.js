/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const pList = []
    for(let i =0;i<p.length;i++){
        const next = p.charAt(i+1)
        if(next&&next!=='*'){
            pList.push(p.charAt(i))
        }else{

        }
    }
};