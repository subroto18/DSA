function common(str) {
  let start = 0;
  let end = str.length - 1;

  let palindrome = 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      palindrome = 0;
    }
    start++;
    end--;
  }

  return palindrome;

}

let ans = common('sdads');

console.log(ans)