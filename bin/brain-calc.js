#!/usr/bin/env node
/* eslint-disable default-case */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

const operations = ['+', '-', '*'];

const isCorrectAnswer = (numberOne, numberTwo, operator, answer) => {
  let result;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = numberOne + numberTwo;
      break;
    case '-':
      correctAnswer = numberOne - numberTwo;
      break;
    case '*':
      correctAnswer = numberOne * numberTwo;
      break;
  }
  if (answer === correctAnswer) {
    result = 'Correct!';
  } else {
    result = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  }
  return result;
};

let flag = true;

for (let i = 0; i < 3; i += 1) {
  const numberOne = Math.floor(Math.random() * 20);
  const numberTwo = Math.floor(Math.random() * 20);
  const operator = operations[Math.floor(Math.random() * operations.length)];
  const currentAnswer = Number(readlineSync.question(`Question: ${numberOne} ${operator} ${numberTwo}
Your answer: `));
  const currentResult = isCorrectAnswer(numberOne, numberTwo, operator, currentAnswer);
  console.log(currentResult);
  if (currentResult !== 'Correct!') {
    flag = false;
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (flag === true) {
  console.log(`Congratulations, ${name}!`);
}
