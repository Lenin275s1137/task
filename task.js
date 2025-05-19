// Дано некоторое число:

// 123456
// Найдите сумму пар цифр этого числа. 
// В нашем случае имеется ввиду следующее:

// 12 + 34 + 56

// (нужно чтобы работало для любого числа, то есть функция должна быть универсальной) 
// В числе всегда будет четное количество цифр

function sum(number) {
    const str = number.toString()
    const arr = []
    let summa = 0
    for (let i = 0; i < str.length; i = i + 2) {
        const num = str[i]+str[i+1]
        arr.push(+num)
    }
    for (let i = 0; i < arr.length; i++) {
        summa = summa + arr[i] 
        
    }
    console.log(summa)
}

sum(654321)

// .Дан некоторый массив, например, вот такой:

// [14, 2, 3, 44, 5, 6]
// Поделите сумму первой половины элементов 
// этого массива на сумму второй половины элементов.

function sum2(arr) {
    let first = 0
    let second = 0
    // for (let i = 0; i < arr.length/2; i++) {
    //     first = first + arr[i]
    // }
    // for (let i = arr.length/2; i < arr.length; i++) {
    //     second = second + arr[i]
    // }
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length/2) {
            first = first + arr[i]
        }
        else {
            second = second + arr[i]
        }
    }
    console.log(first, second, first/second)
}

sum2([14, 2, 3, 44, 5, 6])


// task 1

// Написать функцию, которая принимает массив чисел, например [1,2,5,12,15,21] и возвращает среднее арифметическое, (округлить результат до десятых)

const arr1 = [1,2,5,12,15,21]

function average(arr) {
    let result = 0
    let divider = arr.length
    for (let i = 0; i < arr.length; i++) {
        result = (result + arr[i])
    }
    result = result/divider
    console.log(result)
}

average(arr1)

// task 2 

// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], 
// и переносит первый элемент массива в конец 
// (например можно вставить первый элемент в конец, затем удалить первый элемент)

const arr2 = [1,2,3,4,5]

function castling(arr) {
    arr.push(arr[0])
    arr.shift(arr[0])
    console.log(arr)
}

castling(arr2)

// task 3 

// Реализуйте класс Worker (Работник), который будет иметь 
// следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. 
// И метод getFullName() - имя и фамиля работника.


class Worker {
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getSalary() {
        return this.rate*this.days
    }
    getFullName() {
        return `${this.surname} ${this.name}`
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

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

const str = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

function task(str) {
    const arr = str.split(' ')
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] != arr[i+1]) {
            newArr.push(arr[i])
        }
        else {
            newArr.push(arr[i])
            i = i + 1
        }
        
    }
    const newStr = newArr.join(' ')
    console.log(newStr)
}

task(str)
