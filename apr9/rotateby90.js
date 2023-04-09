function rotateImage(arr){


  // Transpose the matrix first


  for(let i = 0; i< arr.length;i++){
    for(let j = 0; j <=i;j++){
      let temp = arr[i][j];
       arr[i][j] = arr[j][i];
       arr[j][i] = temp
    }
  }

  // reverse the matrix

    for(let i = 0; i< arr.length;i++){
      arr[i].reverse();
  }

  return arr;
  
  
}
let maxtrix = [[1,2,3],[4,5,6],[7,8,9]]
let ans = rotateImage(maxtrix);

console.log(ans);