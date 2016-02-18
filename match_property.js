function where(collection, source) { // the function takes in an array of objects (collection) and object properties (source)
  var arr = collection.filter(function(item) { // this filters collection with a function that takes the parameter item
    for (var i in source) { // a for loop goes through source
      if (source[i] != item[i]) { // this checks if any values in source are NOT equal to values in item
        return false; // if so, then it returns false
      }
    }
    return true; // otherwise, it returns true
  });
  return arr; // arr is then returned with only the true values, or the matching values
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/* ALTERNATIVE METHOD
function where(collection, source) {
  var arr = [];
  var key = Object.keys(source);
  for (var name in collection) {
    var x = 0;
    for (var i = 0; i < key.length; i++) {
      if (collection[name][key[i]] === source[key[i]]) {
        x = x + 1;
      }
  	}
    	if (x === key.length) {
        arr.push(collection[name]);
      }
  }
    return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
*/
