/**
 * @param {string} s
 * @return {number}
 */

/* Sliding Window: Use a Set to place all the visited letters,
 * then check while moving "left" if the hovered letter is in the set calling Set.has(element)
 * and increase count until Set.has(element) returns true and then move the "left" pointer right
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let i = 0, j = 0, max = 0;
    let current_count = 0;
    while(i < s.length && j < s.length){
        if(set.has(s[j])){
            set.delete(s[i]);
            i++;
            current_count--;
        }
        else{
            set.add(s[j]);
            j++;
            current_count++;
            if(current_count > max) max = current_count;
        }
    }
    return max;
};
