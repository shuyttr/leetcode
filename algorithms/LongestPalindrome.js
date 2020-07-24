/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // if odd amoung of chars, start from s.length/2
    // if even amount of chars, start from s.length/2 and (s.length/2)-1
    // make the "mid" every char in the string
    for(i = 0; i < s.length; i++){
        //one letter center
        var odd = length_of_palendrome(s, i, i)
        //two letter center
        var odd = length_of_palendrome(s, i, i+1) 
    }
    
    // a single char is a palindrome with itself
    // move "right" and move "left", and compare if they equal,
    // if not equal, then see if either is same as middle
    
    // if not equal, nor same as mid, then recursively make those the mid
};

function length_of_palendrome(s, left, right){
    //while the string is not out of bounds, ON BOTH ENDS, and while left and right equal each other, continue moving out
    while()
}
