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

const brainPrime = () => {
  const randomNumber = getRandomInt(1, 300);
  const correctAnswer = isPrime(randomNumber);
  const question = `Question: ${randomNumber}`;
  return [question, correctAnswer, rules];
};

const startBrainPrime = () => startGame(brainPrime);
export default startBrainPrime;
