/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

//console.log(users.filter(getUserAverageAge));
//console.log(users.length);
//console.log(users[0].age);

function getUserAverageAge(data){
  var total = 0;
for(var i = 0; i < data.length; i++) {
    total += data[i].age;
 
}
var avg = total/data.length;
return console.log(avg);
}

function getUsersNames(data){
  const userNames = [];
  for(var i = 0; i < data.length; i++) {
    userNames[i]=data[i].name;
  }
return console.log(userNames);  
}

getUserAverageAge(users);
getUsersNames(users)
