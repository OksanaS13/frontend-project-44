import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainEven = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
  const prepareRound = () => {
    const question = getRandomNumber(1, 100);

    const isEven = (number) => (number % 2 === 0);
    const correctAnswer = (isEven(question)) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  playBrainGames(instruction, prepareRound);
};

export default playBrainEven;
