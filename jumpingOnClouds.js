let c = [0,0,1,0,0,1,0];
let count = 0;

function jumpingOnClouds(c) {
    // Write your code here
    
  for (let i = 0; i < c.length - 1; i++) {
    if (c[i + 2] == 0) {
      count++;
      i++;
    } else if (c[i + 1] == 0) {
      count++;
    }
  }
  return count;
}

console.log(jumpingOnClouds(c));
