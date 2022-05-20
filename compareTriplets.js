let a = [5, 2, 25, 5];
let b = [9, 15, 16, 5];

let alice = 0
let bob = 0
let arr = [];

for (let x in a) {
    let res = a[x];
    let r = b[x];

    if (a[x] > b[x]) {
        alice += 1
    } else if (b[x] > a[x]) {
        bob  += 1
    } else {
        alice += 0
        bob += 0
    }
}

arr.push(alice, bob);
