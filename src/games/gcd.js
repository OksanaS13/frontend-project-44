import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const findGCD = (numOne, numTwo) => {
  const remainder = numOne % numTwo;
  return ((numTwo > 0) ? findGCD(numTwo, remainder) : numOne);
};

const prepareRound = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const question = `${numberOne} ${numberTwo}`;

  const correctAnswer = findGCD(numberOne, numberTwo);

  return [question, String(correctAnswer)];
};

const instruction = 'Find the greatest common divisor of given numbers.';

const playBrainGcd = () => {
  playBrainGames(instruction, prepareRound);
};

export default playBrainGcd;
