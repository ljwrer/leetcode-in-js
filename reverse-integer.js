/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const boundary = Math.pow(2,31)
    const signal = x>0?1:-1
    let s = (x*signal+'').split('')
    s = s.reverse()
    let r = parseInt(s.join(''))
    if((signal>0&&r>boundary-1)||(signal<0&&r>boundary)){
        return 0
    }
    return r*signal
};
reverse(-1000000003)