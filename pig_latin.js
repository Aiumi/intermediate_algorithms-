function translate(str) {

  var re = /[^aeiou]/;  
  var vowels = ["a", "e", "i", "o", "u"];
  var strArr = str.split("");  
  if (!str.charAt(0).match(re)) {
    return str + "way";
  }  
  else {
    var len = strArr.length;    
    for (var i = 0; i < len; i++) {
     if(str[i].match(re)) {
       var letter = strArr.shift();
       strArr.push(letter);        
     } else {
        return strArr.join("") + "ay";       
     }     
    }
  }
}

translate("consonant");
