import readlineSync from 'readline-sync';
import { getRandomInt, greeting, check } from '../index.js';

const progression = () => {
  const name = greeting();

  for (let i = 0; i < 3; i++) {
    const firstElement = getRandomInt(20);
    const arr1 = [firstElement];
    const elementIncrement = getRandomInt(6) + 1;

    for (let i = 0; i < 9; i++) {
      arr1.push(arr1[i] + elementIncrement);
    }

    const randomElement = getRandomInt(10);
    const correctAnswer = arr1[randomElement];
    arr1[randomElement] = '..';

    const arrayWithSpace = arr1.join(' ');
    console.log('What number is missing in the progression?');
    console.log(`Question: ${arrayWithSpace}`);
    const userAnswer = readlineSync.question('Your answer: ');

    let r = check(userAnswer, correctAnswer, name);
    if (r === false) return;
  }
  return console.log(`Congratulations, ${name}`);
};

export default progression;
