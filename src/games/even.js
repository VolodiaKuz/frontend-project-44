import { startGame } from '../index.js';
import { getRandomInt } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const random = getRandomInt(0, 15);
  const question = `Question: ${random}`;
  let correctAnswer;
  if (random % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';

  return [question, correctAnswer, rules];
};

const startBrainEven = () => startGame(brainEven);
export default startBrainEven;
