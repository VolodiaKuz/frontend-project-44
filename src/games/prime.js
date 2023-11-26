import { startGame } from '../index.js';
import { getRandomInt } from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 0 || number === 1) {
    return 'no';
  }

  if (number === 2) {
    return 'yes';
  }

  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) {
      return 'no';
    }
  }
  return 'yes';
}

const getRandomNumber = () => {
  let randomQuestion;
  const arr1 = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
    613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
    709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809,
  ];
  const randomPrime = arr1[getRandomInt(1, 57)];
  const randomNotPrime = getRandomInt(1, 300);

  if (randomPrime > randomNotPrime) {
    randomQuestion = randomPrime;
  } else {
    randomQuestion = randomNotPrime;
  }
  return randomQuestion;
};

const brainPrime = () => {
  const randomNumber = getRandomNumber(200);
  const correctAnswer = isPrime(randomNumber);
  const question = `Question: ${randomNumber}`;
  return [question, correctAnswer, rules];
};

const startBrainPrime = () => startGame(brainPrime);
export default startBrainPrime;
