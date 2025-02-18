let myHTML  = '<ul>';
const numberList = [1,2,3,4,5];

numberList.forEach((number,index,array)=>{
    myHTML += `<li>${number}</li>`;
});

myHTML += '</ul>';
