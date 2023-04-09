// Problem Description
// You are given a string S and you have to implement a function to perform basic string compression, using the counts of repeated characters.

// If the "compressed" string would not become smaller than the original string, your function should return the original string.

// You can assume the string has only uppercase and lowercase letters (a - z).


// Input format
// A single line that contains the string S.


// Output format
// A single line that represents the compressed string as specified in the problem.


// Sample Input 1
// aabccccc


// Sample Output 1
// a2b1c5


// Explanation 1
// First 'a' repeats two times, then 'b' repeats once, then 'c' repeats two times.


// Constraints
// 1 <= length(S) <= 100000



function comporess(str) {
  let strArr = str.split("");

  const counts = {};

  strArr.forEach((el) => {
    counts[el] = counts[el] ? (counts[el] + 1) : 1;
  });

  let compressStr = "";
  
    for (const key in counts) {
      compressStr += key+counts[key]
  }


  if(str.length<compressStr.length){
    return str;
  }

  return compressStr;

}


let ans = comporess('aaaaaa');

console.log(ans);