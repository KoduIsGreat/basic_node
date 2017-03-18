var animals = [
  { name: 'fluffykins', species: 'rabbit'},
  { name: 'dogomo', species: 'dog'},
  { name: 'kekeke', species: 'dog'},
  { name: 'biscuit', species: 'cat'},
  { name: 'slither', species: 'snake'}
]

let isSpecies = (species,animal) => animal.species === species

/*var dogs = []
for(let i = 0 ; i < animals.length; i ++){
  if(animals[i].species === 'dog')
    dogs.push(animals[i])
}*/
var dogs = animals.filter(animal => isSpecies('dog',animal))
var otherAnimals = animals
// console.log(dogs)

// var names =[] 
// for (let i =0; i< animals.length ; i++){
//   names.push(animals[i].name)
// }'
// var names = animals.map((animal) => animal.name)
var names = animals.map(function(animal){
  return animal.name + ' is a ' + animal.species
})
//console.log(names)

var orders = [
  { amount : 250 },
  { amount : 400 },
  { amount : 100 },
  { amount : 325 }
]


var totalAmount = orders.reduce((sum,order) => sum +order.amount,0)
// var totalAmount =0;
// for ( let i = 0 ; i < orders.length ; i++){
//   totalAmount += orders[i].amount
// }
// console.log(totalAmount)


//
let countDownFrom = (num) => {
  if(num === 0 ) return;
  console.log(num)
  countDownFrom(num - 1)
}

// countDownFrom(10)

let categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals'},
  { id: 'cats', 'parent': 'mammals'},
  { id: 'dogs', 'parent': 'mammals'},
  { id: 'chihuahua', 'parent': 'dogs'},
  { id: 'lab', 'parent': 'dogs'},
  { id: 'persian', 'parent': 'cats'},
  { id: 'siamese', 'parent': 'cats'}
]

let makeTree = (categories, parent) => {
  let node = {}
    categories
      .filter(c => c.parent === parent)
      .forEach(c => node[c.id] = 
        makeTree(categories, c.id))
  return node;
}

console.log(
  JSON.stringify(
    makeTree(categories,null)
    , null, 2)
)
