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
  		};
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


/*Mapa*/
var map;
var miUbicacion;
var latitud, longitud;

document.getElementById("encuentrame").addEventListener("click", initMap);
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: { lat: -9.1191427, lng: -77.0349046 },
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false
    });
    function buscar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
        }
    }   

    var funcionExito = function (posicion) {
        latitud = posicion.coords.latitude;
        longitud = posicion.coords.longitude;
        miUbicacion = new google.maps.Marker({
            position: { lat: latitud, lng: longitud },
            animation: google.maps.Animation.BOUNCE,
            map: map,
            icon: "assets/img/circulo.png"
        });
        map.setZoom(17);
        map.setCenter({ lat: latitud, lng: longitud });
    }
    var funcionError = function (error) {
        alert("Tenemos un problema para encontrar tu ubicación");
    }
    function initialize() {//autocompletar direcciones
        var inputDestino = document.getElementById('destino');
        var autocompletados = new google.maps.places.Autocomplete(inputDestino);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    buscar();
};
document.getElementById("ruta").addEventListener("click", function () {
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();

    lineaRuta(directionsService, directionsDisplay);
});


function lineaRuta(directionsService, directionsDisplay) {      
        console.log(miUbicacion);
        directionsService.route({
        origin: { lat: latitud, lng: longitud },
        destination: document.getElementById('destino').value,
        travelMode: "DRIVING"
    },
        function (response, status) {
            if (status === "OK") {
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(map);
            } else {
                window.alert("Ruta no disponible" + status);
            }
        });
}
function openNav() {
    	document.getElementById("myNav").style.width = "100%";
	}

	function closeNav() {
    	document.getElementById("myNav").style.width = "0%";
	}

