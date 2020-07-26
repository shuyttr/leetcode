/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
function complete(n, rollMax, consecutive, sum) {
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
    for (j = 0; j < rollMax.length; j++) {
        if (rollMax[j] > 0) {
            var arr = rollMax.map((x) => x);
            sum += complete(n - 1, copy, j);
        }
    }
    return sum;
}

var dieSimulator = function(n, rollMax) {
    let sum = 0;
    var roll = complete(n, rollMax);
    return roll % (Math.pow(10, 9) + 7);
};

dieSimulator(3, [1, 1, 1, 2, 2, 3]);