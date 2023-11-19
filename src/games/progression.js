import { getRandomInt, startGame } from '../index.js';

const rules = 'What number is missing in the progression?';

const brainProgression = () => {
  const firstElement = getRandomInt(0, 20);
  const arr1 = [firstElement];
  const elementIncrement = getRandomInt(0, 6) + 1;

  for (let j = 0; j < 9; j += 1) {
    arr1.push(arr1[j] + elementIncrement);
  }

  const randomElement = getRandomInt(0, 10);
  const correctAnswer = arr1[randomElement];
  arr1[randomElement] = '..';

  const arrayWithSpace = arr1.join(' ');

  const question = `Question: ${arrayWithSpace}`;
  return [question, correctAnswer, rules];
};

const startBrainProgression = () => startGame(brainProgression);
export default startBrainProgression;
