/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var lo = 0;
    var hi = 0;
    var result = [];
    var count = 0;
    var i = 0;
    while(hi < chars.length){
        while(chars[lo] === chars[hi]){
            count++;
            hi++;
        }
        result[++i] = chars[lo];
        result[i+1] = count;
        count = 0;
        lo = hi;
    }
    return result;
};
