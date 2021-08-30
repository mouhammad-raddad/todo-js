let pending = [];
let done = [];
let y;

function add(){
    let x = "<p><button id='ibu' class='btn btn-outline-primary btn-sm' onclick='remove()'>✓</button>" + document.getElementById("myText").value + "</p>";
    y=x;
    pending.push(x);
    document.getElementById("myText").value="";
    document.getElementById('inside').innerHTML = pending;
}

function showpending(){
    document.getElementById('inside').innerHTML = pending;
}

function showdone(){
    document.getElementById('inside').innerHTML = done;
}
function remove(){
    done.push(y);
    pending = pending.filter(item => item !== y)
    document.getElementById('inside').innerHTML = pending;
}
