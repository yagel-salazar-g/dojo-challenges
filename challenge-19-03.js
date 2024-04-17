function firstEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count % 2 == 0) {
            return arr[i];
        }
    }
    return 0;
}
const arr = [2, 4, 6, 8, 1, 6];
console.log(firstEven(arr));