function anagram(str,str2){
  let obj = {}

  for(let key of str){
    obj[key] =  obj[key]!== undefined ? obj[key]+1:1
  }

  for(let key of str2){
    if(!obj[key]){
      return false;
    }else{
      obj[key] = obj[key]-1;
    }
      console.log(obj);
   
  }
  return true;
  
  
}


let ans =  anagram('ajay','ayajj');

console.log(ans);

