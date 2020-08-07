let num = 266219;
num = num.toString().split("");

let result = 1;
for (let i = 0; i < num.length; i++) {
  result *= +num[i];
}
console.log("умножение цифр = " + result);
result **= 3;

console.log(
  "Первые две цифры при возведении в 3ю степень =  " +
    +result.toString().substring(0, 2)
);
