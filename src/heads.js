// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// "The Math.random() function returns a floating-point, pseudo-random number in
// the range 0 to less than 1 (inclusive of 0, but not 1)"
const heads = (bias = 1 / 2) => Math.random() < bias;

export default heads;
