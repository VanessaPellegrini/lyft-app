/*alert("hola");*/
$(document).ready(function(){
	/*sign up telefono validacion*/
	$("#submitButton").click(function(e){
		var errorMessage = "";
		var fieldsMissing = "";

		if ($("#telefono").val().length != 9) {
			e.preventDefault();
			errorMessage += "<p> Your phone Number is not valid</p>";
		}

		if ($("#telefono").val() == "") {
			e.preventDefault();
			fieldsMissing += "<br>Telefono";
		}
	
		if (fieldsMissing != "") {
			e.preventDefault();
			errorMessage += "<p>The following field(s) are missing" + fieldsMissing;
		}	

		if ($.isNumeric($("#telefono").val()) == false) {
			e.preventDefault();
			errorMessage += "<p> Your phone Number is not valid</p>";
		}

		if ($("#telefono").val() == "") {
			e.preventDefault();
			fieldsMissing += "<br>Phone";
		}
		
		if (fieldsMissing != "") {
			e.preventDefault();
			errorMessage += "<p>The following field(s) are missing" + fieldsMissing;
		}	
    
		if ($.isNumeric($("#telefono").val()) == false) {
			e.preventDefault();
			errorMessage += "<p> Your phone Number is not valid</p>";
		}

		if (errorMessage != "") {
			e.preventDefault();
			$("#errorMessage").html(errorMessage);
		} else {
			alert("Your code to enter is:" + " LAB-" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10));
			$("#errorMessage").hide();
			e.preventDefault();
			window.location = "ingresar_codigo_2.html";
		}
	});
	/*verificacion del codigo y creacion del usuario*/
	$("#submitBtnCod").click(function(e){
		var errorMessage = "";
		var fieldsMissing = "";
    
		if ($("#input-cod").val().length != 3) {
			e.preventDefault();
			errorMessage += "<p> Your code is not valid</p>";
		}

		if ($("#input-cod").val() == "") {
			e.preventDefault();
			fieldsMissing += "<br>Code";
		}

		if (fieldsMissing != "") {
			e.preventDefault();
			errorMessage += "<p>The following field(s) are missing" + fieldsMissing;
		}

		if (errorMessage != "") {
			$("#errorMessage").html(errorMessage);
		} else {
			alert("Your code to enter is:" + " LAB-" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10));
			e.preventDefault();
			window.location = "sign_up_name_3.html";
		}
	});
	$(".button-1").click(function(){
		if("#validador" == " "){
			alert("Ingrese código");
		}
	});

	/*validar email y nombre*/
	$("#submitBtnEmail").click(function(e){

  		/*function isChecked{
  			$(document).on("change", ".checkbox", function(){
		  		if (this.checked) {
		  			return true;
		  		}else{
		  			return false;
		  		}
  			});
  		};*/

		function isEmail(email) {
  		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 		 return regex.test(email);
		};

		function isName(value, element){
			var regex = /^[a-zA-Z," "]+$/;
			return regex.test(value);
		};

		var errorMessage = "";
		var fieldsMissing = "";

		
		if ($("#email").val() == "") {

			fieldsMissing += "<br>Email";
		}
		
		if ($("#name").val() == "") {

			fieldsMissing += "<br>Code";
		}

		if (fieldsMissing != "") {
			errorMessage += "<p>The following field(s) are missing" + fieldsMissing;
		}

		if (isEmail($("#email").val()) == false ) {
			e.preventDefault();
			errorMessage += "<p>Your Email address is not valid</p>";
		}

		if (isName($("#name").val()) == false ) {
			e.preventDefault();
			errorMessage += "<p>Your name and lastname are not valid</p>";
		}

		/*if ($("#checkbox").val() = checked){

		}*/

		if (errorMessage != "") {
			$("#errorMessage").html(errorMessage);
		} else {
			$("#errorMessage").hide();
			e.preventDefault();
			window.location = "map_4.html";
		}
	});
	/*plugin chosen parte vane perez*/
	/*$(".my-select").chosen({width:"15%"});*/

	/***** seccion profile *****/
	/*localStorage.setItem("userName");
	localStorage.setItem("name");
	localStorage.setItem("email");

	var userName = localStorage.getItem("userName");
	*/
	/* Mostramos Datos En Div */
	$("#user-data").append("<mark class='lead text-center'>User Name</mark>")
	$("#user-data").append("</br><span class='glyphicon glyphicon-user' aria-hidden='true'>Nombre</span>"); //storage Name
	$("#user-data").append("</br><span class='glyphicon glyphicon-home' aria-hidden='true'>Estoy en </span>");//storage lugar inicio
	$("#user-data").append("</br><span class='glyphicon glyphicon-earphone' aria-hidden='true'>Mi número es </span>"); //storage numero
	$("#user-data").append("</br><span class='glyphicon glyphicon-globe' aria-hidden='true'>Me dirijo a </span>");//storage lugar llegada
	

	$("#btn-modal").click(function(){  //.submit()
		$("#user-data").fadeOut();
		$(".modal-data").fadeIn();
	});

});




/*evento para pasar a la segunda parte de sign up
*Al dar click a aceptar del alert redireccionar a window.location.replace("ingresar_codigo_2.html");

/* 

function guardarDatos(){
	localStorage.nombre= document.getElementById("nombre").value;
	localStorage.fecha= document.getElementById("fecha").value;
	localStorage.city= document.getElementById("city").value;
	localStorage.music= document.getElementById("music").value;
}

function recuperarDatos(){
		document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> Date: " + localStorage.fecha + "<br/> From: " + localStorage.city + "<br/> Music favorite: " + localStorage.music;
}


*/


