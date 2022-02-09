var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
// function countSheeps(arrayOfSheep) {
//   let counter = 0;
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i]) counter += 1;
//   }
//   return counter;
// }

// forEach

// function countSheeps(arrayOfSheep) {
//   let counter = 0;
//   arrayOfSheep.forEach((sheep) => {
//     if (sheep) counter++;
//   });
//   return counter;
// }

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0;
  for (const sheep of arrayOfSheep) {
    if (sheep) count++;
  }
  return count;
}

console.log(countSheeps(array1));
