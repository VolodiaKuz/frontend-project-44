import { getRandomInt, startGame } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const a = getRandomInt(1, 50) * 2;
  const b = getRandomInt(1, 50) * 2;
  let biggestNumber;
  let smallestNumber;
  if (a > b) {
    biggestNumber = a;
    smallestNumber = b;
  } else {
    biggestNumber = b;
    smallestNumber = a;
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
  const question = `Question: ${a} ${b}`;
  return [question, correctAnswer, rules];
};

const startBrainGcd = () => startGame(brainGcd);
export default startBrainGcd;
