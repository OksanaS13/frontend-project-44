/* eslint-disable no-shadow */
import readlineSync from 'readline-sync';

const startTheGame = (instruction) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(instruction);
  return name;
};

const brainGames = (currentQuestion, correctAnswer) => {
  let userAnswer = readlineSync.question(`Question: ${currentQuestion}
Your answer: `);
  if (Number.isInteger(correctAnswer)) {
    userAnswer = Number(userAnswer);
  }
  const result = (userAnswer === correctAnswer) ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  return result;
};

export { startTheGame, brainGames };
