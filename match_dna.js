function pair(str) {
    newStr = str.split("");
    newArr = [];
    for (var i = 0; i < str.length; i++) {
        if (newStr[i] == "A") {
            newArr.push(["A", "T"]);
        } else if (newStr[i] == "T") {
            newArr.push(["T", "A"]);
        } else if (newStr[i] == "C") {
            newArr.push(["C", "G"]);
        } else if (newStr[i] == "G") {
            newArr.push(["G", "C"]);
        }
    }
  return newArr;
}

/* ALTERNATIVE METHODS
function pair(str) {
  var pairs = [["A","T"], ["T", "A"], ["C", "G"], ["G", "C"]];
  function findLover(letter) {
    return pairs.filter(function(pair) {
      return pair[0] === letter;
    });
  }
  return str.split("").map(findLover).reduce(function(a,b) { return a.concat(b); });
}

function pair(str) {
  var pairs = ["AT", "TA", "CG", "GC"]; 
  var newArr = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < pairs.length; j++) {
      if (str.charAt(i) === pairs[j].charAt(0)) {
        newArr.push(pairs[j].split(""));
      }  
    }
  }   
  return newArr;
}

function pair(str) {
  var pairs = ["AT", "CG"]; 
  var newArr = [];
  for(var i = 0; i < str.length; i++) {
    for(var j = 0; j < pairs.length; j++) {
      if(pairs[j].indexOf(str.charAt(i)) === 0) {
        newArr.push(pairs[j].split(""));
      }
      else if(pairs[j].indexOf(str.charAt(i)) == 1) {
        newArr.push(pairs[j].split("").reverse());
      }
    }
  }   
  return newArr;
}
*/
