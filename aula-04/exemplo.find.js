const pessoas = [
    {
        name: 'Joao',
        idade: 23
    },
    {
        name: 'Maria',
        idade: 19
    }
];
const testeFind = pessoas.find(item => item.idade <= 20);
console.log(testeFind); 

// const words = ["apple", "banana", "cherry", "date"];
// const longEnough = words.find(word => word.length >= 6);
// console.log(longEnough); 