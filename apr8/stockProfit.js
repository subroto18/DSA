function stockProfitCalculate(arr){


  

   let max_profit = 0;
  



    for(let i = 0; i<arr.length;i++){
       let buying_price = arr[i];
       let selling_price = arr[i+1]
        let profit = 0;
        if(selling_price>buying_price){
          profit = selling_price-buying_price;
          
          i = arr[i];
        }
      console.log(selling_price,buying_price,profit);
      max_profit = max_profit+profit;
      
     }
  


  
  return max_profit;
  
}


let ans = stockProfitCalculate([1,2,3,4,5]);
console.log(ans);