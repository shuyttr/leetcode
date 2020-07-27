/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
/*function complete(n, rollMax, consecutive) {
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
            var ways = copy.map((x) => x);
            if (j == consecutive) {
                ways[j]--;
            }
            sum += complete(n - 1, ways, j);
        }
    }
    return sum;
}*/

function complete(n, rollMax) {
    var ways = new Array(n + 1);
    for (var i = 0; i < ways.length; i++) {
        ways[i] = new Array(6); //each seperate roll has six possibilities
    }

    for (var a = 0; a < 6; a++) {
        for (var len = 1; len <= Math.min(n, rollMax[a]); len++) {
            ways[len][a]++;
        }
    }

    for (var j = 0; j < n; j++) {
        for (var prv = 0; prv < 6; prv++) {
            for (var nxt = 0; nxt < 6; nxt++) {
                if (prv == nxt) {
                    continue;
                }
                for (var len = 1; len <= rollMax[nxt] && i + len <= n; len++) {
                    ways[i + len][nxt] += ways[i][prv];
                }
            }
        }
    }

    var answer = 0;
    for (var k = 0; k < 6; k++) {
        answer += ways[n][a];
    }
    return answer;
}

var dieSimulator = function(n, rollMax) {
    let sum = 0;
    var roll = complete(n, rollMax);
    return roll % (Math.pow(10, 9) + 7);
};

dieSimulator(3, [1, 1, 1, 2, 2, 3]);