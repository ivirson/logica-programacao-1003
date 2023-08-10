const pessoas = [
    {
        name: 'Maria',
        idade: 18,
    },
    {
        name: 'Joao',
        idade: 33
    }
];

const arr = pessoas.map(pessoa => {
    console.log(pessoa)
    return ({
        ...pessoa,
        isGreaterThan: pessoa.idade >= 20,
    })
});

console.log(arr)

