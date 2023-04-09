function profile(price) {

  let profit = 0;
  let n = price.length;

  // initialize the local minimum to the first element's index
  let j = 0;

  // start from the second element
  for (let i = 1; i < n; i++) {
    // update the local minimum if a decreasing sequence is found
    if (price[i - 1] > price[i]) {
      j = i;
    }

    // sell shares if the current element is the peak,
    // i.e., (`previous <= current > next`)
    if (price[i - 1] <= price[i] &&
      (i + 1 == n || price[i] > price[i + 1])) {
      profit += (price[i] - price[j]);
    }
  }

  return profit;

}
let ans = profile([7, 1, 5, 3, 6, 4]);
console.log(ans)