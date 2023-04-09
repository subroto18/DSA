function firstNonRepeatChar(str){

  let obj = {}
  
  for(let key of str){
    obj[key] = obj[key]!==undefined ? obj[key]+1: 1
  }


    for(let key in obj){
      if(obj[key]==1){
        return key;
      }
   }
  
  return obj;

  
}


let ans = firstNonRepeatChar('the quick brown fox jumps then quickly blow air');

console.log(ans)