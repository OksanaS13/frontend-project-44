import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainGcd = () => {
  const instruction = 'Find the greatest common divisor of given numbers.';
  const prepareRound = () => {
    const numberOne = getRandomNumber();
    const numberTwo = getRandomNumber();
    const question = `${numberOne} ${numberTwo}`;

    const findGCD = (numOne, numTwo) => {
      const commonDivisors = [];
      const smallestNumber = Math.min(numOne, numTwo);
      if (smallestNumber === 0) {
        return Math.max(numOne, numTwo);
      }
      for (let i = 1; i <= smallestNumber; i += 1) {
        if (numOne % i === 0) {
          if (numTwo % i === 0) {
            commonDivisors.push(i);
          }
        }
      }
      return Math.max(...commonDivisors);
    };
    const correctAnswer = findGCD(numberOne, numberTwo);

    return [question, String(correctAnswer)];
  };

  playBrainGames(instruction, prepareRound);
};

export default playBrainGcd;
