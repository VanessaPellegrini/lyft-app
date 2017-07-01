/*alert("hola");*/
/*sign up telefono 1 validacion*/
$("#submitButton").click(function(e){
	var errorMessage = "";
	var fieldsMissing = "";

	if ($("#telefono").val().length != 9) {

		errorMessage += "<p> Your phone Number is not valid</p>";
	}

	if ($("#telefono").val() == "") {

		fieldsMissing += "<br>Telefono";
	}
	
	if (fieldsMissing != "") {
		errorMessage += "<p>The following field(s) are missing" + fieldsMissing;
	}	

	if ($.isNumeric($("#telefono").val()) == false) {
		errorMessage += "<p> Your phone Number is not valid</p>";
	}

	if (errorMessage != "") {
		$("#errorMessage").html(errorMessage);
	} else {
		alert("Your code to enter is:" + " LAB-" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10));
		console.log(errorMessage);
		$("#errorMessage").hide();
		e.preventDefault();
		window.location = "ingresar_codigo_2.html"
	}
});
/*evento para pasar a la segunda parte de sign up
*Al dar click a aceptar del alert redireccionar a window.location.replace("ingresar_codigo_2.html");
*/