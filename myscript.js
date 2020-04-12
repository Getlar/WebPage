
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

function kiErtekelo() {
  var fnatic1 = parseInt(document.querySelector('input[name = "vb"]:checked').value);
	var dk1 = parseInt(document.querySelector('input[name = "kupa"]:checked').value);
	var sktt1 = parseInt(document.querySelector('input[name = "kupa2"]:checked').value);
	var alex1 = parseInt(document.querySelector('input[name = "bd"]:checked').value);
  var usa2 = parseInt(document.querySelector('input[name = "vb2"]:checked').value);
	var brand1 = parseInt(document.querySelector('input[name = "elso"]:checked').value);
	var kayle1 = parseInt(document.querySelector('input[name = "rew"]:checked').value);
	var season41 = parseInt(document.querySelector('input[name = "rh"]:checked').value);
  var g2014 = parseInt(document.querySelector('input[name = "cigi"]:checked').value);
	var season62 = parseInt(document.querySelector('input[name = "ui"]:checked').value);
	var masteryi1 = parseInt(document.querySelector('input[name = "tamas"]:checked').value);
	var norbi1 = parseInt(document.querySelector('input[name = "norbi"]:checked').value);
  var kristof2 = parseInt(document.querySelector('input[name = "kristof"]:checked').value);
	var fiddle1 = parseInt(document.querySelector('input[name = "anna"]:checked').value);
	var illaoi1 = parseInt(document.querySelector('input[name = "frunci"]:checked').value);
	var result = fnatic1 + dk1 + sktt1 + alex1 + usa2 + brand1 + kayle1 + season41 + g2014 + season62 + masteryi1 + norbi1 + kristof2 + fiddle1 + illaoi1;
  var result2 = result/25;
  alert("Eredményed: " + result2 + "/11");
	document.getElementById("parag").element.value = result2;
  return false; // required to not refresh the page; just leave this here
}
function reset(){
  window.location.href = "test.html";
}
