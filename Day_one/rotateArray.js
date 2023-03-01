// Problem Description
// Given an array of n integers and an integer k, rotate the array k times in clockwise order.

// Input format
// There are three lines of input.

// First line contains integer n.

// Next line contains n space separated integers.

// Next line contains the value of k.

// Output format
// Print the rotated array.

// Sample Input 1
// 5

// 1 2 3 4 5

// 2



/// best approch -----

// best approch will be reverse array three time 
// reverse from start to n-k
//reverse from n-k to n
// reverse from 0 to n


function rotateArray(arr,k){
  
  reverse(arr,0,arr.length-k-1);
  reverse(arr,arr.length-k,arr.length-1);
  reverse(arr,0,arr.length-1);
  return arr;
}

function reverse(arr,f_index,last_index){
      let f = f_index;
      let l = last_index;
      while(f<l){
           let temp = arr[f];
           arr[f] = arr[l];
           arr[l] = temp;
          f++;
          l--;
      }
  return arr; 
}


let ans = rotateArray([1,2,3,4,5],2);
console.log(ans);