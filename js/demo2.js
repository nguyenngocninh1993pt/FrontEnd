var hx = document.getElementById("box");
hx.innerText = "Xin chào các bạn"; // change text
hx.innerHTML = "<i>Xin chào sinh viên lớp T2507E</i>"; 
hx.style.color = "green";
hx.style.marginBottom = "20px";
hx.classList.remove("xyz");
hx.classList.add("abc");
hx.classList.add("gik");

var dv = document.getElementById("devide");
var f = 14;
// var d = setInterval(function(){
//     dv.style.fontSize = f+"px";
//     f+= 2;
// },100);

var fan = document.getElementById("fan");
var dg = 0;
var fanbox = setInterval(function(){
    fan.style.transform = `rotate(${dg}deg)`;
    dg+=2;
},1);