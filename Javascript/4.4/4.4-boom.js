let array = [];

let n = Number(prompt('Type in a number'));
for (let i = 0; i <= n; i++) {
    array.push(i);
    if (array[i].toString().includes('7') && i % 7 === 0) {
        array[i] = 'BOOM-BOOM';
    } else if (i % 7 === 0) {
        array[i] = 'BOOM';
    }
}
    console.log(array.slice(1));