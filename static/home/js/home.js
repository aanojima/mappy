$(function(){
	map_canvas = document.getElementById('map-canvas');
	mapOptions = {
		zoom: 2,
		// center: new google.maps.LatLng(coordinates[0],coordinates[1]),
		// mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
	};
	map = new google.maps.Map(map_canvas, mapOptions);
	if(navigator.geolocation) {
		browserSupportFlag = true;
		navigator.geolocation.getCurrentPosition(function(position) {
			initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
			map.setCenter(initialLocation);
		}, function() {
			handleNoGeolocation(browserSupportFlag);
		});
	}
	// Browser doesn't support Geolocation
	else {
		browserSupportFlag = false;
		handleNoGeolocation(browserSupportFlag);
	}
	function handleNoGeolocation(errorFlag) {
		if (errorFlag == true) {
			alert("Geolocation service failed.");
			initialLocation = newyork;
		} else {
			alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
			initialLocation = siberia;
		}
		map.setCenter(initialLocation);
	}
});