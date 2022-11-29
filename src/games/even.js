import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const prepareRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const playBrainEven = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  playBrainGames(instruction, prepareRound);
};

export default playBrainEven;
