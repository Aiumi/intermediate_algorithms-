function sumAll(arr) { // the function takes in an array of 2 numbers and finds the sum of all the numbers (inclusive) between them
  var arrMin = Math.min(arr[0], arr[1]); // Math.min takes the smallest number out of arr's 2 elements
  var arrMax = Math.max(arr[0], arr[1]); // Math.max takes the largest number out of arr's 2 elements
  var add = 0; // a variable is created and set to 0
  for (var i = arrMin; i <= arrMax; i++) { // a for loop starts with arrMin and runs as long as it is smaller or equal to arrMax
    add += i; // i increments up by 1 each time, and is added to the variable add
  }
	return add; // add is returned with the sum of all the number between arrMin and arrMax
}

sumAll([1, 4]); // enter the array here
