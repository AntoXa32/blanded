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

function getTime(minuts) {
  const hours = Math.floor(minuts / 60);
  const hoursFormat = String(hours).padStart(2, 0);
  const minutes = String(minuts % 60).padStart(2, 0);

  return `${hoursFormat}:${minutes}`;
}

const number = prompt("Add number");
alert("Your time is: " + getTime(number));
// console.log(getTime(number));
