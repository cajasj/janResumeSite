var audio = document.getElementById("stop");
function hid() {
    document.getElementById("type").style.display = "none";
   	
}
setTimeout(hid, 3000);

function cease()
{
	document.getElementById("stop").pause() = true;
}
setTimeout(cease, 2160);

function show() {
    document.getElementById("move").style.display = "block";
    /*document.getElementById("navbar").style.display = "block";*/
}
setTimeout(show, 5000);
