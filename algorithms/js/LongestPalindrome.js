/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // if odd amoung of chars, start from s.length/2
    // if even amount of chars, start from s.length/2 and (s.length/2)-1
    // make the "mid" every char in the string
    
    var length_of_palindrome = function(s, left, right){
        while(left >= 0 && right < s.length && (s[left] == s[right])){
            left--;
            right++;
        }
        var result = s.slice(left+1, right);
        return result;
    }
    
    var longest = '';
    for(i = 0; i < s.length; i++){
        var odd = length_of_palendrome(s, i, i);
        var even = length_of_palendrome(s, i, i+1);
        if(odd.length > longest.length) longest = odd;
        if(even.length > longest.length) longest = even;
    }
    return longest;
};
