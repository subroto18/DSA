// Problem Description
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note:

// For the purpose of this problem, we define empty string as valid palindrome.

// Input format
// A single line that contains the string S.

// Output format
// Print "true"(without quotes) if it is valid Palindrome "false"(without quotes) otherwise.

// Sample Input 1
// A man, a plan, a canal: Panama

// Sample Output 1
// true

// Explanation 1
// The given string is palindrome when considering only alphanumeric characters.

// Sample Input 2
// race a car

// Sample Output 2
// false

// Explanation 2
// The given string is not a palindrome when considering alphanumeric characters.

// Constraints
// 1 <= length(S) <= 1000




// function checkPalindrome(str){
//    let newstr = str.split("").reverse().join("");

//   if(str!==newstr){
//     return false
//   }
//   return true;
// }

function checkPalindrome(str){
   let left = 0;
   let right = str.length-1;

   let alpha  = str.charCodeAt(0);



   while(left<right){
     
     if(str[left]!==str[right]){
       return false
     }
    left++;
    right--;
  }
//  console.log(left,right);
  return true;
}

function preparePalindromeSentence(str) {
  let newStr = "";
  
  for(let i = 0; i<str.length;i++){
    if(isAlphaNumeric(str[i])){
      newStr += newStr;
    }
  }
 return checkPalindrome(newStr);
}

function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};
let ans = preparePalindromeSentence("dad");

console.log(ans);

