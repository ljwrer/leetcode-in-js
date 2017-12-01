/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length<2){
        return nums.length;
    }
    let i = 1,j = 1,temp = nums[0];
    while(j<nums.length){
        if(nums[j]!== temp){
            temp = nums[j];
            nums[i] = temp;
            i++;
        }
        j++;
    }
    nums.splice(i)
    return i;
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,3]))
