const correct = (string) =>
  string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");

console.log(correct("l0nd0n"));
