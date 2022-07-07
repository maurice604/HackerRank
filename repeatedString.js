let str = 'aba';
let n = 10;

function repeatedString(s, n) {
    let repeat = Math.trunc(n / s.length);
    let rest = n % s.length;
    let count = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === 'a') {
        count++;
      }
    }
  
    count = count * repeat;
  
    if (rest) {
      for (let i = 0; i < rest; i++) {
        if (s.charAt(i) === 'a') {
          count++;
        }
      }
    }
  
    return count;
  }

/* function repeatedString(s, n) {
    let occurances = (s.split("a").length - 1);
    let max = Math.floor(n / s.length);
    let totalAs= occurances * max;
    totalAs += (s.slice(0, n % s.length).split("a").length - 1);
    return totalAs;
 } */

console.log(repeatedString(str, n));