"use strict";

let week = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

let month = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

function optionA() {
  let date = new Date();
  //день недели
  let aDay = document.querySelector(".a-day");
  let aDay1 = date.getDay();
  for (let i = 0; i < week.length; i++) {
    if (i === aDay1) aDay.innerHTML = week[i];
  }
  //число
  let aDat = date.getDate();
  document.querySelector(".a-dat").innerHTML = aDat;
  //месяц
  let aMonth = document.querySelector(".a-month");
  let aMonth1 = date.getMonth();
  for (let i = 0; i < month.length; i++) {
    if (i === aMonth1) aMonth.innerHTML = month[i];
  }
  //год
  let aYear = date.getFullYear();
  document.querySelector(".a-year").innerHTML = aYear;
  //час
  let aHours = date.getHours();
  if (aHours === 1 || aHours === 21) {
    document.querySelector(".a-hour").innerHTML = aHours + " час ";
  } else if (
    aHours === 2 ||
    aHours === 3 ||
    aHours === 4 ||
    aHours === 22 ||
    aHours === 23
  ) {
    document.querySelector(".a-hour").innerHTML = aHours + " часа ";
  } else {
    document.querySelector(".a-hour").innerHTML = aHours + " часов ";
  }
  //минуты
  let aMinuts = date.getMinutes();
  if (
    aMinuts === 1 ||
    aMinuts === 21 ||
    aMinuts === 31 ||
    aMinuts === 41 ||
    aMinuts === 51
  ) {
    document.querySelector(".a-minuts").innerHTML = aMinuts + " минута ";
  } else if (
    (2 <= aMinuts && aMinuts <= 4) ||
    (22 <= aMinuts && aMinuts <= 24) ||
    (32 <= aMinuts && aMinuts <= 34) ||
    (42 <= aMinuts && aMinuts <= 44) ||
    (52 <= aMinuts && aMinuts <= 54)
  ) {
    document.querySelector(".a-minuts").innerHTML = aMinuts + " минуты ";
  } else {
    document.querySelector(".a-minuts").innerHTML = aMinuts + " минут ";
  }
  //секунды
  let aSecond = date.getSeconds();
  if (
    aSecond === 1 ||
    aSecond === 21 ||
    aSecond === 31 ||
    aSecond === 41 ||
    aSecond === 51
  ) {
    document.querySelector(".a-seconds").innerHTML = aSecond + " секунда ";
  } else if (
    (2 <= aSecond && aSecond <= 4) ||
    (22 <= aSecond && aSecond <= 24) ||
    (32 <= aSecond && aSecond <= 34) ||
    (42 <= aSecond && aSecond <= 44) ||
    (52 <= aSecond && aSecond <= 54)
  ) {
    document.querySelector(".a-seconds").innerHTML = aSecond + " секунды ";
  } else {
    document.querySelector(".a-seconds").innerHTML = aSecond + " секунд ";
  }
}

function optionB() {
  let date = new Date();
  //день
  let bDat = date.getDate();
  if (bDat < 10) {
    document.querySelector(".b-dat").innerHTML = "0" + bDat;
  } else {
    document.querySelector(".b-dat").innerHTML = bDat;
  }
  //месяц
  let bMonth = date.getMonth();
  if (bMonth < 10) {
    document.querySelector(".b-month").innerHTML = "0" + bMonth;
  } else {
    document.querySelector(".b-month").innerHTML = bMonth;
  }
  //год
  let bYear = date.getFullYear();
  document.querySelector(".b-year").innerHTML = bYear;
  //час
  let bHour = date.getHours();
  if (bHour < 10) {
    document.querySelector(".b-hour").innerHTML = "0" + bHourh;
  } else {
    document.querySelector(".b-hour").innerHTML = bHour;
  }
  //минуты
  let bMinut = date.getMinutes();
  if (bMinut < 10) {
    document.querySelector(".b-minuts").innerHTML = "0" + bMinut;
  } else {
    document.querySelector(".b-minuts").innerHTML = bMinut;
  }
  //секунды
  let bSecond = date.getSeconds();
  if (bSecond < 10) {
    document.querySelector(".b-seconds").innerHTML = "0" + bSecond;
  } else {
    document.querySelector(".b-seconds").innerHTML = bSecond;
  }
}

setInterval(() => optionA(), 1000); //вызов варианта а

setInterval(() => optionB(), 1000); //вызов варианта б
