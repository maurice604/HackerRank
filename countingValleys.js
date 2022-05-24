let steps = 10;
let path = ['D','U','D','D','D','U','U','D','U','U'];
let altitude = 0;
let valleys = 0;

function countingValleys(steps, path) {
    // Write your code here
    for(let c = 0;c <= steps; c++){
        if(path[c]=='D'){
            altitude--
          } else {
            if(altitude == -1){
              valleys++
            }
            altitude++
          }
        }
        return valleys
}

console.log(countingValleys(steps, path));
