function swap(a,b){
  b = b-a;
  a = a+b;
  b = a-b;

  console.log(a,b);
}


let ans = swap(10,20);
console.log(ans)