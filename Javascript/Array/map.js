const userList = [
    {name: 'Joa', credit:900},
    {name: 'Junior', credit:800},
    {name: 'Lucian', credit:1900}
];


const newUserList = userList.map((user,inde,array)=>{
    user.credit +=100;
    return user; 
});

console.log(userList);
