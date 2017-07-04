$(document).ready(function(){
	/*validar email y nombre*/
	$("#submitBtnEmail").click(function(e){

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

		if (errorMessage != "") {
			$("#errorMessage").html(errorMessage);
		} else {
			$("#errorMessage").hide();
			e.preventDefault();
			window.location = "map_4.html";
		}
	});
	
	var rules={'q2[]':{required:true,'minlength':1}}
	$("#form1").validate({'rules':rules});
		
	function hidesubmit(){
	  $("#submitButton").closest("div").hide();
	  $("#q2_0").hide();
	}
	function showsubmit(){
	  $("#submitButton").closest("div").show();
	}
setTimeout(hidesubmit, 0);
setTimeout(showsubmit, 2700);

});
