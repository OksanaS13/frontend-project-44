import { startTheGame, playBrainGames } from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainCalc = () => {
  const instruction = 'What is the result of the expression?';

  const [name, roundsCount] = startTheGame(instruction);

  const operations = ['+', '-', '*'];

  const findOutCorrectAnswer = (numberOne, numberTwo, operator) => {
    switch (operator) {
      case '+':
        return numberOne + numberTwo;
      case '-':
        return numberOne - numberTwo;
      case '*':
        return numberOne * numberTwo;
      default:
        throw new Error(`Unknown operator: '${operator}'!`);
    }
  };

  for (let i = 1; i <= roundsCount; i += 1) {
    const numberOne = getRandomNumber(20);
    const numberTwo = getRandomNumber(20);
    const operator = operations[getRandomNumber(operations.length)];
    const question = `${numberOne} ${operator} ${numberTwo}`;
    const correctAnswer = findOutCorrectAnswer(numberOne, numberTwo, operator);
    const flag = playBrainGames(question, correctAnswer, i, name);
    if (flag === false) {
      break;
    }
  }
};

export default playBrainCalc;
