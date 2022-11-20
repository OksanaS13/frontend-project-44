import { startTheGame, playBrainGames } from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainPrime = () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const [name, roundsCount] = startTheGame(instruction);

  const findOutCorrectAnswer = (number) => {
    let divisorsCount = 0;
    if (number === 1) {
      divisorsCount += 1;
    }
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        divisorsCount += 1;
        break;
      }
    }
    return (divisorsCount === 0) ? 'yes' : 'no';
  };

  for (let i = 1; i <= roundsCount; i += 1) {
    const question = getRandomNumber(100, 1);
    const correctAnswer = findOutCorrectAnswer(question);
    const flag = playBrainGames(question, correctAnswer, i, name);
    if (flag === false) {
      break;
    }
  }
};

export default playBrainPrime;
