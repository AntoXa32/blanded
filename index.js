/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

// function askCwastion() {
//   const userAnswe = prompt("Яка офіційна назва JavaScript?");
//   if (userAnswe === "ECMAScript") {
//     alert("Вірно!");
//   } else {
//     alert("Не знаєте? ECMAScript!");
//   }
// }

// askCwastion();

/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */

// function getTime(minuts) {
//   const hours = Math.floor(minuts / 60);
//   const hoursFormat = String(hours).padStart(2, 0);
//   const minutes = String(minuts % 60).padStart(2, 0);

//   return `${hoursFormat}:${minutes}`;
// }

// const number = prompt("Add number");
// alert("Your time is: " + getTime(number));
// console.log(getTime(number));

// Створіть змінну з ім'ям "userAge" і присвойте їй значення вашого віку. Напишіть функцію з ім'ям "checkAge",
//   яка приймає один параметр "вік" і перевіряє, чи є цей вік дорослим(більше або дорівнює 18).Функція повинна
//   повертати true, якщо вік дорослий, і false в іншому випадку.Викличте цю функцію, передаючи змінну "userAge",
//   і виведіть результат в консоль.

// const userAge = 35;
// // function checkAge(age) {
// //   if (age >= 18) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }
// function checkAge(age) {
//   return age >= 18;
// }
// console.log("🚀 ~ checkAge:", checkAge(userAge));

/**
 *? У змінній min лежить число від 0 до 59.
 *? Визначте, в яку чверть години потрапляє
 *? це число (у першу, другу, третю чи четверту).
 */

// const min = 15;
// function time(number) {
//   if (number <= 15) {
//     return 1;
//   } else if (number > 15 && number <= 30) {
//     return 2;
//   } else if (number > 30 && number <= 45) {
//     return 3;
//   } else return 4;
// }
// console.log(time(min));

/**
*? Напишіть код, який запитуватиме
*? логін за допомогою prompt та логувати результат
*? у консоль браузера
    
*? Якщо відвідувач вводить "Адмін",
*? то prompt запитує пароль.
*? Якщо нічого не ввели або натиснуто клавішу Esc
*? вивести рядок "Скасовано"
*? В іншому випадку вивести рядок "Я вас не знаю"
    
*? Пароль перевіряти так:
*? Якщо введено пароль "Я головний",
*? то вивести рядок "Здрастуйте!"
*? інакше виводити рядок "Невірний пароль!"
 */

const login = prompt("Введіть логін");
console.log(login);
if (login === "Адмін") {
  const password = prompt("Пароль");
  if (password === "Я головний") {
    alert("Здрастуйте!");
  } else {
    alert("Невірний пароль!");
  }
} else if (login === "" || login === null) {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}
