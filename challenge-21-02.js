function findKthLargest(arr, k) {
    let low = Number.POSITIVE_INFINITY;
    let high = Number.NEGATIVE_INFINITY;
 
    for (let i = 0; i < arr.length; i++) {
        low = Math.min(low, arr[i]);
        high = Math.max(high, arr[i]);
    }
 
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let count = 0;
 
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > mid) {
                count++;
            }
        }
 
        if (count >= k) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
 
    return high;
}
 
function printKLargest(arr, k) {
    const kthLargest = findKthLargest(arr, k);
 
    process.stdout.write("K largest elements: ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= kthLargest) {
            process.stdout.write(arr[i] + " ");
        }
    }
}
 
const arr = [12, 5, 787, 1, 23];
const k = 2;
printKLargest(arr, k);