const arr = [5, 5, 5, 5, 5];
let countMin = 0
let countMax = 0;
let bigNumber;
let smallNumber;

function miniMaxSum(arr) {
    // Write your code here
    bigNumber = Math.max(...arr);
    smallNumber = Math.min(...arr);

    if(bigNumber === smallNumber) {
        for(let i = 0; i < arr.length - 1; i ++) {
            countMax += arr[i];
            countMin += arr[i];
    }
}

    for(let i = 0; i < arr.length; i ++) {

        if(arr[i] < bigNumber) {
            countMin += arr[i];
        }

        if(arr[i] > smallNumber) {
            countMax += arr[i];
        }
    }

    console.log(countMin, countMax);

    return '';
}

console.log(miniMaxSum(arr));
