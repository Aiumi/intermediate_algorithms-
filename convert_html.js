function forEach(array, cb){ // simple forEach function that applies a callback to each item in the array
  for (var i = 0; i < array.length; i++){
    cb(array[i]);
  }
}

function convert(str) { // function takes a string and replaces invalid html elements with valid ones
  var replacements = [[/&/g, "&amp;"], [/"/g, "&quot;"], [/</g, "&lt;"], [/>/g, "&gt;"], [/'/g, "&apos;"]]; // this array stores subarrays, each with the item to be replaced(index 0) and the item to replace it with(index 1)
  forEach(replacements, function(replace){ // the forEach is called here on the replacements array with the callback taking replace 
    str = str.replace(replace[0], replace[1]); // the function looks for all the invalid items that match the first items in replacements and replaces them with the second items. This string is then set as the new string
  });
  return str; // the string is returned
}

convert("Dolce & Gabbana");
