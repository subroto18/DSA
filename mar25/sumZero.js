// checking sum zero 

// [1,2,4,5,6,-6,6]

function checkSumZero(arr){
  let newArr = arr;
  for(let i = 0; i<newArr.length;i++){
    for(let j = 0; j<newArr.length;j++){
      if(newArr[i]+newArr[j]===0){
        return [newArr[i],newArr[j]];
      }
    }
  }
}

let ans =  checkSumZero([1,-1,2,3,4,5,-5]);

console.log(ans);