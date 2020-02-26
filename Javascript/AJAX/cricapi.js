window.addEventListener("load",init);

function init() {
    document.querySelector("#btn").addEventListener("click",loadAjax);
}

function loadAjax() {
    var div = document.querySelector("#data");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
            data = this.responseText;
            // console.log(data);
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
    xhttp.open('get','https://cricapi.com/api/playerStats?apikey=b7CYzlyYOrUCIIdbSlU753oGKN12&pid=35320');
    xhttp.send()
}