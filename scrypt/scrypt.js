"use strict";
let str = prompt("Введите строку", "Сегодня хорошая погода, но скоро осень");

function strTrim(s) {
  if (typeof s === "string" && isNaN(s)) {
    if (s.length > 30) {
      console.log(s.trim().substr(0, 30) + "...");
    } else {
      console.log(s.trim());
    }
  } else {
    alert("Вы ввели не строку");
  }
}
strTrim(str);
