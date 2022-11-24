import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainGcd = () => {
  const instruction = 'Find the greatest common divisor of given numbers.';
  const playRound = () => {
    const numberOne = getRandomNumber();
    const numberTwo = getRandomNumber();
    const question = `${numberOne} ${numberTwo}`;

    let correctAnswer;
    const commonDivisors = [];
    const smallestNumber = Math.min(numberOne, numberTwo);
    if (smallestNumber === 0) {
      correctAnswer = Math.max(numberOne, numberTwo);
    } else {
      for (let i = 1; i <= smallestNumber; i += 1) {
        if (numberOne % i === 0) {
          if (numberTwo % i === 0) {
            commonDivisors.push(i);
          }
        }
      }
      correctAnswer = Math.max(...commonDivisors);
    }
    return [question, String(correctAnswer)];
  };

  playBrainGames(instruction, playRound);
};

export default playBrainGcd;
