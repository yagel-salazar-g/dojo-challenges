var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b);
    let result = [];
    let dfs = (target, start, temp) => {
        if (target === 0) {
            result.push(temp);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i-1]) continue;
            if (target < candidates[i]) break;
            dfs(target - candidates[i], i + 1, [...temp, candidates[i]]);
        }
    }
    dfs(target, 0, []);
    return result;
};
