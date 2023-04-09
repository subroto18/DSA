function fibonacci(n){

   let fibo_num = [1,1];
   let x  = 0;
   let y = 1;
   let z = x+y;
   for(let i = 1; i<=n;i++){
      x = y;
      y = z;
      z = x+y
     fibo_num.push(z)
     
}

  return fibo_num;
}
let ans = fibonacci(5);


console.log(ans);

