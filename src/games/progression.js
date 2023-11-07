import readlineSync from 'readline-sync';
import { getRandomInt, greeting, check } from '../index.js';

const progression = () => {
  const name = greeting();

  for (let i = 0; i < 3; i += 1) {
    const firstElement = getRandomInt(20);
    const arr1 = [firstElement];
    const elementIncrement = getRandomInt(6) + 1;

    for (let j = 0; j < 9; j += 1) {
      arr1.push(arr1[j] + elementIncrement);
    }

    const randomElement = getRandomInt(10);
    const correctAnswer = arr1[randomElement];
    arr1[randomElement] = '..';

    const arrayWithSpace = arr1.join(' ');
    console.log('What number is missing in the progression?');
    console.log(`Question: ${arrayWithSpace}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const r = check(Number(userAnswer), correctAnswer, name);
    if (r === false) return;
  }
  console.log(`Congratulations, ${name}!`);
};

export default progression;
