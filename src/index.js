import readlineSync from 'readline-sync';

const playBrainGames = (instruction, playRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(instruction);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [currentQuestion, correctAnswer] = playRound();
    const userAnswer = String(readlineSync.question(`Question: ${currentQuestion}
Your answer: `));
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (i === roundsCount) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
export default playBrainGames;
