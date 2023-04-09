// some of upper and lower triangle


function common(matrix){

  let lowerSum = 0;
  let upperSum = 0;

  let row =  matrix.length;
  let col = matrix[0].length;

  // for lowersum
  for(let i = 0; i<row;i++){
     for(let j = 0; j<=i;j++){
       lowerSum +=matrix[i][j]
     }
  }

  // for upper sum
  for(let i = 0; i<row;i++){
     for(let j = col-1; j>=i;j--){
       console.log(matrix[i][j]);
      // console.log(matrix[i][j]);
       upperSum +=matrix[i][j]
     }
  }

  return upperSum;





}

let m = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
let ans = common(m);
console.log(ans);