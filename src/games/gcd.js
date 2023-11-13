import readlineSync from 'readline-sync';
import { getRandomInt, greeting, check } from '../index.js';

const gcd = () => {
  const name = greeting();

  for (let i = 0; i < 3; i += 1) {
    const a = getRandomInt(1, 50) * 2;
    const b = getRandomInt(1, 50) * 2;
    // сделать массив с подходящими числами и брать из него случайный эллемент

    console.log('Find the greatest common divisor of given numbers.');
    console.log(`Question: ${a} ${b}`);

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

    // console.log(`НОД = ${nod}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const r = check(userAnswer, String(nod), name);
    if (r === false) return;
  }
  console.log(`Congratulations, ${name}!`);
};

export default gcd;
