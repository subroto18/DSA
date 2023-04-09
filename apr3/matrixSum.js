// Given a non null integer matrix Grid of dimensions NxM.Calculate the sum of its elements.



function maxrix(maxtrix1) {
  let sum = 0;
  let row = maxtrix1.length;
  let col = maxtrix1[0].length

  console.log(col);

  for(let i = 0; i<row;i++){
    for(let j = 0; j<col;j++){
       sum = sum+maxtrix1[i][j]

      console.log(maxtrix1[i][j]);
    }
  }
  return sum;
}

// [[1,0,1],
// [-8,9,-2]]


let m = [
  [1, 0, 1],
  [- 8, 9, -2]
];

let ans = maxrix(m);

console.log(ans);