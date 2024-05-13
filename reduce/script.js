const number = [1, 2, 3, 4, 5, 6];

const num = 0;
const sumFun = number.reduce((accumulator, currentValue) => {
  console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, num);

console.log(sumFun);
