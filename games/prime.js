import { startTheGame, brainGames } from '../src/index.js';

const brainPrime = () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const name = startTheGame(instruction);

  const findOutCorrectAnswer = (number) => {
    let divisorsCount = 0;
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        divisorsCount += 1;
        break;
      }
    }
    return (divisorsCount === 0) ? 'yes' : 'no';
  };

  let flag = true;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const question = Math.floor((Math.random() * 100) + 1);
    const correctAnswer = findOutCorrectAnswer(question);
    const result = brainGames(question, correctAnswer);
    console.log(result);
    if (result !== 'Correct!') {
      flag = false;
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (flag === true) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainPrime;
