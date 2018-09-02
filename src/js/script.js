$(document).ready(function(){
	
	$('.grid').isotope({

  		itemSelector: '.grid-item',
  
  		masonry: {
    		columnWidth: 70
  		}
	});


	$('.my_slider').slick({
  		infinite: true,
  		speed: 400,
      dots: true,
  		fade: true,
  		arrows: false,
  		autoplay: true
  	}) 

  	

        // Функция initMap которая отрисует карту на странице
        var map;
        function initMap() {
            // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
            var map = new google.maps.Map(document.getElementById('map'), {
                // При создании объекта карты необходимо указать его свойства
                // center - определяем точку на которой карта будет центрироваться
                position: {lat: -34.397, lng: 150.644},
                // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
                zoom: 8
            });
        }


initMap();
});