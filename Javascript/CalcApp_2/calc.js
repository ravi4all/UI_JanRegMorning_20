window.addEventListener("load",initEvents);
var resultBox;
var tempValue;
function initEvents() {
    var numbers = document.querySelectorAll(".num");
    var operators = document.querySelectorAll(".opr");
    resultBox = document.querySelector("input[type='text']");
    for(var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click",appendNum);
    }
    for(var i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click",appendOpr);
    }
}

function appendNum() {
    var btn_value = event.target.innerHTML;
    resultBox.value += btn_value;
    tempValue = resultBox.value;
}

function appendOpr() {
    var btn_value = event.target.innerHTML;
    resultBox.value = tempValue + btn_value;
}