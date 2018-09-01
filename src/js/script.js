$(document).ready(function(){

	$('.grid').isotope({
  		itemSelector: '.grid-item',
  		masonry: {
    		columnWidth: 70
  		}
	});


	$('.my_slider').slick({
  		dots: true,
  		infinite: true,
  		speed: 300,
  		slidesToShow: 1,
  		arrows: false;
	});


    function initMap() {
    var coordinates = new google.maps.LatLng{lat: 47.212325, lng: 38.933663},
    
        map = new google.maps.Map(document.getElementById('#map'), {
            center: coordinates
        });
	}
	initMap();
});