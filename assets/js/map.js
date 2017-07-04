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
