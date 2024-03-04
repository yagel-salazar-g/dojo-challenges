function characterFrequency (string) {
    var charFreq = {};
    var result = [];

    for(var i = 0; i < string.length; i++) {

        var character = string.charAt(i);

     if(charFreq[character]) {

        charFreq[character]++;
     } else {

        charFreq[character] = 1;
     }
    }

    for (var key in charFreq) {
     result.push([key, charFreq[key]])
    }

    result.sort(function(a, b) {
     if (a[1] > b[1]) return -1;
     if (a[1] < b[1]) return 1; 
     if (a[1] === b[1]) {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
     }
     return 0;
    });

  return result;

  }
