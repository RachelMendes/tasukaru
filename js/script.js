//Função que aumenta o tamanho da fonte
function changeSizePlus(){
	//variável x recebe todos os elementos do tipo parágrafo (tag 'p') 	
	var x = document.getElementsByTagName('p');
	var y = document.getElementsByTagName('h3');
	var i; //declaração da variável auxiliar i
	/* 'for' percorre o documento encontrando todos os elementos do tipo parágrafo (tag 'p') 
	e alterando seu parâmetro 'fontSize' */	
	for (i = 0; i < x.length; i++) {
		x[i].style.fontSize = "20px";
	}	
	for (i = 0; i < y.length; i++) {
		y[i].style.fontSize = "1.75rem";
	}	
}
	
//Função que diminui o tamanho da fonte	
function changeSizeMinus(){
	//variável x recebe todos os elementos do tipo parágrafo (tag 'p') 	
	var x = document.getElementsByTagName('p');
	var i; //declaração da variável auxiliar i
	/* 'for' percorre o documento encontrando todos os elementos do tipo parágrafo (tag 'p') 
	e alterando seu parâmetro 'fontSize' */	
	for (i = 0; i < x.length; i++) {
		x[i].style.fontSize = "12px";
	}	
}

//Função que restaura o tamanho da fonte	
function changeSizeDefault(){
	//variável x recebe todos os elementos do tipo parágrafo (tag 'p') 
	var x = document.getElementsByTagName('p');
	var i; //declaração da variável auxiliar i
	/* 'for' percorre o documento encontrando todos os elementos do tipo parágrafo (tag 'p') 
	e alterando seu parâmetro 'fontSize' */
	for (i = 0; i < x.length; i++) { 
		x[i].style.fontSize = "16px";
	}	
}

//Tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

// Select all tabs
$('.nav-tabs a').click(function(){
  $(this).tab('show');
})

// Select tab by name
$('.nav-tabs a[href="#home"]').tab('show')

// Select first tab
$('.nav-tabs a:first').tab('show')

// Select last tab
$('.nav-tabs a:last').tab('show')

// Select fourth tab (zero-based)
$('.nav-tabs li:eq(3) a').tab('show')


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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}