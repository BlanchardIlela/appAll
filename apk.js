/*
function camelize(str) {
    
    return str
        .split('-')
        .filter(
            (element, index) => index == 0 ? element : element[0].toUpperCase() + element.slice(1)
        )
        .join('');
}

console.log(camelize('ilela-blanchard'));
*/

/*
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); 
console.log( arr );
*/

/*
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
*/

/*
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); 

console.log( arr ); 

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.age);

console.log( names );
*/

/* Dans cet exercice nous avons des objets qui seront récupéré par Map
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log( usersMapped[0].id );
console.log( usersMapped[0].fullName );
*/

/*
Cette fonction calcule la moyenne de l'âge d'un objet
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) )
*/

//Vérfication d'un seul mot dans un tableau
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O", "ilela",
];

console.log( unique(strings) );