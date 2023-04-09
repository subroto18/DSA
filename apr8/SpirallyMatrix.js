function matrix(n) {

  let matrix = [];
  let spiralMatrix = [];

  let index = 1;
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (j = 0; j < n; j++) {
      arr.push(index);
      index += 1;
    }
   matrix.push(arr);
  
  }


  let top = 0;
  let bottom = n-1;
  let left = 0;
  let right =  n-1;


  while(top<=bottom && left<=right){
    
    for(let i = left; i<=right;i++){
       spiralMatrix.push(matrix[top][i]);
    }
     top++;

       for(let i = top; i<=bottom;i++){
       spiralMatrix.push(matrix[i][right]);
    }
     right--;

    if(top<=bottom){
       for(let i = right; i>=0;i--){ 
         spiralMatrix.push(matrix[bottom][i]);
    }
           bottom--;

    }

    if(left<=right){
         for(let i = bottom; i>=0;i--){
       spiralMatrix.push(matrix[i][left]);
                left++;
    }
    
    }

  }


  return spiralMatrix;

 

}


let ans = matrix(4);
console.log(ans);