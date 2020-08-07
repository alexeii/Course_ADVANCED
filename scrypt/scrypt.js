let num = 266219;
num = num.toString().split("");

let result = 1;
for (let i = 0; i < num.length; i++) {
  result *= +num[i];
}
console.log("умножение цифр = " + result);
result **= 3; //Возведение в степень 3

console.log(
  "Первые две цифры при возведении числа '1296' в степень 3 =  " +
    +result.toString().substring(0, 2)
);
