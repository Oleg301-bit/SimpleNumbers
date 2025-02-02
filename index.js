"use strict";

let currentNumber = 2;
const lastNumber = 100;

// Внешний цикл перебираем все чсла от 1 до 100 но начинаем с 2 так 1 - число исключение
outerLoop: while (currentNumber <= lastNumber) {
  let isSimple = true;
  let simpleNumber = 2;

  // Внутренний цикл проверяет делители от 2 до sqrt(currentNumber)
  innerLoop: while (simpleNumber <= Math.sqrt(currentNumber)) {
    if (currentNumber % simpleNumber === 0) {
      isSimple = false;
      break innerLoop; // Прерываем внутренний цикл
    }
    simpleNumber++;
  }

  if (isSimple) {
    console.log(currentNumber);
  }

  currentNumber++;
}
