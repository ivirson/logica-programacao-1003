# Aula 04

## Métodos de Array

Em JavaScript, os arrays têm uma série de métodos disponíveis para manipulação de elementos, como `push()`, `pop()`, `shift()` e muitos outros que veremos adiante. Esses métodos são fornecidos pelo objeto `Array.prototype` e são herdados por todos os objetos array em JavaScript. Isso significa que, ao criar um novo array em JavaScript, todos esses métodos já estão disponíveis para uso imediato, sem a necessidade de definir funções personalizadas ou extensões de objeto.

A seguir vamos ver alguns métodos na prática:

### `push()`

O método `push()` é utilizado para adicionar um ou mais elementos ao final de um array. Ele modifica o array original e retorna o novo tamanho do array após a adição dos elementos.

### Sintaxe

```jsx
array.push(valor1[, valor2[, ..., valorN]])

```

### Exemplo

```jsx
const numbers = [1, 2, 3];
const length = numbers.push(4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(length); // 5

```

No exemplo acima, `push()` é utilizado para adicionar os números `4` e `5` ao final do array `numbers`. O resultado é a exibição do novo array `[1, 2, 3, 4, 5]` e do novo tamanho do array `5`.

---

### `pop()`

O método `pop()` é utilizado para remover o último elemento de um array e retornar esse elemento. Ele modifica o array original.

### Sintaxe

```jsx
array.pop()

```

### Exemplo

```jsx
const stack = [1, 2, 3, 4, 5];
const lastItem = stack.pop();
console.log(stack); // [1, 2, 3, 4]
console.log(lastItem); // 5

```

No exemplo acima, `pop()` é utilizado para remover o último elemento do array `stack`. O resultado é a modificação do array original, que passa a conter os elementos `[1, 2, 3, 4]`, e a exibição do valor do último elemento removido, que é `5`.

---

### `shift()`

O método `shift()` é utilizado para remover o primeiro elemento de um array e retornar esse elemento. Ele modifica o array original e atualiza os índices dos elementos restantes.

### Sintaxe

```jsx
array.shift()

```

### Exemplo

```jsx
const fruits = ["banana", "apple", "orange", "grape"];
const firstItem = fruits.shift();
console.log(fruits); // ["apple", "orange", "grape"]
console.log(firstItem); // "banana"

```

No exemplo acima, `shift()` é utilizado para remover o primeiro elemento do array `fruits`. O resultado é a modificação do array original, que passa a conter os elementos `["apple", "orange", "grape"]`, e a exibição do valor do primeiro elemento removido, que é `"banana"`.

---

### *`at()`*

o metodo `at()` recebe um valor inteiro e retorna o item referente ao index dele, permitindo valores positivos ou negativos. Valores negativos contam a partir do último item do array.

O método `at()` é utilizado para acessar um elemento específico de um array com base no índice fornecido como argumento. Ele retorna o elemento correspondente ao índice especificado.

### Exemplos

```jsx
const fruits = ["apple", "banana", "orange", "grape", "mango"];
console.log(fruits.at(1)); // "banana"
console.log(fruits.at(-2)); // "grape"

```

No primeiro exemplo, `at()` retorna o elemento no índice 1 do array `fruits`, que é a string `"banana"`. No segundo exemplo, `at()` retorna o elemento que está duas posições à esquerda do último elemento do array `fruits`, que é a string `"grape"`.

---

### `concat()`

O método `concat()` é utilizado para combinar dois ou mais arrays em um novo array. Ele retorna um novo array que contém os elementos dos arrays originais na ordem em que aparecem.

### Sintaxe

```jsx
array.concat(array2, array3, ..., arrayX)

```

### Exemplos

```jsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const newArr = arr1.concat(arr2, arr3);
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

```

No exemplo acima, `concat()` é utilizado para combinar os arrays `arr1`, `arr2` e `arr3` em um novo array chamado `newArr`. O resultado é um novo array que contém os elementos dos arrays originais na ordem em que aparecem.

---

### `every()`

O método `every()` é utilizado para testar se todos os elementos de um array satisfazem a condição implementada pela função fornecida. A função deve retornar um valor booleano que indica se o elemento passou ou não no teste. O método retorna `true` se todos os elementos passarem no teste e `false` caso contrário.

### Sintaxe

```jsx
array.every(function(valor[, índice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])

```

### Exemplos

```jsx
const numbers = [1, 2, 3, 4, 5];
const even = numbers.every(num => num % 2 === 0);
console.log(even); // false

const words = ["apple", "banana", "cherry", "date"];
const longEnough = words.every(word => word.length >= 5);
console.log(longEnough); // true

```

No primeiro exemplo, `every()` é utilizado para testar se todos os números do array `numbers` são pares. Como o array contém um número ímpar (o número 1), o resultado retornado é `false`. No segundo exemplo, `every()` é utilizado para testar se todas as palavras do array `words` têm pelo menos 5 caracteres. Como todas as palavras atendem a essa condição, o resultado é `true`.

---

### `filter()`

O método `filter()` é utilizado para criar um novo array contendo todos os elementos que passaram em um teste implementado pela função fornecida. A função `filter()` deve retornar true ou false para cada elemento do array original, e os elementos que retornaram true são incluídos no novo array.

### Sintaxe

```jsx
array.filter(function(valor[, índice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])

```

### Exemplos

```jsx
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter(word => word.length >= 6);
console.log(longWords); // ["banana", "cherry"]
```

No primeiro exemplo, `filter()` é utilizado para criar um novo array contendo apenas os números pares do array `numbers`. Como somente os números 2 e 4 são pares, o resultado é um novo array contendo apenas esses dois números. No segundo exemplo, `filter()` é utilizado para criar um novo array contendo apenas as palavras do array `words` que têm pelo menos 6 caracteres. Como somente as palavras "banana" e "cherry" têm pelo menos 6 caracteres, o resultado é um novo array contendo essas duas palavras.

---

### `find()`

O método `find()` é utilizado para buscar um elemento específico em um array, com base em uma condição implementada pela função fornecida. A função `find()` deve retornar um valor booleano que indica se o elemento passou ou não no teste. O método retorna o primeiro elemento que passar no teste ou `undefined` caso nenhum elemento passar.

### Sintaxe

```jsx
array.find(function(valor[, índice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])

```

### Exemplos

```jsx
const numbers = [1, 2, 3, 4, 5];
const even = numbers.find(num => num % 2 === 0);
console.log(even); // 2

const words = ["apple", "banana", "cherry", "date"];
const longEnough = words.find(word => word.length >= 6);
console.log(longEnough); // "banana"

```

No primeiro exemplo, `find()` é utilizado para buscar o primeiro número par do array `numbers`. Como o primeiro número par é o número 2, o resultado retornado é `2`. No segundo exemplo, `find()` é utilizado para buscar a primeira palavra do array `words` que tem pelo menos 6 caracteres. Como a primeira palavra com pelo menos 6 caracteres é a palavra "banana", o resultado retornado é `"banana"`.

---

### `forEach()`

O método `forEach()` é utilizado para executar uma função fornecida uma vez para cada elemento do array. A função é executada com três argumentos: o valor do elemento atual, o índice do elemento atual e o array em que o método `forEach()` foi chamado.

### Sintaxe

```jsx
array.forEach(function(valorAtual[, indice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])

```

### Exemplo

```jsx
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

```

No exemplo acima, `forEach()` é utilizado para executar a função `console.log()` para cada elemento do array `numbers`. O resultado é a exibição de cada número no console, um de cada vez.

---

### `map()`

O método `map()` é utilizado para criar um novo array preenchido com os resultados da chamada de uma função fornecida em cada elemento no array de chamada. Em outras palavras, ele nos permite aplicar uma função a cada elemento do array original e criar um novo array contendo os resultados dessas operações.

### Sintaxe

```jsx
array.map(function(valorAtual[, indice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])

```

### Exemplo

```jsx
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

```

No exemplo acima, `map()` é utilizado para criar um novo array `squares` contendo os quadrados de cada elemento do array `numbers`. A função `num => num * num` é aplicada a cada elemento do array original, criando um novo array contendo os resultados dessas operações.

### Outro exemplo

```jsx
const words = ["apple", "banana", "cherry", "date"];
const upperCaseWords = words.map(word => word.toUpperCase());
console.log(upperCaseWords); // ["APPLE", "BANANA", "CHERRY", "DATE"]

```

No exemplo acima, `map()` é utilizado para criar um novo array `upperCaseWords` contendo as palavras em letras maiúsculas do array `words`. A função `word => word.toUpperCase()` é aplicada a cada elemento do array original, criando um novo array contendo os resultados dessas operações.

---

### `reduce()`

O método `reduce()` é utilizado para executar uma função callback em cada elemento do array, a fim de reduzir o array a um único valor. A função callback recebe dois parâmetros: um acumulador e o valor atual do elemento. O acumulador é o valor retornado na última invocação da função, ou o valor inicial especificado por um parâmetro opcional. O método `reduce()` executa a função callback uma vez para cada elemento do array, exceto pelo primeiro se nenhum valor inicial for especificado.

