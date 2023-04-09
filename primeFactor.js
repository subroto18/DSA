function primeFactor(n) {

  let prime = [];
  for (let i = 2; i <= n; i++) {
     while(n%i==0){
        prime.push(i);
        n = n/i;
     }
  }

  return prime;
}

let ans = primeFactor(24);
console.log(ans);