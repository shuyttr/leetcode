/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let i = 0, j = 0, total = 0;
    for(var singles = 0; singles < nums.length; singles++){
        if(nums[singles] < k){
            total++;
        }
    }
    
    while(i < nums.length && j < nums.length){
        if(i == j){
            // a "single", which has been counted
            j++;
            continue;
        }
        var multiply = 1;
        for(var p = i; p <= j; p++){
            multiply *= nums[p];
        }
        if(multiply < k){
            total++;
            if(j + 1 != nums.length){
                j++;
            } else{
                //stop j at end of array and continue moving up i
                i++;
            }
        } else{
            i++;
        }
    }
    
    return total;
};
