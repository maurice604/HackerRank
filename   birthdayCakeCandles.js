function birthdayCakeCandles(candles) {
    let big;
    let count = 0;
    big = Math.max(...candles);

   for(let i = 0; i < candles.length; i ++) {
       if(candles[i] === big) {
           count += 1;
       }
   }
   // console.log(count);
    return count;
}

console.log(birthdayCakeCandles([1, 2, 3, 1, 3, 3]));
