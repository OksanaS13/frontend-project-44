import { startTheGame, brainGames } from '../index.js';

const playBrainEven = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = startTheGame(instruction);

  let flag = true;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const question = Math.floor((Math.random() * 100) + 1);
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
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

export default playBrainEven;
