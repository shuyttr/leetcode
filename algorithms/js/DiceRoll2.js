/**
 * I am solving for the same problem as DiceRollSimulation.js
 * This is the code after I have watched 
 * https: //www.youtube.com/watch?v=q6RlnBltE4E
 */
function complete(n, rollMax, lastNumber, lastNumberConsecutive) {
    if (n == 0) {
        return 1;
    }
    var sum = 0;
    var i = 0;
    for (i = 0; i < 6; i++) {
        var limit = rollMax[i];
        //check if we have consecutive, and one more consecutive would push it over the limit
        if (i == lastNumber && limit + 1 > lastNumberConsecutive) {
            //do not go further in this loop
            continue;
        }
        sum += complete(n - 1, rollMax, i, (i == lastNumber) ? lastNumberConsecutive + 1 : 1);
        sum %= 1000000007;
    }
    return sum;
}

var dieSimulator = function(n, rollMax) {
    var roll = complete(n, rollMax, 0, 0);
    return roll;
}