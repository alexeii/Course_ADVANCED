"use strict";
const getDay = document.querySelector(".get-day");
const getAm = document.querySelector('.get-am');
const getNewYear = document.querySelector('.get-new-year');
let week = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

function optionA() {
  let date = new Date();
  //1 пункт
  let aHours = date.getHours();
  if (aHours > 0 && aHours <= 6) {
    getDay.textContent = "Доброй ночи!"
  } else if (aHours > 6 && aHours <= 12) {
    getDay.textContent = "Доброе утро!"
  } else if (aHours > 12 && aHours <= 18) {
    getDay.textContent = "Добрый день!"
  } else if (aHours > 18 && aHours <= 0) {
    getDay.textContent = "Добрый вечер!"
  };
  //2 пункт
  let aDay = document.querySelector(".a-day");
  let aDay1 = date.getDay();
  for (let i = 0; i < week.length; i++) {
    if (i === aDay1) aDay.textContent = week[i];
  }
  //3 пункт
  //час
  let bHour = date.getHours() % 12 || 12;;
  if (bHour < 10) {
    document.querySelector(".b-hour").textContent = "0" + bHour;
  } else {
    document.querySelector(".b-hour").textContent = bHour;
  }
  //минуты
  let bMinut = date.getMinutes();
  if (bMinut < 10) {
    document.querySelector(".b-minuts").textContent = "0" + bMinut;
  } else {
    document.querySelector(".b-minuts").textContent = bMinut;
  }
  //секунды
  let bSecond = date.getSeconds();
  if (bSecond < 10) {
    document.querySelector(".b-seconds").textContent = "0" + bSecond;
  } else {
    document.querySelector(".b-seconds").textContent = bSecond;
  }
  if (0 <= aHours && aHours < 12) {
    getAm.textContent = 'AM';
  } else if (12 <= aHours && aHours < 23) {
    getAm.textContent = 'PM';
  }
  let dateStop = new Date("01 January 2021").getTime();
  let dateNow = new Date().getTime();
  let timeRem = (dateStop - dateNow) / 1000;
  let dayNY = Math.floor(timeRem / 60 / 60 / 24);
  let dayname = "";
  let dayLost = '';
  let dd = dayNY.toString().split('');
  let dz = dd[dd.length - 1];
  if (dz == 1) {
    dayLost = 'остался';
    dayname = " день"
  } else if (dz == 2 || dz == 3 || dz == 4) {
    dayname = " дня";
    dayLost = 'осталось';
  } else {
    dayname = " дней";
    dayLost = 'осталось';
  };

  getNewYear.textContent = dayLost + ' ' + dayNY + ' ' + dayname;
};


setInterval(() => optionA(), 1000);