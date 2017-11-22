var myAtoi = function(str) {
    let r = parseInt(str);
    r = r?r:0;
    r = r>2147483647?2147483647:r;
    r= r<-2147483648?2147483648:r;
    console.log(r)
    return r
};
myAtoi('2147483648')