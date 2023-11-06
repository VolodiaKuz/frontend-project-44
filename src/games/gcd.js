import readlineSync from 'readline-sync';
import { getRandomInt, greeting, check } from '../index.js';

const gcd = (a, b) => {
  const name = greeting();

  for (let i = 0; i < 3; i++) {
    a = getRandomInt(50) * 2;
    b = getRandomInt(50) * 2;
    //сделать массив с подходящими числами и брать из него случайный эллемент

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

    console.log(`НОД = ${nod}`);
    const userAnswer = readlineSync.question('Your answer: ');

    let r = check(userAnswer, nod, name);
    if (r === false) return;
  }
  return console.log(`Congratulations, ${name}`);
};

export default gcd;
