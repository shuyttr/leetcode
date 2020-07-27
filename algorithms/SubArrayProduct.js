/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0;
    var product = 1;
    var result = 0;
    var left = 0;
    for(var right = 0; right < nums.length; right++){
        product *= nums[right];
        while(product >= k) product /= nums[left++];
        result += right - left + 1;
    }
    return result;
};
