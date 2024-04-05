const plusMinus = (arr) => {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        positiveCount++;
      } else if (arr[i] < 0) {
        negativeCount++;
      } else {
        zeroCount++;
      }
    }
    const positiveFraction = positiveCount / arr.length;
    const negativeFraction = negativeCount / arr.length;
    const zeroFraction = zeroCount / arr.length;
    console.log(positiveFraction.toFixed(6));
    console.log(negativeFraction.toFixed(6));
    console.log(zeroFraction.toFixed(6));
  };
  // Example usage
  const numbers = [-1, 2, 0, -3, 4, 0];
  plusMinus(numbers);