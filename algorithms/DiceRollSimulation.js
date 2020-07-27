/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
function complete(n, rollMax, consecutive) {
    let sum = 0;
    var copy = rollMax.map((x) => x);
    if (consecutive != null) rollMax[consecutive]--;
    if (n == 1) {
        var count = 0;
        for (i = 0; i < rollMax.length; i++) {
            if (rollMax[i] > 0) {
                count++;
            }
        }
        return count;
    }
    var j;
    for (j = 0; j < copy.length; j++) {
        if (rollMax[j] > 0) {
            var arr = copy.map((x) => x);
            if (j == consecutive) {
                arr[j]--;
            }
            sum += complete(n - 1, arr, j);
        }
    }
    return sum;
}

var dieSimulator = function(n, rollMax) {
    let sum = 0;
    var roll = complete(n, rollMax);
    return roll % (Math.pow(10, 9) + 7);
};
