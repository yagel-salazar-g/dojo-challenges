let ma = new Map();

function primeFactorize(a) {
    for (let i = 2; i * i <= a; i += 2) {
        let cnt = 0;
        while (a % i == 0) {
            cnt++;
            a = parseInt(a / i, 10);
        }
        ma.set(i, cnt);
    }
    if (a > 1) {
        ma.set(a, 1);
    }
}

function commDiv(a, b) {

    primeFactorize(a);

    let res = 1;

    ma.forEach((values, keys) => {
        let cnt = 0;
        let key = keys;
        let value = values;

        while (b % key == 0) {
            b = parseInt(b / key, 10);
            cnt++;
        }

        res *= (Math.min(cnt, value) + 1);
    })
    return res;
}


let a = 12, b = 24;

document.write(commDiv(a, b));