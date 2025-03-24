const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const newUsersList = usersList.filter((user, index, array)=> user.credit > 500);

console.log(newUsersList);