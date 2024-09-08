//Question 1
console.log(`\nQuestion 1`);
var eatsPlants = true;
var eatsAnimals = true;

var animalType = eatsPlants ? eatsAnimals ? 'omnivore' : 'herbivore' : eatsAnimals ? 'carnivore' : undefined;

console.log(
  `eatsPlants = ${eatsPlants} and eatsAnimals = ${eatsAnimals} The result is: ${animalType}`
);

//Question 2
console.log(`\nQuestion 2`);
var musicians = 0;

if (musicians <= 0) {
  console.log('not a group');
} else if (musicians == 1) {
  console.log('solo');
} else if (musicians == 2) {
  console.log('duet');
} else if (musicians == 3) {
  console.log('trio');
} else if (musicians == 4) {
  console.log('Question uartet');
} else {
  console.log('this is a large group');
}
var musicians = 1;
if (musicians <= 0) {
    console.log('not a group');
  } else if (musicians == 1) {
    console.log('solo');
  } else if (musicians == 2) {
    console.log('duet');
  } else if (musicians == 3) {
    console.log('trio');
  } else if (musicians == 4) {
    console.log('Question uartet');
  } else {
    console.log('this is a large group');
  }

//Question 3
console.log(`\nQuestion 3`);

let room = `dining room`;
let suspect = `Mr. Parkes`;
let weapon;
let solved = false;
let result;

if (room == 'dining room' && suspect == 'Mr. Parkes') {
  solved = true;
  weapon = 'knife';
  result = `${suspect} did it in the ${room} with the ${weapon}!`;
} else if (room == 'gallery' && suspect == 'Ms. Van Cleve') {
  solved = true;
  weapon = 'trophy';
  result = ` ${suspect} did it in the ${room} with the ${weapon}!`;
} else if (room == 'ballroom' && suspect == 'Mr. Kalehoff') {
  solved = true;
  weapon = 'poison';
  result = ` ${suspect} did it in the ${room} with the ${weapon}!`;
} else if (room == 'billiards room' && suspect == 'Mrs. Sparr') {
  solved = true;
  weapon = 'pool';
  result = ` ${suspect} did it in the ${room} with the ${weapon}!`;
} else {
  solved = false;
  result = `unable to solve the case`;
}
console.log(result);

//Question 4
console.log(`\nQuestion 4`);

var balance = -325;
var checkBalance = true;
var isActive = true;

if (checkBalance == true) {
  if (isActive == true && balance > 0) {
    console.log(`balance is ${balance.toFixed(2)}.`);
  } else if (isActive == true && balance <= 0) {
    console.log('balance is empty');
  } else if (isActive == false) {
    console.log('Account is not active');
  }
}

//Question 5
console.log(`\nQuestion 5`);

let flavor = 'vanilla';
let vessel = 'cone';
let toppings = 'sprinkles';

if (
  (flavor == 'vanilla' || flavor == 'chocolate') &&
  (vessel == 'cone' || vessel == 'bowl') &&
  (toppings == 'sprinkles' || toppings == 'peanuts')
) {
  console.log(
    `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`
  );
}