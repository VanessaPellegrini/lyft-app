/*sign up telefono 1 validacion*/
$("#submitButton").click(function(){
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
		$("#successMessage").show();
		$("#errorMessage").hide();
	}

});