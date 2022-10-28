import { startTheGame, brainGames } from '../src/index.js';

const brainCalc = () => {
  const instruction = 'What is the result of the expression?';

  const name = startTheGame(instruction);

  const operations = ['+', '-', '*'];

  const findOutCorrectAnswer = (numberOne, numberTwo, operator) => {
    let correctAnswer;

    // eslint-disable-next-line default-case
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

export default brainCalc;
