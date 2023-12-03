import { startGame } from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const num1 = getRandomInt(1, 50) * 2;
  const num2 = getRandomInt(1, 50) * 2;
  let biggestNumber;
  let smallestNumber;
  if (num1 > num2) {
    biggestNumber = num1;
    smallestNumber = num2;
  } else {
    biggestNumber = num2;
    smallestNumber = num1;
  }

  let remainder;
  let nod;
  while (remainder !== 0) {
    remainder = biggestNumber % smallestNumber;
    if (remainder === 0) {
      nod = smallestNumber;
      break;
    }
    biggestNumber = smallestNumber;
    smallestNumber = remainder;
  }

  const correctAnswer = nod;
  const question = `Question: ${num1} ${num2}`;
  return [question, correctAnswer, rules];
};

const startBrainGcd = () => startGame(brainGcd);
export default startBrainGcd;
