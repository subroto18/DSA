function sum(arr,n){
    // for(let i = 0;i<arr.length;i++){
    //   for(let j = 0; j<arr.length;j++){
    //     if(arr[i]+arr[j]==n){
    //       return [i,j]
    //     }
    //   }
    // }

  let start = 0;
  let end = arr.length-1;

  while(start<end){
    if(arr[start]+arr[end]==10){
      return [start, end]
    }else{
      if(arr[start]+arr[end]>10){
        end--
      }else{
        start++;
      }
    }
  }
  
}


let ans = sum([3,4,5,6,7,8,9],10);
console.log(ans);