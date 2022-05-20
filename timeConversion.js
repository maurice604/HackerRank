let s = '12:01:00AM'

function timeConversion(s) {
    // Write your code here
return (s || '').split(':').reduce((acc, curr, index) => {
        curr = !index
            ?
            ((s || '').includes('PM')
                ? (+curr < 12 ? `${+curr + 12}` : curr)
                : (+curr < 12 ? curr : '00')
            )
            :
            curr.replace(/PM|AM/gi, '');

        acc.push(curr);

        return acc;
    }, []).join(':');
}


//let dt = new Date();
//let hora = dt.getFullYear();
console.log(timeConversion(s));


/*let c = '00AM';
let i = 1;
c = !i;
console.log(c);
*/

/*let c = '12'
c = +c
console.log(c);
*/
