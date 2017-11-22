/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map()
    for(var i=0;i<nums.length;i++){
        var item = nums[i];
        var complement = target - item;
        if(map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(item,i)
    }
};
module.exports = twoSum
console.log(twoSum([0,2,3,3],6))