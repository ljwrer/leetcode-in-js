/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const medianIndex = Math.floor((totalLength) / 2);
    let i = 0;
    let j = 0;
    let value1, value2;
    while (i + j <= medianIndex) {
        if (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                value2 = value1;
                value1 = nums1[i++];
            } else {
                value2 = value1;
                value1 = nums2[j++];
            }
        } else if (i < nums1.length) {
            value2 = value1;
            value1 = nums1[i++];
        } else if (j < nums2.length) {
            value2 = value1;
            value1 = nums2[j++];
        }
    }
    if (totalLength % 2) {
        return value1
    } else {
        return (value1 + value2) / 2
    }
};
console.log(findMedianSortedArrays([1, 3, 5, 8], [-1, 2]))
