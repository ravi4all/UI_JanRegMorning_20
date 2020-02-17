window.addEventListener("load", initEvents);

var username;
var email;
var pwd;
var c_pwd;

function initEvents() {
    username = document.querySelector("#box_1");
    email = document.querySelector("#box_2");
    pwd = document.querySelector("#box_3");
    span = document.querySelectorAll(".err");
    progress = document.querySelector(".progress");
    document.querySelector("#box_5").addEventListener("change",uploadPic);

    username.addEventListener("blur", checkBlank);
    email.addEventListener("keyup",validateEmail);
    pwd.addEventListener("keyup",checkPassword);
}

function checkBlank() {
    var str = username.value;
    if(!isEmpty(str)) {
        span[0].innerHTML = "Valid";
    }
    else {
        span[0].innerHTML = "Please fill this field";
    }
}

function isEmpty(str) {
    return (str == undefined || str == NaN || str == "" || str == null) ? true : false;
}

function checkPassword() {
    var str = pwd.value;
    if (str.length >= 0 && str.length < 5) {
        span[2].innerHTML = "Weak Password";
        progress.style.width = "50px";
        progress.style.backgroundColor = "red";
    }
    else if(str.length >= 5 && str.length < 8) {
        span[2].innerHTML = "Average Password";
        progress.style.width = "100px";
        progress.style.backgroundColor = "yellow";
    }
    else if (str.length >= 8) {
        span[2].innerHTML = "Strong Password";
        progress.style.width = "150px";
        progress.style.backgroundColor = "green";
    }
}

function validateEmail() {
    // Regular Expression
    var str = email.value;
    var pattern = /([a-z|0-9]\w+[@]\w+[.]\w{2,4})/;
    if(pattern.test(str)) {
        span[1].innerHTML = "Valid";
    }
    else {
        span[1].innerHTML = "InValid";
    }
}

function uploadPic() {
    var file = event.target.files;
    var imgName = file[0].name;
    var img = document.createElement("img");
    img.setAttribute('src','http://127.0.0.1:5500/'+imgName);
    document.querySelector("#p_pic").appendChild(img);
}