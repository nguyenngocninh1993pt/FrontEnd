var x;
x = 10; // x : number
console.log(x);
x = "xin chao"; // string
console.log(x);
x = true; // boolean
console.log(x);

var n = 20;
var s = "hello";
var t = n + n; // 40
var k = n + s; // "20hello"
var m = s + n; // hello20

if(t > 30){

}else{

}
var xyz = t>30?"A":"B"; // toán tử 3 ngôi
// if(t>30){
//     xyz = "A";
// }else{
//     xyz = "B";
// }

for(var i=0;i<10;i++){
    // var ab = "i=";
    // var bc = ab+i;
    // console.log(bc);
    console.log("i="+i);
}

var arr = [];
var abc = [1,2,"xin chao"];

arr[0] = 10;
arr[1] = 15;
arr.push(18);// arr[2] = 18;
arr.push(18);// arr[2] = 18;
arr.push(18);// arr[2] = 18;
arr.push(18);// arr[2] = 18;
arr.push(18);// arr[2] = 18;
arr.push(18);// arr[2] = 18;

for(var i=0;i< arr.length;i++){
    console.log(arr[i]);
}

function tinhtong(a,b){
    // return a+b;
    console.log(a+b);
}
tinhtong(5,7);
tinhtong("a",8);
tinhtong("a","b");
tinhtong([1,3,4],9);

// alert("Cấm người dưới 18 tuổi!"); 
// var check = confirm("Bạn đã đủ 18 tuổi hay chưa?"); // return true/false
// if(check == true){
//     alert("Bạn đã chọn Yes");
// }else{
//     alert("Bạn đã chọn No");
// }

// var age = prompt("Bạn bao nhiêu tuổi?");// string "20"
// age = age + 10; // "2010"
// alert(age);
// age = parseInt(age); 
// "20" => 20
// "20ab48"=> 20
// "a20" => NaN : not a number
var lk = Math.random(); // taoj 1 số thực ngẫu nhiên từ 0->1
lk  = lk * 100;
lk = parseInt(lk);

// var num = prompt("Bạn chọn số nào?");
// num = parseInt(num);
// if(num == lk){
//     alert("Chúc mừng, bạn đã trúng thưởng 1 tỷ!");
// }else{
//     alert("Chúc bạn may mắn vào ngày mai!");
// }

// setTimeout(function(){
//     alert("ABCXYZ");
//     alert("123");
// }, 3000);// 3000 ms
var c = 10;
var bom = setInterval(function(){
    alert(c);
    c--;
    if(c<=0){
        clearInterval(bom);
    }
},1000);// 3000 ms