import { startGame } from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'What number is missing in the progression?';

const brainProgression = () => {
  const firstElement = getRandomInt(0, 20);
  const progressionArray = [firstElement];
  const elementIncrement = getRandomInt(0, 6) + 1;

  for (let j = 0; j < 9; j += 1) {
    progressionArray.push(progressionArray[j] + elementIncrement);
  }

  const randomElement = getRandomInt(0, 10);
  const correctAnswer = progressionArray[randomElement];
  progressionArray[randomElement] = '..';

  const arrayWithSpace = progressionArray.join(' ');

  const question = `Question: ${arrayWithSpace}`;
  return [question, correctAnswer, rules];
};

const startBrainProgression = () => startGame(brainProgression);
export default startBrainProgression;
