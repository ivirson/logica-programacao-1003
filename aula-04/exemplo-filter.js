const numbers = [1, 2, 3, 4, 5];

const filterNumber = (numero, index, arr) => {
    console.log(arr[index])
    console.log({
        numero,
        index,
        condition: numero % 2 === 1
    })
    return numero % 2 === 1
}

const evenNumbers = numbers.filter(filterNumber);
console.log(evenNumbers); 

const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter(word => word.length >= 10);
console.log(longWords);