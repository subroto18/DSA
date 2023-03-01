
// Description
// Assessment
// Problem Description
// Given a number n, you have to print a diamond-shaped pattern with 2n-1 rows using '*', with the i’th row having i asterisks for i <= n and 2n-i asterisks for i > n. (i starts at 1)

// For eg. if n = 5, the pattern will be:


let n = 0;
let pattern = "";
for(let i = 0; i<n;i++){
  for(let j = 0; j<=i;j++){
    patter += "*"; 
  }
}
return pattern;
;