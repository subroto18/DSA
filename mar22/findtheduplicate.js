// Problem Description
// Given an array num containing n + 1 integers, where each integer is between 1 and n (inclusive), hence at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Input format
// First-line will contain an integer n.

// Next line will contain n+1 space-separated integers.

// Output format
// Print the duplicate number found in the list.

// Sample Input 1
// 5

// 2 4 5 3 1 5

// Sample Output 1
// 5

// Explanation 1
// 5 is the duplicate in the array

// Sample Input 2
// 7

// 3 6 1 5 7 4 2 5

// Sample Output 2
// 5

// Explanation 2
// 5 is the duplicate in the array

// Constraints
// 0<= n <=1000000

function findTheDuplicateNumber(nums) {

  let matchNum;

  for(let i = 0; i<nums.length-1;i++){
    for(let j = i+1;j<nums.length;j++){
      if(nums[i]===nums[j]){
        matchNum = nums[i];
      }
    }
  }
    
    return matchNum;
}

let ans =  findTheDuplicateNumber([1,2,2,3,4,5]);
console.log(ans);
