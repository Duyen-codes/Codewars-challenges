// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// function findNeedle(haystack) {
//   let index = haystack.findIndex((hay) => hay === "needle");
//   return `found the needle at position ${index}`;
// }

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
