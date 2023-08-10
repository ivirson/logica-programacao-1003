const produtos = [
    {
        name: 'Carro',
        valor: 'R$ 2.000,00'
    },
    {
        name: 'Moto',
        valor: 'R$ 1.000,00'
    },
    {
        name: 'Bicicleta',
        valor: 'R$ 600,00'
    },
];

produtos.forEach(({name, valor}) => console.log(`${name} tem o valor de ${valor}`));