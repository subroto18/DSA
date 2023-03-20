
// give a unsorterd array make it sorted

function sort(arr){
  return acendingOrderFun(arr);
}

function acendingOrder(arr){
   for(let i = 0 ;i<arr.length-1;i++){
     for(let j  = i+1;j<arr.length;j++){
       if(arr[i]>arr[j]){
         let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
       }
     }
   }
  return arr;
}

function acendingOrderFun(arr){
  return arr.sort((a,b)=>{
    return b-a;
  });
}

function decendingOrder(arr){
  
}



let ans = sort([2,3,4,1,5,6]);

console.log(ans);