function anagram(str,str1){


   let obj = {}

   for(let key of str){
     obj[key] = obj[key]!==undefined ? obj[key]+1 : 1
   }


     for(let key of str1){

       if(!obj[key]){
         return 0;
       }else{
         obj[key] = obj[key]-1
       }


       
     // obj[key] = obj[key]!==undefined ? obj[key]+1 : 1
   }
         //return 1;

   

return 1;

    
  
}

let ans  = anagram("subroto","usbroto");
console.log(ans);