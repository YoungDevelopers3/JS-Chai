const prompt = require('prompt-sync')();
// let arr=[];
// let prev=Number(prompt("Enter the first number"));
// arr.push(prev);
// let keepgoing=true;
// while(keepgoing){
//     let current=Number(prompt("Please enter the new number"));
//     if(prev>current){
//         arr.push(current);
//         prev=current;
//     }
//     else{
//         keepgoing=false;
//     }
// }
// console.log(arr);

/***********************************************************************/
// for(let i=0;i<1000;i++){
//     if(i%10===9){
//         console.log(i);
//     }
// }
/*********************************************************** */
// let keepgoing=true;
// let arr=[];
// let i=0;
// let count=1;
// let maxi=0;
// while(keepgoing){
//     let num=Number(prompt("Enter the number"));
//     if(num!=0){
//         arr.push(num);
//         ++i;
//        if(arr.length>1 && arr[i-2]===1 && arr[i-1]===1){
//         count++;
//        }
//        else{
//          maxi=Math.max(maxi,count);
//          count=1;
//        }
//     }
//     else{
//         maxi=Math.max(maxi,count);
//         console.log(maxi);
//         keepgoing=false;
//     }
// }
/*********************************************************************/
// let n=0;
// let p=0;
// let arr=[];
// for(let i=0;i<40;i++){
//    let num=Number(prompt("Enter the number please: "));
//    arr.push(num);
//    if(arr[i]<0 && i<10){
//     n++;
//    }
//    if(arr[i]>0 && i>=30 && i<=39){
//     p++;
//    }
// }
// if(p==n){
//     console.log("yes");

// }
// else{
//     console.log("no");
// }

/************************************************************** */
// let num=Number(prompt("Enter the number"));
// let arr=[];
// let n=num;
// while(n>0){
//     let d=n%10;
//     arr.push(d);
//     n=Math.floor(n/10);
// }
// for(let i=0;i<arr.length;i++){
//     if(num%arr[i]!==0){
//         console.log("no");
//         break;
//     }
// }
// console.log("yes");

/*******************************************************************/
let num_str=prompt("Please enter the number");
let n=num_str.length;
let sum1=0;
let sum2=0;

for(let i=0;i<Math.floor(n/2);i++){
    let num=parseInt(num_str[i]);
    sum1=sum1+num;
}

for(let i=n/2;i<n;i++){
    let num=parseInt(num_str[i]);
    sum2=sum2+num;
}
if(sum1===sum2){
    console.log("Yes");
}
else{
    console.log("No");
}