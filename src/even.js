import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i++) {
    const random = getRandomInt(15);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');

    if (
      (random % 2 === 0 && answer === 'yes') ||
      (random % 2 !== 0 && answer === 'no')
    ) {
      console.log('Correct!');
    } else if (random % 2 === 0 && answer === 'no') {
      return (
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was 'yes'.`
        ),
        console.log(`Let's try again, ${name}`)
      );
    } else if (random % 2 !== 0 && answer === 'yes') {
      return (
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`),
        console.log(`Let's try again, ${name}`)
      );
    } else {
      return (
        console.log(`'${answer}' is wrong answer ;(.`),
        console.log(`Let's try again, ${name}`)
      );
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default even;
