$(function(){
	var isInfowindowOpen = false;
	var map_canvas = document.getElementById('map-canvas');
	var mapOptions = {
		zoom: 15,
        minZoom: 8,
        disableDefaultUI: true
	};
	var map = new google.maps.Map(map_canvas, mapOptions);
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
	google.maps.event.addListener(map, "click", function(event){
		if (isInfowindowOpen) return;
		var lat = event.latLng.k;
		var lng = event.latLng.B;
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			map: map,
			infowindow: new google.maps.InfoWindow({
				content: $("#infowindow-template").html()
			})
		})
		google.maps.event.addListener(marker, "click", function(){
			this.infowindow.open(map,this);
			isInfowindowOpen = true;
		});
		google.maps.event.addListener(map, "click", function(){
			marker.infowindow.close();
			isInfowindowOpen = false;
		})
	});

	// Gets a dataset of placemarks based on user and location
	function getNewsFeedData(location){

	}

	function postNewPlaceMark(location, image){

	}
});