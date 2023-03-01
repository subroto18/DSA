function reverseArray(arr) {
  let f = 0;
  let l = arr.length - 1;
  let count = 1;
  while(f<=l){
       let temp = arr[f];
       arr[f] = arr[l];
       arr[l] = temp;
      f++;
      l--;
  }



  return arr;
}


let rev = reverseArray([1, 2, 3, 4, 5, 6]);

console.log(rev);