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
	
		if (fieldsMissing != "") {
			e.preventDefault();
			errorMessage += "<p>The following field(s) are missing" + fieldsMissing;
		}	

		if ($("#telefono").val() == "") {
			e.preventDefault();
			fieldsMissing += "<br>Phone";
		}
		
		if (fieldsMissing != "") {
			e.preventDefault();
			errorMessage += "<p>The following field(s) are missing" + fieldsMissing;
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
	
	/********************************* AGREGADO POR VANESSA PEREZ *************************************/
	/*funcion que cambia los placeholder a medida que se elige una opcion*/
		$(function () {
    		$('.selection').change(function () {
        		var o = $(this).val();

        		if (o == 1) {
            		$('#telefono').attr("placeholder", "(solo 9 digitos)").placeholder();
        		}
        		if (o == 2) {
            		$('#telefono').attr("placeholder", "(solo 9 digitos)").placeholder();
        		}        	
        		if (o == 3) {
            		$('#telefono').attr("placeholder", "(solo 10 digitos)").placeholder();
        		}
        		if (o == 4) {
            		$('#telefono').attr("placeholder", "(solo 9 digitos)").placeholder();
        		} 	
        		if (o == 5) {
            		$('#telefono').attr("placeholder", "(solo 9 digitos)").placeholder();
        		}
    		})
    		$('input[placeholder]').placeholder();
    	});

/*********************************************************************************************************/
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
			e.preventDefault();
			window.location = "sign_up_name_3.html";
		}
	});
	$(".button-1").click(function(){
		if("#validador" == " "){
			alert("Ingrese código");
		}
	});
	/*plugin chosen parte vane perez*/
	$(".selection").chosen({width:"30%"});

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
/***** seccion profile *****/
	$("#submitBtnCod").click(function(e){
		var valor =  $(this).val();
	})
	/*localStorage.setItem("userName");
	localStorage.setItem("name");
	localStorage.setItem("email");

	var userName = localStorage.getItem("userName");
	*/
	/* Mostramos Datos En Div */
	$(".modal-data").fadeOut();
		localStorage.user = $("#user").val();
		localStorage.nombre = $("#name").val();
		localStorage.email = $("#email").val();
		localStorage.telefono = $("#telefono").val();
		localStorage.destino = $("#destino").val();

	$("#user").val();
	$("#name").val();
	$("#user-data").append("<mark class='lead text-center'>"+localStorage.user+"</mark>")
	$("#user-data").append("</br><span class='glyphicon glyphicon-user' aria-hidden='true'> Me llamo "+localStorage.nombre+"</span>"); //storage Name
	$("#user-data").append("</br><span class='glyphicon glyphicon-envelope'> Mi email es "+localStorage.email+"</span>");//storage email
	$("#user-data").append("</br><span class='glyphicon glyphicon-home' aria-hidden='true'> Estoy en </span>");//storage lugar inicio
	$("#user-data").append("</br><span class='glyphicon glyphicon-earphone' aria-hidden='true'> Mi número es "+localStorage.telefono+"</span>"); //storage numero
	$("#user-data").append("</br><span class='glyphicon glyphicon-globe' aria-hidden='true'> Me dirijo a "+localStorage.destino+"</span>");//storage lugar llegada
	

	$("#btn-modal").click(function(){  //.submit()
		$("#user-data").fadeOut();
		$("#modal-data").fadeIn();

		/*$("#modal-data").append("<span class='glyphicon glyphicon-user' aria-hidden='true'>"+ +"</span>");
		$("#modal-data").append("</br><span class='glyphicon glyphicon-user' aria-hidden='true'>"+modalDate+"</span>");
		$("#modal-data").append("</br><span class='glyphicon glyphicon-user' aria-hidden='true'>"+modalCity+"</span>");
		$("#modal-data").append("</br><span class='glyphicon glyphicon-user' aria-hidden='true'>"+modalMusic+"</span>");
		*/
		
		
	});

});



