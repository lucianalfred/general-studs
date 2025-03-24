function isOdd(n)
{
    return n % 2 > 0;
}

const exampleArray = [2, 3, 4, 5, 6, 7];
const fillteredExampleArray = exampleArray.filter(isOdd);
console.log(fillteredExampleArray);

// Exemplo 2
const bands = [
    { name: 'Avenged Sevenfold', formed: 1999 },
    { name: 'Megadeth', formed: 1980 },
    { name: 'Blind Guardian', formed: 1984 },
    { name: 'Iron Maiden', formed: 1975 },
    { name: 'Nirvana', formed: 1987 },
];

const bandsFromThe80s = bands
   .filter(({formed})=> formed >= 1980 && formed <= 1989) 
   .map(({ name }) => name);

console.log(bandsFromThe80s);

const products = [
    { name: 'Laptop', category: 'computers' },
    { name: 'Chocolate', category: 'food' },
    { name: 'Pizza', category: 'food' },
    { name: 'Lord of the Rings - The Two Towers', category: 'book' },
  ]

const foodProducts = products.filter(({category}) => category === 'food');
console.log(foodProducts);