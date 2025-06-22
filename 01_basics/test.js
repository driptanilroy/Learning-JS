const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(a, b) {
  return a + b;
}

rl.question('Enter the first number: ', (first) => {
  rl.question('Enter the second number: ', (second) => {
    const num1 = Number(first);
    const num2 = Number(second);
    const result = addNumbers(num1, num2);
    console.log("The sum is:", result);
    rl.close();
  });
});