import { startGame } from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'What is the result of the expression?';

const getRandomSign = () => {
  const signsArr = ['+', '-', '*'];
  const randomOperation = signsArr[getRandomInt(0, 3)];
  return randomOperation;
};

const doRandomOperation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return console.log(`Error at /index.js:10: Unknown operator into doRandomOperation function: '${operator}'.`);
  }
};

const brainCalc = () => {
  const number1 = getRandomInt(0, 20);
  const number2 = getRandomInt(0, 20);
  const operation = getRandomSign();
  const correctAnswer = doRandomOperation(number1, number2, operation);
  const question = `Question: ${number1} ${operation} ${number2}`;
  return [question, correctAnswer, rules];
};

const startBrainCalc = () => startGame(brainCalc);
export default startBrainCalc;
