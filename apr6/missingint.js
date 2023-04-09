function common(arr){

  let new_arr = arr.sort((a,b)=> a-b);
  let start = arr[0];


  
  
   for(let i = start;i<=new_arr.length;i++){
     console.log(new_arr[i],i)
       // if(new_arr[i]!==i){
       //   return i;
       // }
   }
  return 0;
 
}


let ans  = common([2,3,5,6,7]);

console.log(ans);

