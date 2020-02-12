window.addEventListener("load",initEvents);
var f_num;
var s_num;
function initEvents() {
    f_num = document.getElementById("box_1");
    s_num = document.getElementById("box_2");
    resultBox = document.getElementById("box_3");
    resultBox.setAttribute("readonly",true);

    var btns = document.getElementsByClassName("btn");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click",calc);
    }

    document.getElementById("btn-1").addEventListener("click",clearAll);
}

function calc() {
    var opr = event.target.innerHTML;
    var expression = f_num.value + opr + s_num.value;
    var result = eval(expression);
    resultBox.value = result;
}

function clearAll() {
    f_num.value = "";
    s_num.value = "";
    resultBox.value = "";
}