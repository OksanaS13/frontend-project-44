import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainCalc = () => {
  const instruction = 'What is the result of the expression?';

  const prepareRound = () => {
    const numberOne = getRandomNumber(0, 20);
    const numberTwo = getRandomNumber(0, 20);
    const operations = ['+', '-', '*'];
    const operator = operations[getRandomNumber(0, operations.length)];
    const question = `${numberOne} ${operator} ${numberTwo}`;

    const getTheResultOfExpression = (symbol, numOne, numTwo) => {
      switch (symbol) {
        case '+':
          return numOne + numTwo;
        case '-':
          return numOne - numTwo;
        case '*':
          return numOne * numTwo;
        default:
          throw new Error(`Unknown operator: '${symbol}'!`);
      }
    };
    const correctAnswer = getTheResultOfExpression(operator, numberOne, numberTwo);

    return [question, String(correctAnswer)];
  };

  playBrainGames(instruction, prepareRound);
};

export default playBrainCalc;
