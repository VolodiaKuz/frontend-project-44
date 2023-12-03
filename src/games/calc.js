import { startGame } from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'What is the result of the expression?';

const getRandomOperation = () => {
  const randomSignsArray = ['+', '-', '*'];
  return randomSignsArray[getRandomInt(0, 3)];
};

const doRandomOperation = (num1, num2, randomOperation) => {
  switch (randomOperation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${randomOperation}'!`);
  }
};

const brainCalc = () => {
  const number1 = getRandomInt(0, 20);
  const number2 = getRandomInt(0, 20);
  const randomOperation = getRandomOperation();
  const correctAnswer = doRandomOperation(number1, number2, randomOperation);
  const question = `Question: ${number1} ${randomOperation} ${number2}`;
  return [question, String(correctAnswer), rules];
};

const startBrainCalc = () => startGame(brainCalc);
export default startBrainCalc;
