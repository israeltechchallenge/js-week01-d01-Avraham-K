function getRandomInt() {
  min = 1;
  max = 100;
  check = Math.floor(Math.random() * (max - min +1) + min);

  return check;
}

function moduloEx7(Num1, Num2) {
  let answer = "";
  if (Num1 > Num2) {
    answer = `The number ${Num1} is bigger than ${Num2}`;
  } else if (Num1 < Num2) {
    answer = `The number ${Num1} is less than ${Num2}`;
  } else {
    answer = `The number ${Num1} is equal to ${Num2}`;
  }
  if (Num1 > Num2 && Num1 % Num2 != 0) {
    answer += `. But the modulo of ${Num1} % ${Num2} is ${Num1 % Num2}`;
  }
    return answer;
  
}

let placeHolder = document.getElementById("output");

placeHolder.innerText = moduloEx7(getRandomInt(), getRandomInt());