import { startTheGame, brainGames } from '../index.js';

const playBrainCalc = () => {
  const instruction = 'What is the result of the expression?';

  const name = startTheGame(instruction);

  const operations = ['+', '-', '*'];

  const findOutCorrectAnswer = (numberOne, numberTwo, operator) => {
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
    return correctAnswer;
  };

  let flag = true;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const numberOne = Math.floor(Math.random() * 20);
    const numberTwo = Math.floor(Math.random() * 20);
    const operator = operations[Math.floor(Math.random() * operations.length)];
    const question = `${numberOne} ${operator} ${numberTwo}`;
    const correctAnswer = findOutCorrectAnswer(numberOne, numberTwo, operator);
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

export default playBrainCalc;
