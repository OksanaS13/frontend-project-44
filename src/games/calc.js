import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const getResultOfExpression = (operator, numOne, numTwo) => {
  switch (operator) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const prepareRound = () => {
  const numberOne = getRandomNumber(0, 20);
  const numberTwo = getRandomNumber(0, 20);
  const operations = ['+', '-', '*'];
  const operator = operations[getRandomNumber(0, operations.length)];
  const question = `${numberOne} ${operator} ${numberTwo}`;

  const correctAnswer = getResultOfExpression(operator, numberOne, numberTwo);

  return [question, String(correctAnswer)];
};

const instruction = 'What is the result of the expression?';

const playBrainCalc = () => {
  playBrainGames(instruction, prepareRound);
};

export default playBrainCalc;
