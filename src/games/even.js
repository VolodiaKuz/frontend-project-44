import { startGame } from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const randomNumber = getRandomInt(0, 15);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer, rules];
};

const startBrainEven = () => startGame(brainEven);
export default startBrainEven;
