// 2.3.2. Bibliothécaire

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Défini un nouvel array contenant tous les livres (l'original sera modifié)
let books2 = []
books.forEach(item => books2.push(item))

// Fonction de comparaison pour .sort
function compare(a, b) {
  // On défini les élements à comparer pour le tri, en uppercase
  const rentA = a.rented; // On compare rented pour définir quel livre sera le plus ou le moins emprunté
  const rentB = b.rented;
  let comparaison = 0;
  // On défini que si l'élément a est superieur à l'élément b, la fonction retourne 1, ou -1 si l'inverse est vrai
  if (rentA > rentB) {comparaison = 1;}  
  else if (rentA < rentB) {comparaison = -1;}
  return comparaison;
}

// Fonction de comparaison sur les titres
function compareAlpha(a, b) {
  // On défini les élements à comparer pour le tri, en uppercase
  const titleA = a.title;
  const titleB = b.title;
  let comparaison = 0;
  if (titleA > titleB) {comparaison = 1;}  
  else if (titleA < titleB) {comparaison = -1;}
  return comparaison;
}


// Fonction trouvant l'index d'un livre en fonction d'un id 
function detect(from) {
    let pos = books.map(function(elem) {
        return elem.id;
  }).indexOf(from);
}

// find + une arrow function pour trouver un élément par son id
let findId = books.find(item => item.id == 873495);
// every + rented supérieur à 0, retourne vrai si la valeur est supérieure à 0
let rent = books.every(item => item.rented > 0)
// Tri des livres : du moins loué au plus loué
let mostRented = books.sort(compare)
// Le - loué
let lessRented = mostRented.shift()
// Le + loué
mostRented = mostRented.pop()

// splice + fonction detect sur l'array books2 non modifié pour supprimer le livre ayant 133712 comme id
let deleteBook = books2.splice(detect(133712), 1)


console.log("Tous les livres ont été empruntés ? : "+rent)
console.log("Livre le plus emprunté : "+mostRented.title +  ` emprunté : ${mostRented.rented} fois`)
console.log(`Livre le moins emprunté : ${lessRented.title} emprunté : ${lessRented.rented} fois`)
console.log(`Livre ayant l'id 873495 : ${findId.title}`)
console.log(`Livre supprimé : ${deleteBook[0].title}`)
// sort + fonction compareAlpha sur l'array books2 pour le trier
console.log(books2.sort(compareAlpha))