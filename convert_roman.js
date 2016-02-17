function convert(num) { // the function takes in a number and converts it to its corresponding roman numeral  
  var roman = "", // an empty string is stored in variable roman
  key = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"], // an array of roman numerals, key
  ref = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; // an array of numbers corresponding to the above roman numerals, ref
  for (var i = 0; i < key.length; i++) { // a for loop goes through the array of roman numerals
    while (num >= ref[i]) { // inside the for loop, a while loop runs as long as num is greater or equal to the current value in ref
      roman += key[i]; // if it is, then that current value in key is added into roman
      num -= ref[i]; // then, the ref value is subtracted from num and the while loop checks its condition again
    }
  }   
 return roman;
}

convert(36);
