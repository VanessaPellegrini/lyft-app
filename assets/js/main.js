/*alert("hola");*/
$(document).ready(function () {
	
	/*pluggin para las banderas
	$( function() {
    	$.widget( "custom.iconselectmenu", $.ui.selectmenu, {
     	_renderItem: function( ul, item ) {
        var li = $( "<li>" ),
          wrapper = $( "<div>", { text: item.label } );
 
        if ( item.disabled ) {
          li.addClass( "ui-state-disabled" );
        }
 
        $( "<span>", {
          style: item.element.attr( "data-style" ),
          "class": "ui-icon " + item.element.attr( "data-class" )
        })
          .appendTo( wrapper );
 
        return li.append( wrapper ).appendTo( ul );
      }
    });

    $( "#people" )
      .iconselectmenu()
      .iconselectmenu( "menuWidget")
       .addClass( "ui-menu-icons avatar" );
	});
	*/
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

		if ($("#input-cod").val().length != 6) {

			errorMessage += "<p> Your code is not valid</p>";
		}

		if ($("#input-cod").val() == "") {

			fieldsMissing += "<br>Code";
		}
		
		if ($("#user").val() == "") {

			fieldsMissing += "<br>Code";
		}

		if (fieldsMissing != "") {
			errorMessage += "<p>The following field(s) are missing" + fieldsMissing;
		}

		if (errorMessage != "") {
			$("#errorMessage").html(errorMessage);
		} else {
			$("#errorMessage").hide();
			e.preventDefault();
			window.location = "sign_up_name_3.html";
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
	$(".my-select").chosen({width:"15%"});
});
