const getRandomNumber = (max = 100, min = 0) => Math.floor(Math.random() * (max - min)) + min;

export default getRandomNumber;
