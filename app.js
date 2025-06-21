/*Cet exercice nous sorte deux valeurs dans le tableau nums qui serton comparable au target
const nums = [12, 10, 5, 19, 20];
const target = 25;
function twosum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let s = i+1; s < nums.length; s++) {
            if(nums[i] + nums[s] === target){
                return[nums[i], nums[s]]
            }
        }
    }
}
console.log(twosum(nums, target))
*/

/*Cet exrecice fait la reduction de produits
let totalAmount = 150;
let remise = 0;
if (totalAmount > 200) {
remise = 0.15;
} else if (totalAmount > 100) {
remise = 0.10;
}
let montantFinal = totalAmount - (totalAmount * remise);
console.log("Montant après remise : " + montantFinal + " €");
*/

/*Cet exercice permet de rendre un objet iterable avec la for...of
let range = {
  from: 1,
  to: 5,
  //* dit qu'il est important puis genère des élément iterable
  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};
for (let num of range) {
  console.log(num);
}
*/

/*
function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}
let str = '𝒳😂𩷶';
console.log( slice(str, 1, 3) ); // 😂𩷶
console.log( str.slice(1, 3) );
*/

/*Une fonction qui supprime le doublons
function unique(arr) {
  return Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log( unique(values) );
*/

/* Cet exercice fait la somme de salaire avec la Object.values
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum; // 650
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log( sumSalaries(salaries) )
*/

/*Cet exercice compte les propriétés d'objet
let user = {
  name: 'John',
  age: 30
};
function count(obj) {
  return Object.keys(obj).length;
}
console.log(count())
*/

let prices = new Map();
prices.set("banana", "1");
prices.set("pome", "5"); 
prices.set("ananas", "10"); 
for (let [key, value] of prices) {
    console.log(`${key}:${value}`)
}
