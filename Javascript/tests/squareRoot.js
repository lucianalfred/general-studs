function squareRoot(number)
{
    'use strict'
    if(number < 0)
    {
        throw new RangeError('You cant find the square root of negative numbers');

    }
    return Math.sqrt(number);
}

function imaginarySquareRoot(number)
{
    try{
        return String(squareRoot(number));
    }catch(error){
        return squareRoot(-number)+'i';
    }
}

function itSquareRoots4(){
    return squareRoot(4) === 2;
}
console.log('Square Root: ',imaginarySquareRoot(-4));
console.log("Teste: ", itSquareRoots4());
