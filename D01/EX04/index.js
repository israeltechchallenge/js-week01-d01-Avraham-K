function modulo(Num1, Num2) {
  if (Num1 > Num2) {
    console.log(`The number ${Num1} is bigger than ${Num2}`);
  } else if (Num1 < Num2) {
    console.log(`The number ${Num1} is less than ${Num2}`);
  } else {
    console.log(`The number ${Num1} is equal to ${Num2}`);
  }
  if (Num1 > Num2 && Num1 % Num2 != 0) {
    console.log(`The modulo of ${Num1} % ${Num2} is ${Num1 % Num2}`);
  }
}
// Do not remove or change this line, or the tests won't work
export { modulo };
