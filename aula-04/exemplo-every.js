const numbers = [1, 2, 3, 4, 5];
const isEven = numbers.every(num => num % 2 === 0);
console.log(isEven);

const words = ["apple", "banana", "cherry"];
const longEnough = words.every(word => word.length >= 5);
console.log(longEnough);