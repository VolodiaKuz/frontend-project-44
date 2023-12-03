import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const startGame = (gameType) => {
  const name = greeting();
  //const [,, rules] = gameType();
  //console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer, rules] = gameType();
    if (i === 0) console.log(rules);
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
