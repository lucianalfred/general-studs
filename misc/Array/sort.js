const usersList = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const orderedUsers = usersList.sort((a,b) => a.credit - b.credit);
console.log(orderedUsers);