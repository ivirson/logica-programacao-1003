const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
const media = sum / numbers.length
console.log({
    sum,
    media
}); 