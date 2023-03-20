
class Solution {
  printNos(N) {
    let printLine = "";
    if (N == 0) {
      return
    } else {
      this.printNos(N - 1)
      printLine += N + " ";
      console.log(printLine);
    }
    //code here
  }
}


let print = new Solution();

print.printNos(64);