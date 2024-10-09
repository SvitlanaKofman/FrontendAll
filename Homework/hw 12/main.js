// Homework
// для каждого задания создайте отдельную функцию - используйте возвращенное значение // у вас должная быть как минимум одна стрелочная функция и одна function declaration функция

// Задание 1
// У вас есть массив объектов:

// const starWarsHeroes = [
//     { name: "Anakin Skywalker", age: 30, isJedi: true },
//     { name: "Luke Skywalker", age: 25, isJedi: true },
//     { name: "Han Solo", age: 35, isJedi: false },
//     { name: "Princess Leia", age: 30, isJedi: false },
//     { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
// ];
// Copy
// Используйте методы массивов

// Создайте на основе старого массива новый массив объектов по образу: [{ name: "Luke Skywalker", isJedi: true }, {name: "Han Solo", isJedi: false}...]

// Задание 1.2
// Создайте новый массив с джедаями младше 40 лет

// Задание 1.3
// Посчитайте возраст всех джедаев

// Задание 1.4
// Повысьте возраст героев на 10 лет

// Задание 1.5
// Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }

const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

const getOutAge = (starWarsHeroes) => {
  const result = {};
  result.name = starWarsHeroes.name;
  result.isJedi = starWarsHeroes.isJedi;
  return result;
};

const starWarsHeroesModified = starWarsHeroes.map(getOutAge);

console.log(starWarsHeroesModified);

//1.2

const filterJedi = (jedi) => (jedi.age < 40 && jedi.isJedi) ? true : false
const filteredStarWarsHeroes = starWarsHeroes.filter(filterJedi);
console.log(filteredStarWarsHeroes);

// 1.3

const sumOfJediAges = starWarsHeroes
.filter((starWarsHero) => starWarsHero.isJedi)
.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    0,
  );
console.log(sumOfJediAges);

//1.4

const starWarsHeroesPlus10Years = starWarsHeroes.map((hero) => ({...hero, age: hero.age + 10}));
console.log(starWarsHeroesPlus10Years);


//1.5
function changeHero(hero) {
    // if (hero.name === 'Anakin Skywalker') {
    //     return { name: "Darth Vader", isJedi: false, age: 50 }
    // } else {
    //     return hero
    // }

    // const res = (hero.name === 'Anakin Skywalker') ? { name: "Darth Vader", isJedi: false, age: 50 } : hero;
    // return res;

    return (hero.name === 'Anakin Skywalker') ? { name: "Darth Vader", isJedi: false, age: 50 } : hero;
};

const starWarsHeroesWithDarthVader = starWarsHeroes.map(changeHero);
console.log(starWarsHeroesWithDarthVader);