
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function returnMain(){
  window.location.href = "index.html";
}

function goToTest(){
  window.location.href = "test.html";
}

document.getElementById("aforma").onsubmit=function() {
     fnatic1 = parseInt(document.querySelector('input[name = "vb"]:checked').value);
	   dk1 = parseInt(document.querySelector('input[name = "kupa"]:checked').value);
	   sktt1 = parseInt(document.querySelector('input[name = "kupa2"]:checked').value);
	   alex1 = parseInt(document.querySelector('input[name = "bd"]:checked').value);
     usa2 = parseInt(document.querySelector('input[name = "vb2"]:checked').value);
	   brand1 = parseInt(document.querySelector('input[name = "elso"]:checked').value);
	   kayle1 = parseInt(document.querySelector('input[name = "rew"]:checked').value);
	   season41 = parseInt(document.querySelector('input[name = "rh"]:checked').value);
     g2014 = parseInt(document.querySelector('input[name = "cigi"]:checked').value);
	   season62 = parseInt(document.querySelector('input[name = "ui"]:checked').value);
	   masteryi1 = parseInt(document.querySelector('input[name = "tamas"]:checked').value);
	   norbi1 = parseInt(document.querySelector('input[name = "norbi"]:checked').value);
     kristof2 = parseInt(document.querySelector('input[name = "kristof"]:checked').value);
	   fiddle1 = parseInt(document.querySelector('input[name = "anna"]:checked').value);
	   illaoi1 = parseInt(document.querySelector('input[name = "frunci"]:checked').value);


	   result = fnatic1 + dk1 + sktt1 + alex1 + usa2 + brand1 + katyle1 + season41 + g2014 + season62 + masteryi1 + norbi1 + kristof2 + fiddle1 + illaoi1;

	document.getElementById("grade").innerHTML = result;

return false; // required to not refresh the page; just leave this here
}
