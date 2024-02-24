/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

function askCwastion() {
  const userAnswe = prompt("Яка офіційна назва JavaScript?");
  if (userAnswe === "ECMAScript") {
    alert("Вірно!");
  } else {
    alert("Не знаєте? ECMAScript!");
  }
}

askCwastion();
