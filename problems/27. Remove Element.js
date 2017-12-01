/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j = 0
    for (var i = 0; i < nums.length; i++) {
        if(nums[i]!==val){
            nums[j] = nums[i]
            j++
        }
    }
    nums.splice(j)
    return j
};
console.log(removeElement([3,4,3,1,2,2,3],3))