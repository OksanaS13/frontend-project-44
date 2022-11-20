/* eslint-disable no-shadow */
import readlineSync from 'readline-sync';

const startTheGame = (instruction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const roundsCount = 3;
  console.log(instruction);
  return [name, roundsCount];
};

const playBrainGames = (currentQuestion, correctAnswer, roundCounter, name) => {
  let flag = true;
  let userAnswer = readlineSync.question(`Question: ${currentQuestion}
Your answer: `);
  if (Number.isInteger(correctAnswer)) {
    userAnswer = Number(userAnswer);
  }
  const result = (userAnswer === correctAnswer) ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  console.log(result);
  if (result !== 'Correct!') {
    flag = false;
    console.log(`Let's try again, ${name}!`);
  } else if (roundCounter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
  return flag;
};

export { startTheGame, playBrainGames };
