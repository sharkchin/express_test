var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
	directionsDisplay = new google.maps.DirectionsRenderer();
	var mapOptions = {
		zoom: 7,
		center: new google.maps.LatLng(34.028856,-118.497332)
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById('directions-panel'));

	var control = document.getElementById('control');
	control.style.display = 'block';
	// map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
}

function calcRoute() {
	var start = document.getElementById('start').value;
	// var start = document.forms["directions"]["start"].value;
	// alert('start=',start);
	var end = document.getElementById('end').value;
	// var end = document.forms["directions"]["end"].value;
	// alert('end=',end);
	var request = {
	    origin: start,
	    destination: end,
	    travelMode: google.maps.TravelMode.DRIVING
	  };
	directionsService.route(request, function(response, status) {
		// alert('status=',status);
	    if (status == google.maps.DirectionsStatus.OK) {
	      directionsDisplay.setDirections(response);
	    }
	  });
}
// function initialize() {
// 	var mapOptions = {
// 	  center: new google.maps.LatLng(-34.397, 150.644),
// 	  zoom: 8
// 	};
// 	var map = new google.maps.Map(document.getElementById("map-canvas"),
// 	    mapOptions);
// }
google.maps.event.addDomListener(window, 'load', initialize);