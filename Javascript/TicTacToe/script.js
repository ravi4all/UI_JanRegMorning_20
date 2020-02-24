window.addEventListener("load",init)
var choiceBox;
var user_char;
var cpu_char;
var btns;
var count = 0;
function init() {
    choiceBox = document.querySelector("#box");
    choiceBox.addEventListener("blur",pickChar);
    btns = document.querySelectorAll(".btn");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click",setPosition);
    }
}

function pickChar() {
    user_char = choiceBox.value;
    if(user_char == "x") {
        cpu_char = "0";
    }
    else {
        cpu_char = "x";
    }
    // console.log("User",user_char);
    // console.log("CPU",cpu_char);
}

function setPosition() {
    event.srcElement.innerText = user_char;
    event.srcElement.disabled = 'on';
    count += 1;
    setTimeout(function() {
        cpuPosition();
    },1000);
}

function cpuPosition() {
    if(count <= 8) {
        cpu_pos = parseInt(Math.random() * 9);
        if(btns[cpu_pos].innerText == "x" || btns[cpu_pos].innerText == "0") {
            console.log("Already occupied",cpu_pos);
            cpuPosition();
        }
        else {
            console.log("CPU Picked",cpu_pos);
            btns[cpu_pos].innerText = cpu_char;
            btns[cpu_pos].disabled = 'on';
            count += 1;
            return
        }
    }
}