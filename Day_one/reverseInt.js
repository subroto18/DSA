// Problem Description
// Given a number, return the reverse of that number.

// Input format
// One line of input containing an integer N, the number to be reversed.

// Output format
// Return the reversed number. Note that the number must start with (1-9) digits only unless it is a single digit number.

// Sample Input 1
// 15

// Sample Output 1
// 51

// Constraints
// 0 <= N <= 1000000

// Explanation
// Reverse of 15 is 51.

function reverseInt(num) {
  let ans = 0;
  let digit = num;
  while (digit !== 0) {
    let l_digit = digit % 10;
    ans = ans * 10 + l_digit;
    digit = Math.floor(digit / 10);
  }
  console.log(ans);
}


reverseInt(12340);
