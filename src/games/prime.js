import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  let divisorsCount = 0;
  if (number < 2) {
    divisorsCount += 1;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      divisorsCount += 1;
      break;
    }
  }
  return divisorsCount === 0;
};

const prepareRound = () => {
  const question = getRandomNumber(1, 100);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playBrainPrime = () => {
  playBrainGames(instruction, prepareRound);
};

export default playBrainPrime;
