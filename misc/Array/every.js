const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const result1 = usersList.every((user,index,array) => user.credit < 1000);
const result2 = usersList.every((user,index,array)=> user.credit < 500);

console.log(result1,result2);