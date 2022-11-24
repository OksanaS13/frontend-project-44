import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainEven = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
  const playRound = () => {
    const question = getRandomNumber(100, 1);
    let correctAnswer;
    if (question % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    return [question, correctAnswer];
  };

  playBrainGames(instruction, playRound);
};

export default playBrainEven;
