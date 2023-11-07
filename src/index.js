import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const check = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );
    console.log(`Let's try again, ${userName}`);
    return false;
  }
};
