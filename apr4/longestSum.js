function common(arr){
    let sum = 0;
    let unique = new Set();
    let start = 0;
    let end  = 0;


     while(end<arr.length){
       if(!unique.has(arr[end])){
           unique.add(arr[end]);
           end++;
       }else{
         unique.delete(arr[start])
         start++;
       }
     }

  console.log(unique);
  
}


let ans = common("pwwkew");

console.log(ans);