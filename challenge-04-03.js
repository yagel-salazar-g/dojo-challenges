var letterTally = function(str, obj) {
    var length = str.length;
    var current = str.charAt(0);
  
    if (length === 0) {
      return obj;
    } else if (obj[current]) {
      obj[current] ++;
    } else {
      obj[current] = 1;
    }
  
    return letterTally(str.slice(1), obj);
  
  };
  
  document.write(JSON.stringify(letterTally('potato', {}), null, 2));