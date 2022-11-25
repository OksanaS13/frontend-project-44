import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainProgression = () => {
  const instruction = 'What number is missing in the progression?';

  const prepareRound = () => {
    const firstNumber = getRandomNumber();
    const progressionLength = getRandomNumber(5, 10);
    const step = getRandomNumber(2, 5);
    const hiddenElem = getRandomNumber(0, progressionLength);

    const createAProgression = (length, start, incr) => {
      const progression = [start];
      let nextNumber = firstNumber;
      for (let i = 1; i < length; i += 1) {
        nextNumber += incr;
        progression.push(nextNumber);
      }
      return progression;
    };

    const progression = createAProgression(progressionLength, firstNumber, step);

    const createAQuestion = (sequence, num) => {
      const clonProgression = sequence.slice();
      clonProgression[num] = '..';
      return clonProgression.join(' ');
    };

    const question = createAQuestion(progression, hiddenElem);

    const correctAnswer = progression[hiddenElem];

    return [question, String(correctAnswer)];
  };

  playBrainGames(instruction, prepareRound);
};

export default playBrainProgression;
