const number = [1, 2, 3, 4, 5, 6];

const num = 5;
const sumFun = number.reduce((accumulator, currentValue) => {
  console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, num);

console.log(sumFun);

// shopping cart

const shoppingCart = [
  {
    itemName: "javascript",
    price: 3000,
  },
  {
    itemName: "python",
    price: 2999,
  },
  {
    itemName: "reactjs",
    price: 4999,
  },
];

const priceToPay = shoppingCart.reduce((accu, item) => accu + item.price, 0);
console.log(priceToPay);
