// Problem Description
// Given 3 numbers a,b,c. Find the largest among them.

// Note : No inbuilt function to be used to find the maximum.

// Input format
// First line contains 3 space separated numbers - a, b, c

// Output format
// Print the largest number.

// Sample Input 1
// 2 4.5 3

// Sample Output 1
// 4.5

// Constraints
// -100 < a,b,c < 100

function findLargeNum(a, b, c) {
  let large = 0;

  if (a > b && a > c) {
    large = a;
  } else if (b > a && b > c) {
    large = b;
  } else {
    large = c;
  }

  return large;
}

let ans = findLargeNum(5.4, 2, 3);
console.log(ans);