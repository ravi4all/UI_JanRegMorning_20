window.addEventListener("load",init);

var cricketer;
function init() {
    document.querySelector("#btn").addEventListener("click",loadId);
    cricketer = document.querySelector("#box");
}

function loadId() {
    var str = cricketer.value;
    var url = "https://cricapi.com/api/playerFinder?apikey=b7CYzlyYOrUCIIdbSlU753oGKN12&name="+str;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
            data = this.responseText;
            data = JSON.parse(data);
            // console.log(data.data[0]['pid']);
            pid = data.data[0]['pid']
            loadName(pid);
        }
    }
    xhttp.open('get',url);
    xhttp.send();
}

function loadName(pid) {
    var url = 'https://cricapi.com/api/playerStats?apikey=b7CYzlyYOrUCIIdbSlU753oGKN12&pid='+pid;
    var div = document.querySelector("#data");
    div.innerHTML = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
            data = this.responseText;
            data = JSON.parse(data);
            var profile = data.profile;
            var p = document.createElement("p");
            p.innerText = profile;
            var img = document.createElement("img");
            img.setAttribute('src',data.imageURL);
            div.appendChild(img);
            div.appendChild(p);
        }
    }
    xhttp.open('get',url);
    xhttp.send()
}