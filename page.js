
// let jour 
// let result

// function VerfierJour(jour) {
//         const jourOuvrable = ['lundi','mardi', 'mercredi', 'jeudi', 'vendredi'];
//         const jourWeek_end = ['samedi', 'dimanche'];
//         if(jourOuvrable.includes(jour)){
//             return result = 'Jour ouvrable'
//         }else if (jourWeek_end.includes(jour)){
//             return result = 'Week-end'
//         }else{
//             return result = 'Invalide'
//         }
//     }

// console.log(VerfierJour('jeudi'))

// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123
// };

// for (let key in user) console.log(key); // name, age (no symbols)

// // the direct access by the symbol works
// console.log( "Direct: " + user[id] ); // Direct: 123

// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// };

// // conversions demo:
// console.log(user); // hint: string -> {name: "John"}
// console.log(+user); // hint: number -> 1000
// console.log(user + 500); // hint: default -> 1500


// let arr = ['papa','papa', 'maman', 'enfant', 'oncle', 'tante'];

// let Copy = arr.map(item => item.length);

// console.log(Copy); 

// let num1 = 10;
// let num2 = 5;
// let operator = "+";
// let resultat;

// switch (operator) {
//   case "+":
//     resultat = num1 + num2;
//     break;
//   case "-":
//     resultat = num1 - num2;
//     break;
//   case "*":
//     resultat = num1 * num2;
//     break;
//   case "/":
//     if (num2 !== 0 && num1 !== 0) {
//       resultat = num1 / num2;
//     } else {
//       resultat = "Erreur : division par zéro";
//     }
//     break;
//   default:
//     resultat = "Opérateur invalide";
// }

// console.log("Résultat :", resultat);


// let annee = 2020;

// if(annee % 4 === 0) {
//     console.log("L'année est bissextile");
// }else if(annee % 400 === 0){
//     console.log("L'année est bissextile");
// }else if(annee % 100 === 0) {
//     console.log("L'année n'est pas bissextile.");
// }

// if (annee % 4 === 0) {
//   if (annee % 100 !== 0 || annee % 400 === 0) {
//     console.log("L'année est bissextile.");
//   } else {
//     console.log("L'année n'est pas bissextile.");
//   }
// } else {
//   console.log("L'année n'est pas bissextile.");
// }

// function isEven(number) {
    
//    return number % 2 === 0 ? true : false
// }

// console.log(isEven(7))

// function max(a, b) {
//   return a > b ? a : b;
// }
// console.log(max(5, 7)); 

// 7. Fonction pour Celsius vers Fahrenheit

// function Fahrenheit(Celsius) {
//    return (Celsius * 9/5) + 32; 
// }

// const result = Fahrenheit(7)

// console.log(result)
 
//   else if (guess > secret) alert("Trop haut !");
//   else alert("Bravo !");
// while (guess !== secret) {
//   guess = Number(prompt("Devinez un nombre entre 1 et 100 :"));
//   if (guess < secret) alert("Trop bas !");
//   else if (guess > secret) alert("Trop haut !");
//   else alert("Bravo !");
// }

// function add(a, b) {
//   return a + b;
// }

// // Fonction de base 'subtract'
// function subtract(a, b) {
//   return a - b;
// }

// // Fonction qui prend une autre fonction en paramètre
// function operate(num1, num2, operationFunction) {
//   return operationFunction(num1, num2);
// }

// // Appels
// console.log(operate(5, 3, add));      // Résultat : 8
// console.log(operate(5, 3, subtract));

// 17. Fonction pour Compter les Voyelles
// function countVowels(text) {
//   let count = 0;
//   const vowels = "aeiouyAEIOUY";
//   for (let char of text) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels("Bonjour le monde")); // 6



// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// console.log( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
// console.log( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );


let company = { // le même objet, compressé pour la brièveté
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// La fonction pour faire le travail
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // additionne le tableau
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // appel récursivement pour les sous-départements, additionnez les résultats
    }
    return sum;
  }
}

console.log(sumSalaries(company));