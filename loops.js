var forLoop = (array) => {
  for (let i = 0; i < 25; i++) {
    let s = (i === 1) ? "I am 1 strange loop" : `I am ${i} strange loops`;
    array.push(s);
  }
  return array;
}

var whileLoop = n => {
  while (n > 0) {
    console.log(n);
    n--
  }
  return "done"
}

var maybeTrue = () => {
  return Math.random() >= 0.5
}

var doWhileLoop = (array) => {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}