// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.


function common(str) {

  let uniqueStr = new Set();
  let maxLength = 0;
  let start = 0;
  let end = 0;

  while(end<str.length){
    
    if(!uniqueStr.has(str[end])){
      uniqueStr.add(str[end]);
      end++;
      maxLength = Math.max(maxLength,uniqueStr.size);
    }else{
       uniqueStr.delete(str[start]);
      start++
    }
  }


  return maxLength;

}

let ans = common("pwwkew");

console.log(ans);