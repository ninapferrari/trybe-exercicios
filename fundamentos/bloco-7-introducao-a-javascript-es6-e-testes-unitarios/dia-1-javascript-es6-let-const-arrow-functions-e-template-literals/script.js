// const testingScope = escopo => {
//     if (escopo === true) {
//         let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
//     } else {
//         let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(`${elseScope} Não devo ser utilizada fora meu escopo (else)`);
//     }
// }

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const arrayCres = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
}
const result = arrayCres();
console.log(`Eis aqui ${result} o array em ordem crescente !`);