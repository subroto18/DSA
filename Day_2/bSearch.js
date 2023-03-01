// binary search 

// find 8 from providing array  using binary search

// array = [1,2,3,4,5,6,7,8];

function findNum(arr,x){
   let l = 0;
   let r = arr.length-1;

   while(l<=r){
     let mid = Math.floor((l+r)/2);
     if(arr[mid]===x){
       return arr.indexof(x);
     }else if(arr[mid]<x){
        l = mid+1;
     }else if(arr[mid]>x){
        r = mid-1
     }
   }
}


let ans = findNum([1,2,3,4,5,6,7,8],8);
console.log(ans);