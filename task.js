// Дано некоторое число:

// 123456
// Найдите сумму пар цифр этого числа.
// В нашем случае имеется ввиду следующее:

// 12 + 34 + 56

// (нужно чтобы работало для любого числа, то есть функция должна быть универсальной)
// В числе всегда будет четное количество цифр

function sum(number) {
  const str = number.toString();
  const arr = [];
  let summa = 0;
  for (let i = 0; i < str.length; i = i + 2) {
    const num = str[i] + str[i + 1];
    arr.push(+num);
  }
  for (let i = 0; i < arr.length; i++) {
    summa = summa + arr[i];
  }
  console.log(summa);
}

sum(654321);

// .Дан некоторый массив, например, вот такой:

// [14, 2, 3, 44, 5, 6]
// Поделите сумму первой половины элементов
// этого массива на сумму второй половины элементов.

function sum2(arr) {
  let first = 0;
  let second = 0;
  // for (let i = 0; i < arr.length/2; i++) {
  //     first = first + arr[i]
  // }
  // for (let i = arr.length/2; i < arr.length; i++) {
  //     second = second + arr[i]
  // }
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length / 2) {
      first = first + arr[i];
    } else {
      second = second + arr[i];
    }
  }
  console.log(first, second, first / second);
}

sum2([14, 2, 3, 44, 5, 6]);

// task 1

// Написать функцию, которая принимает массив чисел, например [1,2,5,12,15,21] и возвращает среднее арифметическое, (округлить результат до десятых)

const arr1 = [1, 2, 5, 12, 15, 21];

function average(arr) {
  let result = 0;
  let divider = arr.length;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  result = result / divider;
  console.log(result);
}

average(arr1);

// task 2

// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5],
// и переносит первый элемент массива в конец
// (например можно вставить первый элемент в конец, затем удалить первый элемент)

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.length, "length");

function castling(arr) {
  arr.push(arr[0]);
  arr.shift(arr[0]);
  console.log(arr);
}

castling(arr2);

// task 3

// Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// И метод getFullName() - имя и фамиля работника.

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
  getFullName() {
    return `${this.surname} ${this.name}`;
  }
}

const worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName()); //выведет 'Иванов Иван'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// task 4

// Удалить из строки все последовательные повторяющиеся слова, оставив только первые вхождения.  (сделать в виде функции)

// Input:
// alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta
// Output:
// alpha beta gamma delta alpha beta gamma delta

const str =
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";

function task(str) {
  const arr = str.split(" ");
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      if (newArr.length > 0) {
        if (arr[i] != newArr[newArr.length - 1]) {
          newArr.push(arr[i]);
        }
      } else {
        newArr.push(arr[i]);
      }
    } else {
      newArr.push(arr[i]);
      i = i + 1;
    }
  }
  const newStr = newArr.join(" ");
  console.log(newStr);
}

task(str);

// task 5

// 1.У нас есть объект:
let user = { name: "John", years: 30, isAdmin: true };
// let user = {
//   name: "John",
//   years: 30
// };
const { name, years: age = 0, isAdmin = false } = user;
console.log(name, age, isAdmin);
// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (или же присвоит false, если нет такого свойства)
// Пример переменных после вашего присваивания:
// // ваш код должен быть с левой стороны:
// ... = user
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// task 6

let arr = ["John", "Smit", "development", "programmer", 2000];
const [name1, surname, department, position, salary] = arr;
// console.log(name1, surname, department, position, salary);

// task 7
function validatePassword(password) {
  const arr = password.split("");
  console.log(arr);
  let checkNum = false,
    checkLow = false,
    checkUp = false;

  if (arr.length < 8) {
    return false;
  }
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const arrUpperCase = lowerCase.toUpperCase().split("");
  const arrLowerCase = lowerCase.split("");

  for (let i = 0; i < arr.length; i++) {
    if (num.includes(+arr[i])) {
      checkNum = true;
    }
    if (arrUpperCase.includes(arr[i])) {
      checkUp = true;
    }
    if (arrLowerCase.includes(arr[i])) {
      checkLow = true;
    }
  }

  // if (checkLow === true && checkNum === true && checkUp === true ) {
  //   return true
  // }
  // else {
  //   return false
  // }
  return checkLow && checkNum && checkUp;
}

// console.log(validatePassword("abcg44gDEFG"))

// task 7

function isIpValid(address) {
  const addArr = address.split(".");
  let number = [];
  let test1 = false;
  let test2 = false;
  for (let i = 0; i < 256; i++) {
    number.push(i);
  }
  if (addArr.length < 5) {
    test1 = true;
  }

  for (let i = 0; i < addArr.length; i++) {
    if (!number.includes(+addArr[i])) {
      test2 = true;
    }
  }
  if (test1 === true && test2 === false) {
    return true;
  } else {
    false;
  }
  // console.log(test2)
}
console.log(isIpValid("192.168.0.01"));

// task 8

const numArr = [1, 2, 3, 4];

const changeArr = numArr.map((el, i) => {
  return el * i;
});

console.log(changeArr);

// task 9

const heightBus = 512;
function checkBusTour(bridges) {
  for (let i = 0; i < bridges.length; i++) {
    if (heightBus >= bridges[i]) {
      return i + 1;
    }
  }
}

console.log(checkBusTour([600, 1512, 43]));
