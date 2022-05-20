function staircas(n) {
    // Write your code here
    let c = '#';
    let count = 0;
    let x = '';
    let last = '';

    for (let i = 0; i < n - 1; i ++) {
        c += '#' 
    }
    for ( let index = 0; index < n; index ++) {
        count += 1
        last = c.slice(-count)
        x = last.padStart(c.length, ' ');
        console.log(x);
    }
    return '';
}

console.log(staircas(4));

// -------------------------

// Debugar código

// 'F5' Começar a debugar seu código.
// 'F10' Analisar linha sem entrar no código interno.
// 'F11' Analisar linha e entrar no código interno.
// 'SHIFT-F11' sair do bloco de código atual e continuar a execução.


// ---------------------------


/* const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber); */
