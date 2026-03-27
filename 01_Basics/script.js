let btn1=document.getElementById("btn1");
let a=0;
// btn1.onclick=()=>{
  
//     ++a;
//     alert('the button was clicked '+a+' times');
// }

// let how=document.querySelector('div');
// how.onmouseover=()=>{
//     alert('Your are inside the div');
// };

btn1.addEventListener("click",()=>{
    ++a;
    alert('this button was clicked '+a+' times');
});