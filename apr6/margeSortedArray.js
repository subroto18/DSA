function common(arr1,arr2){

     let marge_array = [...arr1,...arr2];
     let sorted_array = new Set(marge_array.sort()) ;

  return [...sorted_array];
}

let ans = common([1,2,6,4],[2,5,3,7,8]);

console.log(ans);