let nums = [];
let curr = [];
let ans = [];
let visited = [];

function backtrack() {

    if (curr.length == nums.length) {
        ans.push(curr);
        for (let i = 0; i < curr.length; i++) {
            document.write(curr[i] + " ");
        }
        document.write("<br>");
    }

    for (let i = 0; i < nums.length;
        i++) {

        if (visited[i])
            continue;

        if (i > 0 && (nums[i] == nums[i - 1]) && !visited[i - 1])
            continue;

        visited[i] = true;

        curr.push(nums[i]);

        backtrack();

        visited[i] = false;

        curr.pop();
    }
}

function permuteDuplicates() {
    (nums).sort(function (a, b) { return a - b });

    for (let i = 0; i < nums.length; i++) {
        visited.push(false);
    }

    backtrack();

    return ans;
}

function getDistinctPermutations() {
    ans = permuteDuplicates();
}

nums.push(1);
nums.push(2);
nums.push(2);

getDistinctPermutations();

