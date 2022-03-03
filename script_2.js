// 2.2.1 Calculs rapides

// Un prompt s'affiche avec la question suivante
var answer2 = prompt("De quel nombre veux-tu calculer la factorielle ?");

let array = [];

function facto(arr) {
  for (let j = arr; j > 0; j--){
      array.push(j);
  }
  return multiply();
}

// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
function multiply() {
  var sum = 1;
  for (var i = 0; i < array.length; i++) {
      sum = sum * array[i];
  }
  return sum;
}


console.log(facto(answer2))