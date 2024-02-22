/*
    Given a total due and an array representing the amount of change in your pocket, determine whether or not you are
    able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

    To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and
    0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

    changeEnough([25 cents, 10 cents, 5 cents, 1 cent], price)
*/

export function changeEnough(money: number[], price: number) {
    const totalChange = (money[0] * 25 + money[1] * 10 + money[2] * 5 + money[3]) / 100;
    return totalChange >= price;
}

console.log('Test 1 ...', changeEnough([2, 100, 0, 0], 14.11)); // false
console.log('Test 2 ...', changeEnough([0, 0, 20, 5], 0.75)); // true
console.log('Test 3 ...', changeEnough([30, 40, 20, 5], 12.55)); // true
console.log('Test 4 ...', changeEnough([10, 0, 0, 50], 3.85)); // false
console.log('Test 5 ...', changeEnough([1, 0, 5, 219], 19.99)); // false
