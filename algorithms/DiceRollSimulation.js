/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
function complete(n, rollMax, sum){
    if(n == 1){
        var count = 0;
        for(i = 0; i < rollMax.length; i++){
            if(rollMax[i] > 0){
                count++;
            }
        }
        return count;
    }
    for(j = 0; j < rollMax.length; j++){
        if(rollMax[j] > 0){
            var arr = rollMax.map((x) => x);
            arr[j]--;
            sum += complete(n-1, arr);
        }
    }
    return sum;
}

var dieSimulator = function(n, rollMax) {
    var roll = complete(n, rollMax, 0);
    return roll % (Math.pow(10, 9) + 7);
};
