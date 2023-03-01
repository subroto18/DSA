// aProblem Description
// Given a number N, you have to print all the odd numbers upto N in increasing order.

// Input format
// One line of input, containing an integer - N.

// Output format
// Print the numbers space-separated in a single line in increasing order.

// Sample Input 1
// 5

// Sample Output 1
// 1 3 5

// Constraints
// 1 <= N <= 100

function oddNum(n){
   for(let i = 1 ;i<=n;i++){
      if(checkOdd(i)){
         console.log(i); 
      }

   }
}
function checkOdd(num){
  if(num%2!==0){
    return true
  }
  return false;
}


let ans = oddNum(10);
