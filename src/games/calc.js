import readlineSync from 'readline-sync';
import { getRandomInt, greeting, check } from '../index.js';

const getRandomSign = () => {
  let randomOperation = getRandomInt(3);
  if (randomOperation === 0) {
    randomOperation = '+';
  } else if (randomOperation === 1) {
    randomOperation = '-';
  } else if (randomOperation === 2) {
    randomOperation = '*';
  }
  return randomOperation;
};

const calculate = (a, b, c) => {
  if (c === '+') {
    return a + b;
  }
  if (c === '-') {
    return a - b;
  }
  return a * b;
};

const brainCalc = () => {
  const name = greeting();
  const roundsNumber = 3;

  for (let i = 0; i < roundsNumber; i += 1) {
    const number1 = getRandomInt(20);
    const number2 = getRandomInt(20);
    const operation = getRandomSign();
    const correctAnswer = calculate(number1, number2, operation);

    console.log('What is the result of the expression?');
    console.log(`Question: ${number1} ${operation} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const r = check(userAnswer, String(correctAnswer), name);
    if (r === false) return;
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainCalc;
