/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 1) return 1;
    var mapOfString = new Array(52).fill(false);
    
    var max = 0;
    var current_count = 0;
    for(j = 0; j < s.length; j++){
        chars = s.substring(j); //chard is really a substring
        for(i = j; i < chars.length; i++){
            if(mapOfString[chars.charCodeAt(i) - 65] == true){
                mapOfString.fill(false);
                mapOfString[chars.charCodeAt(i) - 65] = true;
            
                if(current_count > max){
                    max = current_count;
                }
                current_count = 1;// start the count over
            }
            else{
                mapOfString[chars.charCodeAt(i) - 65] = true;
                current_count++;
            }
        }
    }
    return max;
};
