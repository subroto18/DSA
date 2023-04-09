// checking sum zero 

// [1,2,4,5,6,-6,6]

function checkSumZero(arr) {
  // let newArr = arr;
  // for (let i = 0; i < newArr.length; i++) {
  //   for (let j = 0; j < newArr.length; j++) {
  //     if (newArr[i] + newArr[j] === 0) {
  //       return [newArr[i], newArr[j]];
  //     }
  //   }
  // }

  let left = 0;
  let right = arr.length - 1;

  while(left<right){
     if(arr[left]+arr[right]==0){
       return [arr[left],arr[right]];
     }else{
       if(arr[left]+arr[right]>0){
         right--;
       }else{
         left++;
       }
     }
  }
  
}

let ans = checkSumZero([-5,-1,0,1,2]);

console.log(ans);