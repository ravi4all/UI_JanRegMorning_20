window.addEventListener("load",initEvent);

function initEvent() {
    loadStudents();
}

function loadStudents() {
    // var ul = document.querySelector("#studentsList");
    // students.forEach(function (obj) { 
    //     var li = document.createElement("li");
    //     li.innerHTML = obj.name;
    //     ul.appendChild(li);
    //  });

    var table = document.querySelector("#studentsList");
    students.forEach(function (obj) { 
        var tr = table.insertRow();
        tr.insertCell().innerHTML = obj.roll_no;
        tr.insertCell().innerHTML = obj.name;
        tr.insertCell().innerHTML = obj.course;
        tr.insertCell().innerHTML = obj.year;
        tr.insertCell().innerHTML = obj.sem;
        tr.insertCell().innerHTML = obj.phone;
        table.appendChild(tr);
     });
}