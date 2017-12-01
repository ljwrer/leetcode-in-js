/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let sign
    if ((dividend > 0 && divisor > 0)||(dividend<0&&divisor<0)) {
        sign = 1
    }else if((dividend > 0 && divisor < 0)||(dividend<0&&divisor>0)){
        sign = -1
    } else if(dividend===0){
        return 0
    }else {
        return  Number.MAX_VALUE
    }
    dividend = dividend>0?dividend:-dividend
    divisor = divisor>0?divisor:-divisor
    if(dividend<divisor) return 0
    let result = 0
    if(divisor===1){
        result = dividend
    }else {
        while (dividend>=divisor){
            let n = 0
            let tmp  = divisor;
            while (tmp<=dividend&&tmp<tmp<<1){
                tmp = tmp<<1
                n++
            }
            if(tmp>dividend){
                tmp = tmp>>1
                n--
            }
            dividend -= tmp
            result += 1<<n
        }
    }
    if(result>Number.MAX_VALUE){
        result = Number.MAX_VALUE
    }
    result = sign>0?result:-result
    if(result>2147483647){
        result = 2147483647
    }
    if(result<-2147483648){
        result = -2147483648
    }
    return result
}
console.log(divide(-2147483648,-1))