// Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let xNumber = 0;
  let oNumber = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      xNumber++;
    } else if (str[i].toLowerCase() === "o") {
      oNumber++;
    }
  }
  return xNumber === oNumber;
}

console.log(XO("ooxx"));

// Solutions collected
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

const XO = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
};

function XO(str) {
  var a = str.replace(/x/gi, ""),
    b = str.replace(/o/gi, "");
  return a.length === b.length;
}

function XO(str) {
  return str.replace(/o/gi, "").length == str.replace(/x/gi, "").length;
}

function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}
