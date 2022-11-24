import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainPrime = () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const playRound = () => {
    const question = getRandomNumber(100, 1);

    let divisorsCount = 0;
    if (question < 2) {
      divisorsCount += 1;
    }
    for (let i = 2; i <= Math.sqrt(question); i += 1) {
      if (question % i === 0) {
        divisorsCount += 1;
        break;
      }
    }
    const correctAnswer = (divisorsCount === 0) ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  playBrainGames(instruction, playRound);
};

export default playBrainPrime;
