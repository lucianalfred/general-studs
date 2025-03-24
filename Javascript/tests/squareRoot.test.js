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

test('square root of 4 is 2', ()=>{
    expect(squareRoot(4)).toBe(2);
})