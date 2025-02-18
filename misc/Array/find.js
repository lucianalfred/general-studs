const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const carlos = usersList.find((user,index,array)=> user.name === "Carlos");
console.log(carlos);

const index = usersList.findIndex((user,index,array) => user.name === "Carlos");
console.log(index);