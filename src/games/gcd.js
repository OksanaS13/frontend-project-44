import _ from 'lodash';
import { startTheGame, brainGames } from '../index.js';

const playBrainGcd = () => {
  const instruction = 'Find the greatest common divisor of given numbers.';

  const name = startTheGame(instruction);

  const findOutCorrectAnswer = (numberOne, numberTwo) => {
    const divisorsOne = [];
    const divisorsTwo = [];
    const smallestNumber = Math.min(numberOne, numberTwo);
    for (let i = 1; i <= smallestNumber; i += 1) {
      if (numberOne % i === 0) {
        divisorsOne.push(i);
      }
      if (numberTwo % i === 0) {
        divisorsTwo.push(i);
      }
    }
    const commonDivisors = _.intersection(divisorsOne, divisorsTwo);
    const maxDivisor = Math.max(...commonDivisors);
    return maxDivisor;
  };

  let flag = true;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const numberOne = Math.floor((Math.random() * 100) + 1);
    const numberTwo = Math.floor((Math.random() * 100) + 1);
    const question = `${numberOne} ${numberTwo}`;
    const correctAnswer = findOutCorrectAnswer(numberOne, numberTwo);
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

export default playBrainGcd;
