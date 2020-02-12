window.addEventListener("load",initEvents);
var f_num;
var s_num;
function initEvents() {
    f_num = document.getElementById("box_1");
    s_num = document.getElementById("box_2");
    resultBox = document.getElementById("box_3");
    resultBox.setAttribute("readonly",true);
    
    var addBtn = document.getElementById("add");
    addBtn.addEventListener("click",add);

    var subBtn = document.getElementById("sub");
    subBtn.addEventListener("click",sub);

    document.getElementById("btn-1").addEventListener("click",clearAll);
}

function add() {
    var result = parseInt(f_num.value) + parseInt(s_num.value);
    resultBox.value = result;
}
function sub() {
    var result = parseInt(f_num.value) - parseInt(s_num.value);
    resultBox.value = result;
}

function clearAll() {
    f_num.value = "";
    s_num.value = "";
    resultBox.value = "";
}