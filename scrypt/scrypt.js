"use strict";
//1 задача
let arr = [
  "255687",
  "152845",
  "4584785",
  "1234567",
  "2456984",
  "1597536",
  "4789654",
];
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "2" || arr[i][0] === "4") console.log(arr[i]);
}

//2 задача
for (let i = 2; i < 100; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j) {
      continue;
    }
    count += 1;
  }
  if (count === 2) console.log(i + " :Делители этого числа: 1 и " + i);
}
