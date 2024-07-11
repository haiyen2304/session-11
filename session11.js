//bài 1
// for(j=1;j<=10;j++){
//    console.log(`-------------`);
//    for (i=1;i<=10;i++){
//     console.log(`${j}*${i}=${i*j}`);
// }
// }

//bài 2
// let n=+prompt("hãy nhập số tự nhiên N từ (2-100)");

// if(Number.isInteger(n) && n>=2 && n<=100){
//     // tiến hành logic
//     for(let i=2;i<=n;i++){
//         if(i%2===0){
//             console.log(` Bình phương của ${i}=${i**2}`);
//         }
//     }
// }else {console.log("hãy nhập lại")}

// bài 3:log màu viết chương trình 10 chữ
// for(i=1;i<=5;i++){

// let a=Math.floor(Math.random()*256);
// let b=Math.floor(Math.random()*256);
// let c=Math.floor(Math.random()*256);

// console.log("%c xin chào,",`background-color: orange; color: rgb(${a},${b},${c})`);
// }

//BÀI 5: Viết chương trình kiểm tra số N có phải là số nguyên tố không? N nhập từ browser
// console.log("%c xin chào,", "background-color:orange; color : black");

// let check = true;
// let a = +prompt("hãy nhập số bạn muốn để kiểm tra xem có phải số nguyên tố");
// if (a <= 1) {
//  console.log("không phải số nguyên t");
//  } else{
//   for (i = 2; i <= Math.sqrt(a); i++) {
//     if (a % i === 0) {
//       check = false;
//       break;
//     }
//   }
//   //out chốt
//   if (check === true) {
//     console.log("là số nguyên tố");
//   } else {
//     console.log("không phải số nguyên tố");
//   }
// }

// let a= +prompt("hãy nhập số bạn muốn để kiểm tra xem có phải số nguyên tố");
// for(i=2;i<= Math.sqrt(a); i++){
//     if(a%i===0){
//         alert("không phải số nguyên tố")
//         break;
//     }  else{alert("là số nguyên tố")

//     }
// }  SAI

// bài 6 Viết chương trình kiểm tra số N có phải là số hoàn hảo hay không? N nhập từ browser
// let n=+prompt("hãy nhập số n để kiểm tra xem có phải số hoàn hảo hay không");
// let sum=0;
// //if nếu nó là k thì in ra không phải số hoàn hảo
// for(i=1;i<n;i++){
//     if(n%i===0){
//         sum=sum+i;
//     }
// }console.log("tổng số chia hết  ="+ sum);
// if (n==sum){console.log("n là số hoàn hảo")
//   }else{console.log(`${n}n không là số hoàn hảo`);
// }

//BÀI 7: In ra giai thừa của số nguyên dương N? N nhập từ browser
let n = Number.isInteger(prompt("hãy nhập số n "));
let tich = 0;

if (n > 0) {
  for (i = 1; i <= n; i++) {
    tich = tich * i;
  }
} else {
  console.log("vui lòng nhập lại");
}
