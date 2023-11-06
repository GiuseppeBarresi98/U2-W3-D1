class Person {
  constructor(_name, _lastName, _age, _location) {
    this.name = _name;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  static isSameAge(personOne, personTwo) {
    if (personOne.age > personTwo.age) {
      console.log(personOne.name + " è piu vecchio di " + personTwo.name);
    } else {
      console.log(personTwo.name + " è piu vecchio di " + personOne.name);
    }
  }
}

const mario = new Person("Mario", "Super", 33, "Yoshi Castle");
const luigi = new Person("Luigi", "Super", 40, "Daisy Flower");

Person.isSameAge(mario, luigi);

class Pet {
  constructor(name, ownerName, species, breed) {
    this.name = name;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static isSameOwner(animalA, animalB) {
    if (animalA.ownerName === animalB.ownerName)
      console.log("questi due animali hanno lo stesso padrone");
    else {
      console.log("questi due animali non hanno lo stesso padrone");
    }
  }
}

enteredPets = [];

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const breed = document.getElementById("breed").value;
  const species = document.getElementById("species").value;

  let pets = new Pet(name, ownerName, species, breed);

  enteredPets.push(pets);
  console.log(enteredPets);

  const listElement = document.createElement("li");
  const ul = document.getElementById("ul");

  listElement.innerText = listElement.innerText =
    "Nome: " +
    pets.name +
    ", " +
    "Proprietario: " +
    pets.ownerName +
    ", " +
    "Razza: " +
    pets.breed +
    ", " +
    "Specie: " +
    pets.species;
  ul.appendChild(listElement);

  form.reset();
  console.log(Pet.isSameOwner(enteredPets[0], enteredPets[1]));
});
