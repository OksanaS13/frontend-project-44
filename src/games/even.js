import { startTheGame, playBrainGames } from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainEven = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
  const [name, roundsCount] = startTheGame(instruction);

  function findOutCorrectAnswer(number) {
    return (number % 2 === 0) ? 'yes' : 'no';
  }

  for (let i = 1; i <= roundsCount; i += 1) {
    const question = getRandomNumber(100, 1);
    const correctAnswer = findOutCorrectAnswer(question);
    const flag = playBrainGames(question, correctAnswer, i, name);
    if (flag === false) {
      break;
    }
  }
};

export default playBrainEven;
