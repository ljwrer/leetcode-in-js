/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const switchValue = function (i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    if(nums.length===1) return
    if(nums.length===2){
        switchValue(0,1)
        return
    }
    const len = nums.length
    let cursor = 2
    while (cursor <= len) {
        const val = nums[len - cursor]
        let i = cursor - 1
        while (i >= 1) {
            if (val >= nums[len - i]) {
                switchValue(len - i -1, len - i)
            } else {
                let temp = nums[len - i]
                for (let j = i; j <= cursor - 1; j++) {
                    nums[len - j] = nums[len - j - 1]
                }
                nums[len - cursor] = temp
                return
            }
            i--
        }
        cursor++
    }
};
const nums = []
nextPermutation(nums)
console.log(nums)


/**
 *    1 2 3 4
 *    1 2 4 3
 *    1 3 2 4
 *    1 3 4 2
 *    1 4 2 3
 *    1 4 3 2
 *    2 1 3 4
 *    2 1 4 3
 *    2 3 1 4
 *    2 3 4 1
 *    2 4 1 3
 *    2 4 3 1
 *    3 1 2 4
 *    3 1 4 2
 *    3 2 1 4
 *    3 2 4 1
 *    3 4 1 2
 *    3 4 2 1
 *    4 1 2 3
 *    4 1 3 2
 *    4 2 1 3
 *    4 2 3 1
 *    4 3 1 2
 *    4 3 2 1
 *
*      4 3 2 5 1
 *      4 3 2 1 5
 *      4 3 1 2 5
 *      4 3 5 1 2
 */