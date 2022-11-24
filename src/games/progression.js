import playBrainGames from '../index.js';
import getRandomNumber from '../utils.js';

const playBrainProgression = () => {
  const instruction = 'What number is missing in the progression?';

  const playRound = () => {
    const firstNumber = getRandomNumber();
    const progressionLength = getRandomNumber(10, 5);
    const step = getRandomNumber(5, 2);
    const hiddenElem = getRandomNumber(progressionLength);

    const progression = [firstNumber];
    let nextNumber = firstNumber;
    for (let i = 1; i < progressionLength; i += 1) {
      nextNumber += step;
      progression.push(nextNumber);
    }
    const clonProgression = progression.slice();
    clonProgression[hiddenElem] = '..';
    const question = clonProgression.join(' ');
    const correctAnswer = progression[hiddenElem];

    return [question, String(correctAnswer)];
  };

  playBrainGames(instruction, playRound);
};

export default playBrainProgression;
