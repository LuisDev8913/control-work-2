$(document).ready(function(){
	

	 // isotope
  $('.grid').isotope({
  		itemSelector: '.grid-item',
  		masonry: {
    		 columnWidth:  '.grid-item',
         isFitWidth: true,
         gutter: 10,
  		}
	});
 
  $('.filter nav ul li').click(function(){
    var selector = $(this).attr('data-filter');
    $('.grid').isotope({
      filter:selector
    });
    
  });

// slider
	$('.my_slider').slick({
  		infinite: true,
  		speed: 400,
      dots: true,
  		fade: true,
  		arrows: false,
  		autoplay: true
  	}) 
  // Scroll

    $("nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1700);
    });
  	
        // map
      
    var mapContainer = document.getElementById('map');
    showMap(document.getElementById('map'), 49.568583 ,  34.585416 );

    function showMap(mapContainer, lat, lon) {
        var center = new google.maps.LatLng(lat, lon);
        var marker = new google.maps.Marker({
            position: {lat: 49.568583, lng: 34.585416},
            icon: {
                url: "pro/img/marker.png"
            }
        });
        var mapProp= {
            center: center,
            zoom: 10,
            zoomControl:false,
            disableDefaultUI: true,
        };

        var map = new google.maps.Map(mapContainer, mapProp);
        marker.setMap(map);

    }

});