// // ===================filter=========================================
  
let numArr = [5, 1, 6, 8, 10, 25, -5, -32, 12, -3]
 let filteredArr = numArr.filter(function (value) {
  if (value < 0) {
    return value
  }
 }) 
console.log(filteredArr);

 //find

let result = numArr.find(function(value, index) {
  if (value < 0) {
    return value
  }
})

console.log(result); // 6

// Обьекты
// let person = ["John", "Doe", 18]

let person = {
  firstname: "John",
  lastname: "Doe",
  age: 18,
  hobbies: ["soccer", "gaming"],
  location: {
    city: "Berlin"
  },
  "car model": "BMW",
  carModel: "BMW"
}
console.log(person.firstname)
console.log(person["car model"])
console.log(person.carModel)
person.salary = "1000$"

let oldAge = person.age
person.age = 24
console.log(person)

let persons = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 18,
    salary: 1000
  },
  {
    firstname: "Jane",
    lastname: "Doe",
    age: 24,
    salary: 700
  },
  {
    firstname: "Anna",
    lastname: "Doe",
    age: 32,
    salary: 1500
  },
  {
    firstname: "Mara",
    lastname: "Doe",
    age: 27,
    salary: 2100
  }
  ]
  // Создать новый массив пользователей, где у каждого пользователя появляется новое поле fullname и увеличивается зарплата на 50%
let updatedPersons = persons.map(function(person, index)
{
  let newPerson = structuredClone(person)
  newPerson.fullname = `${person.firstname} ${person.lastname}`
  newPerson.salary += newPerson.salary / 2
  return newPerson
})
console.log(updatedPersons);

// создавать новый массив, где будут только пользователи из массива updatedPersons и у которых возраст больше 25 и зарплата больше 1000

  let newMassive = updatedPersons.filter(function (persons, index)  {
    if (persons.age > 25 && persons.salary > 1000) {
      return persons
    }
   }) 
  console.log(newMassive);

// ranner.getRun10Circles(function(cicleNum) {
//   console.log();
  
// })

// ============ sort ============
let unsortedArr = [1, 333, 2, 44, 5] // [1, 2, 5, 44, 333]
// unsortedArr.sort() 
// [1, 2, 333, 44, 5]
// [1, 333, 2, 44, 5] ["1", "333", "2", "44", "5"]
unsortedArr.sort(function (nextNumber, currentNumber) {
// console.log(`Number = ${currentNumber} | Currentnumber = ${nextNumber}`)
// if (nextNumber < currentNumber) {
// return -1
// } else if (nextNumber == currentNumber) {
// return 0
// } else {
// return 1
// }
return nextNumber - currentNumber
})

// let newArr = unsortedArr.toSorted() не мутирует исходный массив, а возвращает новый

// console.log(unsortedArr)

// [1, 333, 2, 44, 5]
// 1, 333 = 333 - 1 = 332 
// [1, 333, 2, 44, 5]
// 333, 2 = 2 - 333 = -331
// [1, 2, 333, 44, 5]
// 333, 44 = 44 - 333 = result < 0
// [1, 2, 44, 333, 5]
// 333, 5 = 5 - 333 = result < 0
// [1, 2, 44, 5, 333]

// Cортировать пользователей по возрастанию зарплаты
// n = next
// c = current
// updatedPersons.sort(function (n, c) {
//   return n.salary - c.salary
// })
// let newUsers = updatedPersons.toSorted(function (n, c) {
//   return n.salary - c.salary
// })
let newUsers = updatedPersons.toSorted(function (n, c) {
  return n.firstname.localeCompare(c.firstname)
})
// a.localeCompare(b)
// если a === b => 0
// если a > b => 1
// если a < b => -1
console.log(updatedPersons);
console.log(newUsers);

//================

let arrOfNums = [1, 333, 2, 44, 5]
// let sum = 0
// arrOfNums.forEach(function (value) {
//   sum += value
// })

let sum = arrOfNums.reduce(function (sum, value) {
  return sum + value
})
console.log(sum);

// https://pastebin.com/zzHhNHJF

// // ДЗ
// Легкие задачи:
// 1. Дан массив чисел [12, 5, 8, 130, 44]. Создайте новый массив, содержащий только числа больше 10.
// 2. Напишите программу, которая принимает массив строк и возвращает массив длин этих строк по возрастанию.
// ["one", "three", "two"] -> [3, 5, 3] -> [3, 3, 5]
// 3. Есть массив строк. Отсортируйте строки по их длине (от самой короткой к самой длинной) и выведите результат.
// ['hello', 'world', 'javascript', 'code'] => ['code', 'hello', 'world', 'javascript']
// Средной сложности задачи:
// 4. Подсчитайте количество гласных букв в строке. Выведите результат.
// // let vowels = [a, e, i, o, u] (ИСПОЛЬЗОВАТЬ метод includs)
// "hello" -> 2
// "javascript" -> 3
// "world" -> 1
// 5. Дана строка. Отсортировать её символы в алфавитном порядке.
// "javascript"-> "aacijprstv"
// "hello" -> "ehllo"
// Сложные задачи:
// 6. Есть произвольная строка, определите, сколько раз каждый символ встречается в этой строке. Выведите результат в формате: "Символ X => Y".
// // "hello"
// Символ h => 1
// Символ e => 1
// Символ l => 2
// Символ o => 1
// 7. Дан массив чисел [3, 1, 4, 1, 5, 9]. Найдите сумму квадратов всех четных чисел.
// 8. Дан массив чисел. Проверить, упорядочены ли элементы по возрастанию.
// [1, 5, 9, 12, 36] => true
// [1, 5, 12, 9, 36, -5] => false
// 9. Дан массив слов. Создайте объект, где ключами будут первые буквы слов, а значениями — массивы слов, начинающихся на эти буквы. Например։
// ['apple', 'banana', 'apricot', 'blueberry', 'cherry'] -> 
// {
//    a: ['apple', 'apricot'], 
//    b: ['banana', 'blueberry'], 
//    c: ['cherry']
// }