'use strict';

for (let currentNumber = 2; currentNumber <= 100; currentNumber++) {
  let isSimple = true;
  innerloop: for (
    let simpleNumber = 2;
    simpleNumber <= Math.sqrt(currentNumber);
    simpleNumber++
  ) {
    if (currentNumber % simpleNumber === 0) {
      isSimple = false;
      break innerloop;
    }
  }
  if (isSimple) {
    console.log(currentNumber);
  }
}
