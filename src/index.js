import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export const check = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export const startGame = (gameType) => {
  const name = greeting();
  const [,, rules] = gameType();
  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = gameType();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    const r = check(userAnswer, String(correctAnswer), name);
    if (r === false) return;
  }
  console.log(`Congratulations, ${name}!`);
};
