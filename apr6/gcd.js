function common(a, b) {

  for(let i = a>b ? a: b; i>0 ;i-- ){
    if(a%i==0 && b%i==0){
      return i;
    }
  }
  return 0;

}

let ans = common(12, 18);

console.log(ans);

