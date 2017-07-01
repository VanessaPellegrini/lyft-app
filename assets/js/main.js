/*alert("hola");*/
$(document).ready(function () {
	/*pluggin para las banderas*/
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
 
    $( "#filesA" )
      .iconselectmenu()
      .iconselectmenu( "menuWidget" )
        .addClass( "ui-menu-icons" );
 
    $( "#filesB" )
      .iconselectmenu()
      .iconselectmenu( "menuWidget" )
        .addClass( "ui-menu-icons customicons" );
 
    $( "#people" )
      .iconselectmenu()
      .iconselectmenu( "menuWidget")
        .addClass( "ui-menu-icons avatar" );
	});
	/*sign up telefono validacion*/
	$("#submitButton").click(function(e){
		var errorMessage = "";
		var fieldsMissing = "";

		if ($("#telefono").val().length != 9) {

			errorMessage += "<p> Your phone Number is not valid</p>";
		}

		if ($("#telefono").val() == "") {

			fieldsMissing += "<br>Phone";
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
});
/*evento para pasar a la segunda parte de sign up
*Al dar click a aceptar del alert redireccionar a window.location.replace("ingresar_codigo_2.html");
*/