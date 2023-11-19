//Função que aumenta o tamanho da fonte
function changeSizePlus(){
	//variável x recebe todos os elementos do tipo parágrafo (tag 'p') 	
	var x = document.getElementsByTagName('p');
	var y = document.getElementById("modo-uso");
	var i; //declaração da variável auxiliar i
	/* 'for' percorre o documento encontrando todos os elementos do tipo parágrafo (tag 'p') 
	e alterando seu parâmetro 'fontSize' */	
	for (i = 0; i < x.length; i++) {
		x[i].style.fontSize = "20px";
	}	
	y.style.fontSize = "20px";	
}
	
//Função que diminui o tamanho da fonte	
function changeSizeMinus(){
	//variável x recebe todos os elementos do tipo parágrafo (tag 'p') 	
	var x = document.getElementsByTagName('p');
	var y = document.getElementById("modo-uso");	
	var i; //declaração da variável auxiliar i
	/* 'for' percorre o documento encontrando todos os elementos do tipo parágrafo (tag 'p') 
	e alterando seu parâmetro 'fontSize' */	
	for (i = 0; i < x.length; i++) {
		x[i].style.fontSize = "12px";
	}	
	y.style.fontSize = "12px";	
}

//Função que restaura o tamanho da fonte	
function changeSizeDefault(){
	//variável x recebe todos os elementos do tipo parágrafo (tag 'p') 
	var x = document.getElementsByTagName('p');
	var y = document.getElementById("modo-uso");	
	var i; //declaração da variável auxiliar i
	/* 'for' percorre o documento encontrando todos os elementos do tipo parágrafo (tag 'p') 
	e alterando seu parâmetro 'fontSize' */
	for (i = 0; i < x.length; i++) { 
		x[i].style.fontSize = "16px";
	}
	y.style.fontSize = "16px";		
}

$(document).ready(function(){	
	//Get the button:
	var mybutton = document.getElementById("btnTop");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	  } else {
		mybutton.style.display = "none";
	  }
	}
	
	
});


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Active button
function activeBttDraw(){	
	var x = document.getElementById("btn-draw");
	if (x.getAttribute("app_active") == null){
		x.style.backgroundColor = "#da364f";
		x.setAttribute("app_active", "")
	} else {
		x.style.backgroundColor = "#242d34";
		x.removeAttribute("app_active")
	}
}

function activeBttVoice(){	
	var x = document.getElementById("btn-voice");
	if (x.getAttribute("app_active") == null){
		x.style.backgroundColor = "#da364f";
		x.setAttribute("app_active", "")
	} else {
		x.style.backgroundColor = "#242d34";
		x.removeAttribute("app_active")
	}
}