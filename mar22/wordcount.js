// Problem Description
// While practicing DSA you came across yet another simple string problem. You will be given a string (sentence) which might have space in between and also an array of words (words). You have to return the number of words from the array words which appears at least once in the given sentence.

// Note - It is guaranteed that between any two words there is only a single space and the sentence consists of lower case letters only.

// Input format
// First line contains the string sentence.

// Second line contains a single integer n.

// Third line contains n space seperated strings (words array).

// Output format
// Return a single integer denoting the number of words from the array that is present in the sentence.

// Sample Input 1
// one two three four five

// 3

// six seven eight

// Sample Output 1
// 0

// Explanation1
// sentence consists of words - one, two, three, four, and five. None of the words present in the words array is present in the sentence. Thus the answer is 0.

// Sample Input 2
// there is a cat rabbit and another rabbit

// 2

// cat dog

// Sample Output 2
// 1

// Explanation2
// sentence consists of words - there, is, a, cat, rabbit, and, another, rabbit. The word cat is present in the sentence. Hence the answer is 1.

// Constraints
// 1 <= |sentence| <= 100

// 1 <= |n| <= 100


function countWords(sentence, n, words) {

  let wordsInSentence = sentence.split(" ");
  let checkinWord = words.split(" ");
  let matchingCount = [];
  

  for (let i = 0; i < wordsInSentence.length; i++) {
    for (let j = 0; j < n; j++) {
      if (wordsInSentence[i] == checkinWord[j]) {
               if(matchingCount.indexOf(checkinWord[i])==-1){
                 matchingCount.push(checkinWord[i]);
               }
      }
    }
  }

  console.log(matchingCount);

  return matchingCount.length;

}

let sentence = "one two three four five one two three four five one two three four five one two three four five one two three four five one two three four five one two three four five one two three four five"
let count = 5;
let words = "six seven eight one two"

let ans = countWords(sentence, count,words);

console.log(ans,'ans');


