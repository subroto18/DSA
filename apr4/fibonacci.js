function fibonacci(n){

  let arr = [0,1];

  for(let i=  2; i<=n;i++){
     arr.push(arr[i-1]+arr[i-2]);
  }
  return arr;
  
}

let ans = fibonacci(10);
console.log(ans)

function fibonacci(n){
  if(n<=1){
    return n
  }

  return fibonacci(n-1) + fibonacci(n-2);
  
}