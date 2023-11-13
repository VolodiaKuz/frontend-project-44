import readlineSync from 'readline-sync';
import { getRandomInt, greeting, check } from '../index.js';

const getRandomSign = () => {
  const signsArr = ['+', '-', '*'];
  const randomOperation = signsArr[getRandomInt(0, 3)];
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

  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(0, 20);
    const number2 = getRandomInt(0, 20);
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
