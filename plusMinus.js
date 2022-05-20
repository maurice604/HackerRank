let arr = [1, 1, 0, -1, -1];
let positivo = 0;
let negativo = 0;
let zero = 0;

function plusMinus (arr) {
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] > 0) {
         positivo += 1 / arr.length;
     } else if (arr[i] < 0) {
         negativo += 1 / arr.length;
     } else {
         zero += 1 / arr.length;
     }
 }
 // console.log no res se não da erro no hackerRanck
 let res = `${positivo.toFixed(6)}\n${negativo.toFixed(6)}\n${zero.toFixed(6)}`;
 
 return res;
}


console.log(plusMinus(arr));
