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

/* ALTERNATIVE METHOD
function pair(str) {
  var pairs = [["A","T"], ["T", "A"], ["C", "G"], ["G", "C"]];
  function findLover(letter) {
    return pairs.filter(function(pair) {
      return pair[0] === letter;
    });
  }
  return str.split("").map(findLover).reduce(function(a,b) { return a.concat(b); });
}
*/