var ab='name';

function add(a,b){
alert(a+b);

}

function callService(){
alert('call the service');

}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("POST", "http://160.110.65.99:8080/WhoIs/rs/webservice/checkDomainAvailability?domainName=abharathik.com", true);
  xhttp.setRequestHeader('Content-Type', 'text/plain');
  xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
  xhttp.send();
}