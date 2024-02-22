/*
    Given a string s, find the length of the longest substring without repeating characters.
*/
function lengthOfLongestSubstring (str) {
    const newStrArr = new Set();
    const strArr = str.split();

    strArr.forEach(e => {
        if (!newStrArr.has(e)) {
            newStrArr.add(e);
        }
    });

    return newStrArr.size;
}

console.log('Test 1', lengthOfLongestSubstring("abcabcbb")) // 3
console.log('Test 2', lengthOfLongestSubstring("bbbbb")) // 1
console.log('Test 3', lengthOfLongestSubstring("pwwkew")) // 3

