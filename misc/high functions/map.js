function double(n)
{
    return n * 2;
}

const exampleArray = [2, 3, 4, 5, 6];
const doubleExampleArray = exampleArray.map(double);

console.log(doubleExampleArray);

const tripleNumbers = numbersArray => 
    numbersArray.map(numbersArray => numbersArray * 3);

const numbers = tripleNumbers(exampleArray);
console.log(numbers);

const names = [
    {firstName: 'Gon', lastName: "Freecss"},
    {firstName: 'Killlua', lastName: "Zoldyck"},
    { firstName: 'Kurapika', lastName: 'Kurta' },
    {firstName: 'Leorio', lastName: 'Paradinight' },
];

const fullNames = names.map(
    ({firstName, lastName}) => `<p>${firstName} ${lastName}</p>`
);

console.log(fullNames);

async function bulkDownloadHTML(urls){
    const htmlPromises = urls.map(async url => {
        const res = await fetch(url);
        return res.text();
    })

    const htmlList = await Promise.all(htmlPromises);
    return htmlList;
}
