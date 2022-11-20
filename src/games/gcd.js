import { startTheGame, playBrainGames } from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainGcd = () => {
  const instruction = 'Find the greatest common divisor of given numbers.';
  const [name, roundsCount] = startTheGame(instruction);

  const findOutCorrectAnswer = (numberOne, numberTwo) => {
    const commonDivisors = [];
    const smallestNumber = Math.min(numberOne, numberTwo);
    for (let i = 1; i <= smallestNumber; i += 1) {
      if (numberOne % i === 0) {
        if (numberTwo % i === 0) {
          commonDivisors.push(i);
        }
      }
    }
    const maxDivisor = Math.max(...commonDivisors);
    return maxDivisor;
  };

  for (let i = 1; i <= roundsCount; i += 1) {
    const numberOne = getRandomNumber();
    const numberTwo = getRandomNumber();
    const question = `${numberOne} ${numberTwo}`;
    const correctAnswer = findOutCorrectAnswer(numberOne, numberTwo);
    const flag = playBrainGames(question, correctAnswer, i, name);
    if (flag === false) {
      break;
    }
  }
};

export default playBrainGcd;
