/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left = 0;
    var right = 0;
    var maxArea = 0;

    while (right < height.length && left < height.length) {
        var area = Math.min(height[right], height[left]) * (right - left);
        if (area > maxArea) maxArea = area;
        if (height[right] > height[left]) left++;
        right++;
    }
    return maxArea;
};