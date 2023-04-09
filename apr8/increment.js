function increment(arr){

   let index = arr.length-1;

  
    while(index>=0){
    //  console.log(arr[index]);
       if(arr[index]>=9){
        arr[index] = 0;
       }else{
          arr[index] = arr[index]+1;
          break;
       }
      index--
    }
  if(index==-1){
    arr.unshift(1);
  }

  return arr;
  
}

let ans  = increment([9,9,9]);
console.log(ans);