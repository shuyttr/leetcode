/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x == 0) return true;
    var lookup = new Array(10).fill(0);
    while(x > 0){
        if(lookup[x % 10] > 0){
            lookup[x % 10]--;
        } else{
            lookup[x % 10]++;
        }
        x /= 10;
    }
    
    //go thru all elements, and only one index can have > 0
    var count = 0;
    for(i = 0; i < lookup.length; i++){
        if(lookup[i] > 0){
            count++;
            if(count > 1){
                return false;
            }
        }
    }
    return true;
};
