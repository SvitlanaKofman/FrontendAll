//Задание 1
const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];

let namesAndAges = [];

for (let i = 0; i < names.length; i++) {
  namesAndAges.push(`${names[i]} ${ages[i]} лет.годов`);
}

console.log(namesAndAges);

//Задание 2

let namesAndAgesReversed = [];

for (let i = names.length - 1; i >= 0; i--) {
  namesAndAgesReversed.push(namesAndAges[i]);
}

console.log(namesAndAgesReversed);

//Задание 3

let countries = [];
countries.push("Франция", "Германия", "Италия");
console.log(countries);

let deletedCountry = countries.pop();

console.log(countries);
console.log(deletedCountry);

const countriesNew = [deletedCountry, ...countries, "Испания"];

countries.unshift(deletedCountry);

console.log(countriesNew);
console.log(countries);

//Задание 4

let car = {
  brand: "bmw",
  model: "x5",
  year: "2012",
  isElectric: false,
  getCarInfo: () => `${car.brand}, ${car.model}, ${car.year}`,
};

console.log(car.getCarInfo());

for (let key in car) {
  console.log(`key: ${key}, value: ${car[key]}`);
}


console.log(Object.keys(car));
console.log(Object.values(car));


