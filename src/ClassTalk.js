// class Animal {
//   constructor(options) {
//     this.type = options.type;
//     this.size = options.size;
//   }

//   eat(food) {
//     console.log(`${this.type} is eating ${food}`);
//   }
// }

// const leopardGecko = new Animal({ type: "Leopard Gecko", size: "small" });
// console.log(leopardGecko);
// leopardGecko.eat("Cricket");

// class Dog extends Animal {
//   constructor(options) {
//     super(options);
//     this.breed = options.breed;
//   }

//   bark() {
//     console.log("Woof Woof");
//   }
// }

// const simone = new Dog({ type: "Dog", size: "Large", breed: "Mongrel" });
// console.log(simone);
// simone.eat("Strawberry");
// simone.bark();

// Object
// let rocketClass = {
//   name: "FTBC8",
//   studentCount: 9,
//   teacher: "Sam",
// };

// console.log(rocketClass.name);

// // JSON = JavaScript Object Notation

// let JSONObject = JSON.stringify(rocketClass);

// console.log(rocketClass);
// console.log(JSONObject);

// console.log(JSONObject.name);

let fruitTypes = ["apple", "pear", "banana"];
let fruitsInStore = [];

// Create a random sample of 1000 fruits
for (let i = 0; i < 1000; i++) {
  fruitsInStore.push(fruitTypes[Math.floor(Math.random() * fruitTypes.length)]);
}

// Compile tally of how many of each fruit is in store
const tally = {};
for (const fruit of fruitsInStore) {
  console.log(fruit);
  console.log(tally);
  if (fruit in tally) {
    tally[fruit] += 1;
  } else {
    tally[fruit] = 1;
  }
}

// Determine which fruits are low-stock
let LOW_STOCK_THRESHOLD = 300;
let lowStockFruits = [];
Object.keys(tally).forEach((fruit) => {
  if (tally[fruit] < LOW_STOCK_THRESHOLD) {
    lowStockFruits.push(fruit);
  }
});

// Output fruits with stock below the low stock threshold
console.log(lowStockFruits);
