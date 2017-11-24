/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>a-b)
    let offset = Infinity;
    let result
    const len = nums.length
    for(let i=0;i<len-2;i++){
        if(i>0&&nums[i]===nums[i-1]) continue
        let start = i+1
        let end = len-1
        let temp
        while (start<end){
            const sum = nums[i]+nums[start]+nums[end]
            if(sum===target){
                return sum
            }else {
                const curOffset = Math.abs(sum-target)
                if(curOffset<offset){
                    offset = curOffset
                    result = sum
                }
                if(sum>target){
                    temp = nums[end]
                    while (start<end&&temp===nums[end]){
                        end--
                    }
                }else {
                    temp = nums[start]
                    while (start<end&&temp===nums[start]){
                        start++
                    }
                }
            }
        }
    }
    return result
};
const a = [-1,2,1,-4]
const b = 1
console.log(threeSumClosest(a,b))
