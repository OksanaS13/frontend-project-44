import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const createProgression = (length, start, incr) => {
  const progression = [start];
  let nextNumber = start;
  for (let i = 1; i < length; i += 1) {
    nextNumber += incr;
    progression.push(nextNumber);
  }
  return progression;
};

const prepareRound = () => {
  const firstNumber = getRandomNumber();
  const progressionLength = getRandomNumber(5, 10);
  const step = getRandomNumber(2, 5);
  const hiddenElem = getRandomNumber(0, progressionLength);

  const progression = createProgression(progressionLength, firstNumber, step);

  const createQuestion = (sequence, num) => {
    const clonProgression = sequence.slice();
    clonProgression[num] = '..';
    return clonProgression.join(' ');
  };

  const question = createQuestion(progression, hiddenElem);

  const correctAnswer = progression[hiddenElem];

  return [question, String(correctAnswer)];
};

const instruction = 'What number is missing in the progression?';

const playBrainProgression = () => {
  playBrainGames(instruction, prepareRound);
};

export default playBrainProgression;
