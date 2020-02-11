// window.addEventListener("load",function () { 
//     document.getElementById("btn").addEventListener("click",showName);
// });

window.addEventListener("load", bindEvents);

function bindEvents() { 
    document.getElementById("btn").addEventListener("click",showName);
 }

function showName() {
    console.log("Show Name Called...");
    var username = document.getElementById("box_1");
    document.getElementById("output").innerHTML = username.value;
}