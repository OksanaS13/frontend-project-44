#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isCorrectAnswer = (number, answer) => {
  let result;
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  if (answer === correctAnswer) {
    result = 'Correct!';
  } else {
    result = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  }
  return result;
};

let flag = true;

// eslint-disable-next-line no-restricted-syntax
for (let i = 0; i < 3; i += 1) {
  const number = Math.floor((Math.random() * 100) + 1);
  const currentAnswer = readlineSync.question(`Question: ${number}
Your answer: `);
  const currentResult = isCorrectAnswer(number, currentAnswer);
  console.log(currentResult);
  if (currentResult !== 'Correct!') {
    // eslint-disable-next-line no-unused-vars
    flag = false;
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (flag === true) {
  console.log(`Congratulations, ${name}!`);
}