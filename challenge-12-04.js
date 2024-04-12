class Pair {
    constructor(x, y) {
        this.index1 = x;
        this.index2 = y;
    }
}

function GetQuadruplets(nums, target) {

    let map = new Map();

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            let sum = nums[i] + nums[j];

            if (!map.has(sum)) {
                let temp = [];
                let p = new Pair(i, j);
                temp.push(p);

                map.set(sum, temp);
            }

            else {
                let temp = map.get(sum);

                let p = new Pair(i, j);
                temp.push(p);

                map.set(sum, temp);
            }
        }
    }

    let ans = new Set();

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let lookUp = target - (nums[i] + nums[j]);

            if (map.has(lookUp)) {

                let temp = map.get(lookUp);

                for (let pair of temp) {

                    if (pair.index1 !== i && pair.index1 !== j && pair.index2 !== i && pair.index2 !== j) {
                        let l1 = [nums[pair.index1], nums[pair.index2], nums[i], nums[j]];

                        l1.sort(function (a, b) {
                            return a - b;
                        });

                        ans.add(l1.join(" "));
                    }
                }
            }
        }
    }

    for (let arr of ans) {
        console.log(arr);
    }
}

let arr = [1, 0, -1, 0, -2, 2];
let K = 0;
GetQuadruplets(arr, K);