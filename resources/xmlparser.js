//alert("I am an alert box!");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	console.log(this.readyState)
    	console.log(this.status)
        myFunction(this);
        alert("I am an alert box!");
    }
};
xhttp.open("GET", "../resources/bookmarklist.xml.", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    document.getElementById("demo").innerHTML =
    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
}