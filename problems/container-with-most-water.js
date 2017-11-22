/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let l = 0;
    let r = height.length-1;
    while (l<r){
        max = Math.max((r-l)*Math.min(height[l],height[r]),max)
        if(height[l]>height[r]){
            r--
        }else {
            l++
        }
    }
    return max
};
console.log(maxArea([1,2,4,3]))