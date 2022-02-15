// Convert a Boolean to a String
// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b) {
  return b.toString();
}

console.log(booleanToString(true));

function booleanToString(b) {
  return b ? "true" : "false";
}

function booleanToString(b) {
  return String(b);
}
