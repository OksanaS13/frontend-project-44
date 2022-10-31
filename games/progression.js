import { startTheGame, brainGames } from '../src/index.js';

const brainProgression = () => {
  const instruction = 'What number is missing in the progression?';

  const name = startTheGame(instruction);

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

  let flag = true;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = Math.floor(Math.random() * 100);
    const progressionLength = Math.floor((Math.random() * 10) + 5);
    const step = Math.floor((Math.random() * 5) + 2);
    const hiddenElem = Math.floor(Math.random() * progressionLength);

    const progression = createProgression(firstNumber, progressionLength, step, hiddenElem);
    const question = progression[1];
    const correctAnswer = progression[0][hiddenElem];
    const result = brainGames(question, correctAnswer);
    console.log(result);
    if (result !== 'Correct!') {
      flag = false;
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (flag === true) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainProgression;
