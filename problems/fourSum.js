/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length<4) return []
    nums = nums.sort((a,b)=>a-b)
    let result = []
    const len = nums.length
    for(let i=0;i<len-3;i++){
        let a = nums[i]
        if(i>0&&a===nums[i-1]) continue
        for(let j=i+1;j<len-2;j++){
            let b = nums[j]
            if(j>i+1&&b===nums[j-1]) continue
            let startIndex = j+1
            let endIndex = len-1
            while (startIndex<endIndex){
                let start = nums[startIndex]
                let end = nums[endIndex]
                let sum = a+b+start+end
                if(sum===target){
                    result.push([a,b,start,end])
                    let temp = start
                    while (startIndex<endIndex&&temp===nums[startIndex]){
                        startIndex++
                    }
                    temp = end
                    while (startIndex<endIndex&&temp===nums[endIndex]){
                        endIndex--
                    }
                }else if(sum>target){
                    endIndex--
                }else {
                    startIndex++
                }
            }
        }
    }
    return result
};
console.log( fourSum( [-1,-5,-5,-3,2,5,0,4] ,-7 ))