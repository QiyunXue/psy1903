alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can.");

let start1 = Date.now();
randnum1 = Math.floor(Math.random() * 10) + 1;
randnum2 = Math.floor(Math.random() * 10) + 1;
let answer1 = prompt("What is " + randnum1 + "+" + randnum2 + "?");
let end1 = Date.now();
let responseTime1 = (end1 - start1) / 1000;
alert("You answered " + answer1 + " in " + responseTime1 + " seconds");

let start2 = Date.now();
randnum3 = Math.floor(Math.random() * 10) + 1;
randnum4 = Math.floor(Math.random() * 10) + 1;
let answer2 = prompt("What is " + randnum3 + "+" + randnum4 + "?");
let end2 = Date.now();
let responseTime2 = (end2 - start2) / 1000;
alert("You answered " + answer2 + " in " + responseTime2 + " seconds");

let start3 = Date.now();
randnum5 = Math.floor(Math.random() * 10) + 1;
randnum6 = Math.floor(Math.random() * 10) + 1;
let answer3 = prompt("What is " + randnum5 + "+" + randnum6 + "?");
let end3 = Date.now();
let responseTime3 = (end3 - start3) / 1000;
alert("You answered " + answer3 + " in " + responseTime3 + " seconds");