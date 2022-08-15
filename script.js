"use strict"

// 2-dars switch()

// 1-masala
// let a=+prompt("Enter the day");
// switch(a){
//     case 1: console.log("Monday");break;
//     case 2: console.log("Tuesday");break;
//     case 3: console.log("Wednesday");break;
//     case 4: console.log("Thursday");break;
//     case 5: console.log("Friday");break;
//     case 6: console.log("Saturday");break;
//     case 7: console.log("Sunday");break;
//     default: console.log("Error");
// }

// 2-masala
// let ball=+prompt("Ballni kiriting");
// switch(ball){
//     case 5: console.log("Alo");break;
//     case 4: console.log("Yaxshi");break;
//     case 3: console.log("Qoniqarli");break;
//     case 2: console.log("Qoniqarsiz");break;
//     default: console.log("Yomon");break;
// }

// 3-masala
// let month=+prompt("Oyni kiriting");
// switch(month){
//     case 1: console.log("Winter"); break;
//     case 2: console.log("Winter"); break;
//     case 3: console.log("Spring"); break;
//     case 4: console.log("Spring"); break;
//     case 5: console.log("Spring"); break;
//     case 6: console.log("Summer"); break;
//     case 7: console.log("Summer"); break;
//     case 8: console.log("Summer"); break;
//     case 9: console.log("Autumn"); break;
//     case 10: console.log("Autumn"); break;
//     case 11: console.log("Autumn"); break;
//     case 12: console.log("Winter"); break;
//     default: console.log("Qayta urining")
// }

// 4-masala
// let month=+prompt("Oyni kiriting");
// switch(month){
//     case 1: console.log("31 kun bor"); break;
//     case 2: console.log("28 kun bor"); break;
//     case 3: console.log("31 kun bor"); break;
//     case 4: console.log("30 kun bor"); break;
//     case 5: console.log("31 kun bor"); break;
//     case 6: console.log("30 kun bor"); break;
//     case 7: console.log("31 kun bor"); break;
//     case 8: console.log("31 kun bor"); break;
//     case 9: console.log("30 kun bor"); break;
//     case 10: console.log("31 kun bor"); break;
//     case 11: console.log("30 kun bor"); break;
//     case 12: console.log("31 kun bor"); break;
//     default: console.log("Qayta urining")
// }

// 5-masala
// let a=+prompt("A soni");
// let b=+prompt("B soni");
// let c=prompt("c amali");
// switch(c){
//     case "-": console.log(a-b);break;
//     case "+": console.log(a-b);break;
//     case "*": console.log(a-b);break;
//     case "/": console.log(a/b);break;
//     default: console.log("Qayta kiriting ")
// }

// 6-masala
// let price=+prompt("Bahoingizni kiriting");
// switch(price){
//     case 5: console.log(513);break;
//     case 4: console.log(428);break;
//     case 3: console.log(402);break;
//     default: console.log("Kechirasz siz yiqildingiz");break;
// }


// 2-dars for()

// 1-masala
// let k=12;
// let n=10;
// for(let i=1;i<=n;i++){
//     console.log(k);
// }


// 2-masala
// let a = 12;
// let b = 3;
// for (let i = b; i <= a; i++) {
//     console.log(i);
// }


// 3-masala
// let a = 25;
// let b = 5;
// for (let i = a - 1; i > b; i--) {
//     console.log(i);
// }


// 4-masala
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} kg konfet ${i*10000}so'm`);
// }


// 5-masala
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i/10} kg konfet ${i*10000/10}so'm`);
// }


// 6-masala
// for (let i = 1; i <= 10; i++) {
//     console.log(`${1+i/10} kg konfet ${10000+i*10000/10}so'm`);
// }

// 7-masala
// let a = 10;
// let b = 100;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//     sum += i;
// }
// console.log(`${a}dan ${b}gacha sonlar yig'indisi ${sum}`)


// 8-masala
// let a = 10;
// let b = 100;
// let p = 1;
// for (let i = a; i <= b; i++) {
//     p *= i;
// }
// console.log(`${a}dan ${b}gacha sonlar ko'paytmasi ${p}`)


// 9-masala
// let a = 1;
// let b = 10;
// let sum = 0;;
// for (let i = a; i <= b; i++) {
//     sum += i ** 2;
// }
// console.log(`${a}dan ${b}gacha sonlarni kvadratlarini yig'indisi ${sum}`)


// 10-masala
// let n = 10;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
// }
// console.log(`S=${sum}`);


// 11-masala
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }


// 12-masala
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// 13-masala
// let n = 20;
// let num = 0;
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) num++;
//     }
//     if (num > 2) {
//         console.log(i)
//     }
//     num = 0;
// }


// 15-masala
// let n = 10;
// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }


// 16-masala
// let n = 100;
// for (let i = 0; i <= n; i++) {
//     if (i % 5 != 0) {
//         console.log(i);
//     }
// }


// 17-masala
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     console.log(i ** 2);
// }


// 18-masala
// let n = 10;
// let sum = 0;
// let p = 1;
// for (let i = 1; i <= n; i++) {
//     p *= i;
//     sum += p;
// }
// console.log(`Summ= ${sum}`);


// 19-masala
// let n = 10;
// let x = 1.1;
// let sum = 1;
// let p = 1;
// for (let i = 1; i <= n; i++) {
//     p *= i;
//     sum += x * i / p;
// }
// console.log(`Summ= ${sum}`);


// 20-masala
// let n = 10;
// let x = 3;
// for (let i = 0; i <= n; i++) {
//     if (i % x == 0) {
//         console.log(i);
//     }
// }


// 21-masala

// // (1+2+3+...+n)(1,2,3,...,x)
// let n = 10;
// let x = 10;
// let p = 0;
// let s = "(";
// for (let i = 1; i <= n; i++) {
//     p += i;
// }
// for (let j = 1; j <= x; j++) {
//     if (j == 1) s += `${j}`;
//     else s += `,${j}`;
// }
// console.log(p + s + ")");

// // 1*1+2*1+3*1+...+n*1,
// // 1*2+2*2+3*2+...+n*2,
// // 1*3+2*3+3*3+...+n*3,
// // 1*4+2*4+3*4+...+n*4,
// // 1*5+2*5+3*5+...+n*5,
// // .
// // .
// // .
// // 1*x+2*x+3*x+...+n*x
// let n = 10;
// let x = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// for (let j = 1; j <= x; j++) {
//     console.log(sum * j)
// }


// 24-masala
// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }