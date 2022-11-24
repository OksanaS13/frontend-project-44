import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainCalc = () => {
  const instruction = 'What is the result of the expression?';

  const playRound = () => {
    const numberOne = getRandomNumber(20);
    const numberTwo = getRandomNumber(20);
    const operations = ['+', '-', '*'];
    const operator = operations[getRandomNumber(operations.length)];
    const question = `${numberOne} ${operator} ${numberTwo}`;

    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = numberOne + numberTwo;
        break;
      case '-':
        correctAnswer = numberOne - numberTwo;
        break;
      case '*':
        correctAnswer = numberOne * numberTwo;
        break;
      default:
        throw new Error(`Unknown operator: '${operator}'!`);
    }

    return [question, String(correctAnswer)];
  };

  playBrainGames(instruction, playRound);
};

export default playBrainCalc;
