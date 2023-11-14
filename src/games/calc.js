import { getRandomInt, startGame } from '../index.js';

const rules = 'What is the result of the expression?';

const getRandomSign = () => {
  const signsArr = ['+', '-', '*'];
  const randomOperation = signsArr[getRandomInt(0, 3)];
  return randomOperation;
};

const doRandomOperation = (a, b, c) => {
  switch (c) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return console.log('doRandomOperation function crushed');
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

const StartBrainCalc = () => startGame(brainCalc);
export default StartBrainCalc;
