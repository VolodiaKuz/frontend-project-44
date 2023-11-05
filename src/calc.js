import readlineSync from 'readline-sync';
import greeting from '../src/index.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getRandomSign = () => {
  let randomOperation = getRandomInt(3);
  if (randomOperation === 0) {
    randomOperation = '+';
  } else if (randomOperation === 1) {
    randomOperation = '-';
  } else if (randomOperation === 2) {
    randomOperation = '*';
  }
  return randomOperation;
};

const calculate = (a, b, c) => {
  if (c === '+') {
    return a + b;
  } else if (c === '-') {
    return a - b;
  }
  if (c === '*') {
    return a * b;
  }
};

const brainCalc = () => {
  const name = greeting();
  const roundsNumber = 3;

  for (let i = 0; i < roundsNumber; i++) {
    const number1 = getRandomInt(20);
    const number2 = getRandomInt(20);
    const operation = getRandomSign();
    const correctAnswer = calculate(number1, number2, operation);
    //console.log(correctAnswer);
    console.log('What is the result of the expression?');
    console.log(`${number1} ${operation} ${number2}`);
    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = Number(userAnswer);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`
      );
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default brainCalc;
