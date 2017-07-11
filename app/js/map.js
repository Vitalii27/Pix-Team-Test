var mapGoogle = (function() {
    var init = function() {
        var uluru = { lat: 50.005440, lng: 36.229861 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: uluru,
            scrollwheel: false

        });

    };
    return { init: init };

})();
if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', mapGoogle.init);
}