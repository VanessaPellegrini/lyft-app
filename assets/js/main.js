/*sign up telefono 1 validacion*/
$("#submitButton").click(function(){
	var errorMessage = "";

	var fieldsMissing = "";

	if ($("#phone").val() == "") {

		fieldsMissing += "<br>Telephone";
	}

	if (fieldsMissing != "") {
		errorMessage += "<p>The following field(s) are missing" + fieldsMissing;
	}	

	if ($.isNumeric($("#phone").val()) == false) {
		errorMessage += "<p> Your phone Number is not valid</p>";
	}

	if (errorMessage != "") {
		$("#errorMessage").html(errorMessage);
	} else {
		$("#successMessage").show();
		$("#errorMessage").hide();
	}

});