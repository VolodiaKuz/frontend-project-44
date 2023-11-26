import { startGame } from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = () => {
  const randomNumber = getRandomInt(0, 15);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isEven(randomNumber);
  return [question, correctAnswer, rules];
};

const startBrainEven = () => startGame(brainEven);
export default startBrainEven;
