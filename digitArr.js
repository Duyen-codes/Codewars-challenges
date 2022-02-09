// function digitize(n) {
//   let nText = n.toString();
//   console.log(typeof nText);
//   return nText.split("");
// }

// function digitize(n) {
//   let arrOfString = n.toString().split("");
//   console.log(arrOfString);
//   let digitArr = [];
//   for (let i = 0; i < arrOfString.length; i++) {
//     let number = ParseInt(arrOfString[i]);
//   }
//   return number;
// }

// function digitize(n) {
//   const initialArray = n.toString().split("");
//   console.log(initialArray);
//   const reversedArray = [];
//   for (let i = 0; i < initialArray.length - 1; i++) {
//     reversedArray[i] = parseInt(initialArray.shift(), 10);
//   }
//   return reversedArray;
// }

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
console.log(digitize(348597));
