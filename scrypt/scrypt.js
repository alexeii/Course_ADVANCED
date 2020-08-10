"use strict";
let lang = prompt('Введите язык: "ru" или "en"', "ru");

if (lang === "ru") {
  console.log("ПН, ВТ, СР, ЧТ, ПТ, СБ, ВС");
} else if (lang === "en") {
  console.log("MO, TU, WE, TH, FR, SA, SU");
}
switch (lang) {
  case "ru":
    console.log("ПН, ВТ, СР, ЧТ, ПТ, СБ, ВС");
    break;
  case "en":
    console.log("ПН, ВТ, СР, ЧТ, ПТ, СБ, ВС");
    break;
}

let days = {
  ru: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
  en: ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
};
console.log(days[lang]);

let namePerson = prompt("Введите имя", "Артем");

namePerson === "Артем"
  ? console.log("директор")
  : namePerson === "Максим"
  ? console.log("преподаватель")
  : console.log("студент");
