function moduloEx5(Num1, Num2) {
  let answer = ""
  if (Num1 > Num2) {
    answer = (`The number ${Num1} is bigger than ${Num2}`);
  } else if (Num1 < Num2) {
    answer = (`The number ${Num1} is less than ${Num2}`);
  } else {
    answer = (`The number ${Num1} is equal to ${Num2}`);
  }
  if (Num1 > Num2 && Num1 % Num2 != 0) {
    answer += (`. But the modulo of ${Num1} % ${Num2} is ${Num1 % Num2}`);
  }
  console.log(answer);
}


// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