### Sintaxe

```jsx
array.reduce(function(acumulador, valorAtual, index, array) {
    // código a ser executado no elemento
}[, valorInicial])

```

### Exemplo

```jsx
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 15

```

No exemplo acima, `reduce()` é utilizado para somar todos os elementos do array `numbers`. A função `accumulator + currentValue` é aplicada a cada elemento do array original, criando um único valor que é a soma de todos os elementos do array.

### Exemplo com valor inicial

```jsx
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 10);
console.log(sum); // 25

```

No exemplo acima, `reduce()` é utilizado para somar todos os elementos do array `numbers`, mas começando com um valor inicial de `10`. A função `accumulator + currentValue` é aplicada a cada elemento do array original, criando um único valor que é a soma de todos os elementos do array, mais o valor inicial de `10`.

---

### `reverse()`

O método `reverse()` é utilizado para inverter a ordem dos elementos em um array. Ele inverte a ordem dos elementos no lugar e retorna a referência à mesma matriz, ou seja, o primeiro elemento da matriz agora se torna o último, e o último elemento da matriz se torna o primeiro.

### Exemplo

```jsx
const fruits = ["banana", "apple", "orange", "grape"];
fruits.reverse();
console.log(fruits); // ["grape", "orange", "apple", "banana"]

```

No exemplo acima, `reverse()` é utilizado para inverter a ordem dos elementos no array `fruits`. O resultado é a exibição dos elementos do array na ordem inversa à sua posição original.

### Observação

É importante notar que o método `reverse()` modifica a ordem dos elementos no array original. Se você precisar manter a ordem original do array, é necessário criar uma cópia do array antes de aplicar o método `reverse()`.

---

### `some()`

O método `some()` é utilizado para verificar se ao menos um dos elementos de um array satisfaz a condição implementada pela função fornecida. A função deve retornar um valor booleano que indica se o elemento passou ou não no teste. O método retorna `true` se ao menos um dos elementos passar no teste e `false` caso contrário.

### Sintaxe

```jsx
array.some(function(valor[, índice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])

```

### Exemplo

```jsx
const numbers = [1, 2, 3, 4, 5];
const even = numbers.some(num => num % 2 === 0);
console.log(even); // true

const words = ["apple", "banana", "cherry", "date"];
const longEnough = words.some(word => word.length >= 6);
console.log(longEnough); // true

```

No primeiro exemplo, `some()` é utilizado para verificar se ao menos um dos números do array `numbers` é par. Como o array contém pelo menos um número par (o número 2), o resultado retornado é `true`. No segundo exemplo, `some()` é utilizado para verificar se ao menos uma das palavras do array `words` tem pelo menos 6 caracteres. Como pelo menos uma palavra atende a essa condição (a palavra "banana"), o resultado é `true`.

### Outro exemplo

```jsx
const ages = [25, 30, 35, 40];
const isAdult = ages.some(age => age >= 18);
console.log(isAdult); // true

const minors = [15, 16, 17, 18];
const isAdult2 = minors.some(age => age >= 18);
console.log(isAdult2); // true

```

No primeiro exemplo, `some()` é utilizado para verificar se ao menos uma das idades no array `ages` é maior ou igual a 18. Como todas as idades atendem a essa condição, o resultado é `true`. No segundo exemplo, `some()` é utilizado para verificar se ao menos uma das idades no array `minors` é maior ou igual a 18. Como a última idade no array atende a essa condição (a idade 18), o resultado é `true`.

---

### `sort()`

O método `sort()` é utilizado para ordenar os elementos de um array em ordem crescente ou decrescente. O método modifica o array original e retorna o array ordenado.

### Sintaxe

```jsx
array.sort([compareFunction])

```

O parâmetro opcional `compareFunction` é uma função que define a ordem de classificação. Se omitido, o array é classificado em ordem de caracteres Unicode.

### Exemplo

```jsx
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort();
console.log(numbers); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

```

No exemplo acima, `sort()` é utilizado para ordenar os elementos do array `numbers` em ordem crescente. O resultado é a exibição dos elementos do array em ordem crescente.

### Outro exemplo

```jsx
const words = ["apple", "banana", "cherry", "date"];
words.sort();
console.log(words); // ["apple", "banana", "cherry", "date"]

```

No exemplo acima, `sort()` é utilizado para ordenar os elementos do array `words` em ordem alfabética. O resultado é a exibição dos elementos do array em ordem alfabética.

### Ordenação numérica

