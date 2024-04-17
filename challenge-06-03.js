function print(a, n) {
    for (var i = 0; i < n; i++)
        document.write(a[i] + " ");
}

function rearrangeArray(a, n) {
    if (n % 2 == 0) {

        for (var i = 0; i < n - 1; i += 2) {
            a[i] = a[i] ^ a[i + 1];

            a[i + 1] = a[i] ^ a[i + 1];

            a[i] = a[i] ^ a[i + 1];
        }
    }
    else {
        for (var i = 0; i < n - 3; i += 2) {
            a[i] = a[i] ^ a[i + 1];

            a[i + 1] = a[i] ^ a[i + 1];

            a[i] = a[i] ^ a[i + 1];
        }

        a[n - 1] = a[n - 1] ^ a[n - 2] ^ a[n - 3];

        a[n - 2] = a[n - 1] ^ a[n - 2] ^ a[n - 3];

        a[n - 3] = a[n - 1] ^ a[n - 2] ^ a[n - 3];

        a[n - 1] = a[n - 1] ^ a[n - 2] ^ a[n - 3];
    }

    print(a, n);
}

var arr = [1, 2, 3, 4, 5];
var n = arr.length;

rearrangeArray(arr, n);
