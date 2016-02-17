function diff(arr1, arr2) { // The function takes 2 arrays and finds the values that are only present in 1 array and not both.
  var newArr = []; // an empty array is created and stored in variable newArr
  for (var i = 0; i < arr1.length; i++) { // a for loop goes through arr1
    if (arr2.indexOf(arr1[i]) === -1) { // this checks if there are any values in arr2 that are not present (index of -1) in arr1 and..
      newArr.push(arr1[i]); // pushes those values into newArr
    }
  } 
  for (var j = 0; j < arr2.length; j++) { // a second for loop does the same as the first, but for arr2
    if (arr1.indexOf(arr2[j]) === -1) { // this checks if there are any values in arr1 that are not present (index of -1) in arr2 and..
      newArr.push(arr2[j]); // pushes them into newArr
    }
	}
  return newArr; // newArr is then returned, and it should have the values from each array that are not present in the other
}