Se você precisar ordenar um array de números em ordem crescente ou decrescente, é necessário passar uma função de comparação como argumento para o método `sort()`. Esta função deve retornar um valor negativo, zero ou positivo dependendo da ordem de classificação desejada.

### Exemplo

```jsx
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort((a, b) => a - b); // ordem crescente
console.log(numbers); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

numbers.sort((a, b) => b - a); // ordem decrescente
console.log(numbers); // [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]

```

No exemplo acima, `sort()` é utilizado para ordenar os elementos do array `numbers` em ordem crescente e decrescente, respectivamente. A função de comparação `(a, b) => a - b` é utilizada para ordenação em ordem crescente e a função de comparação `(a, b) => b - a` é utilizada para ordenação em ordem decrescente. O resultado é a exibição dos elementos do array em ordem crescente e decrescente, respectivamente.

---

### `toString()`

O método `toString()` é utilizado para converter um array em uma string, contendo a representação em string de cada elemento do array separado por vírgulas. Esse método não modifica o array original.

### Sintaxe

```jsx
array.toString()

```

### Exemplo

```jsx
const fruits = ["banana", "apple", "orange", "grape"];
const fruitsString = fruits.toString();
console.log(fruitsString); // "banana,apple,orange,grape"

```

No exemplo acima, `toString()` é utilizado para converter o array `fruits` em uma string. O resultado é a exibição de uma string contendo cada elemento do array separado por vírgulas.

### Observação

É importante notar que `toString()` não é a melhor maneira de converter um array em uma string, especialmente se o array contém elementos complexos, como objetos. Nesses casos, é melhor usar outras técnicas de serialização, como `JSON.stringify()`.

---

### `Array.from()`

O método `Array.from()` é utilizado para criar um novo array a partir de um objeto que não é um array. É possível passar um objeto iterável ou um objeto parecido com um array, como uma string, um `Set` ou um `Map`. O método retorna um novo array, não modificando o objeto original.

### Parâmetros

- `arrayLike`: Obrigatório. Um objeto iterável ou parecido com um array, como uma string, um `Set` ou um `Map`.
- `mapFn`: Opcional. Uma função callback para ser chamada em cada elemento do novo array.
- `thisArg`: Opcional. O valor de `this` a ser utilizado na chamada da função `mapFn`.

A seguir, um exemplo de uso do método `Array.from()` com uma string, um `Map` e uma função `mapFn`:

```jsx
const str = "hello";
const map = new Map();
map.set("a", 1);
map.set("b", 2);

const arrFromStr = Array.from(str, letter => letter.toUpperCase());
// Resultado: ["H", "E", "L", "L", "O"]

const arrFromMap = Array.from(map, ([key, value]) => ({ key, value }));
// Resultado: [{ key: "a", value: 1 }, { key: "b", value: 2 }]

```

No primeiro exemplo, a string "hello" é passada como parâmetro, e a função `mapFn` é utilizada para converter as letras em maiúsculas. No segundo exemplo, um `Map` é passado como parâmetro, e a função `mapFn` é utilizada para converter as entradas do `Map` em objetos com as propriedades `key` e `value`.

---

### `Array.isArray()`

O método `Array.isArray()` é utilizado para verificar se um objeto é uma array. Ele retorna `true` se o objeto for uma array e `false` caso contrário.

### Exemplos

```jsx
const array = [1, 2, 3];
console.log(Array.isArray(array)); // true

const notArray = { name: "John", age: 30 };
console.log(Array.isArray(notArray)); // false

```

No primeiro exemplo, `Array.isArray()` retorna `true` já que `array` é uma array. Já no segundo exemplo, `Array.isArray()` retorna `false` já que `notArray` não é uma array.

---

### `Array.of()`

O método `Array.of()` é utilizado para criar uma nova instância de array com um número variável de argumentos, independentemente do número ou do tipo dos argumentos. Ou seja, ele cria um novo array com os valores passados como argumentos, independentemente da quantidade de valores.

### Exemplos

```jsx
const arr1 = Array.of(1, 2, 3);
console.log(arr1); // [1, 2, 3]

const arr2 = Array.of("a", "b", "c", 1, 2, 3);
console.log(arr2); // ["a", "b", "c", 1, 2, 3]

const arr3 = Array.of(1);
console.log(arr3); // [1]

```

No primeiro exemplo, `Array.of()` cria um novo array com os valores `1`, `2` e `3`. Já no segundo exemplo, ele cria um novo array com valores do tipo `string` e `number`. No terceiro exemplo, `Array.of()` cria um novo array com apenas um valor.

## Referencias

- [MDN Web Docs: Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)