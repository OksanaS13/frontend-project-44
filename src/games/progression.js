import { startTheGame, playBrainGames } from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainProgression = () => {
  const instruction = 'What number is missing in the progression?';

  const [name, roundsCount] = startTheGame(instruction);

  const createProgression = (firstNumber, progressionLength, step, hiddenElem) => {
    const progression = [firstNumber];
    let lastNumber = firstNumber;
    for (let i = 1; i < progressionLength; i += 1) {
      lastNumber += step;
      progression.push(lastNumber);
    }
    const clonProgression = progression.slice();
    clonProgression[hiddenElem] = '..';
    const question = clonProgression.join(' ');
    const result = [progression, question];
    return result;
  };

  for (let i = 1; i <= roundsCount; i += 1) {
    const firstNumber = getRandomNumber();
    const progressionLength = getRandomNumber(10, 5);
    const step = getRandomNumber(5, 2);
    const hiddenElem = getRandomNumber(progressionLength);

    const progression = createProgression(firstNumber, progressionLength, step, hiddenElem);
    const question = progression[1];
    const correctAnswer = progression[0][hiddenElem];
    const flag = playBrainGames(question, correctAnswer, i, name);
    if (flag === false) {
      break;
    }
  }
};

export default playBrainProgression;
