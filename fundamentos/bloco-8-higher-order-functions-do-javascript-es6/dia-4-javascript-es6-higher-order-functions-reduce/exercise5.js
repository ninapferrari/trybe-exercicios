const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    const countingAa = names.reduce((accumulator, item) => accumulator + item.split('').reduce((acc, curItem) => {
        if (curItem === "a" || curItem === 'A') {
            acc += 1;
        }
        return acc;
    }, 0), 0);
    return countingAa;
}
console.log(containsA());