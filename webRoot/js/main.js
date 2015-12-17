// Document Ready Function
$(function() {

    // Call Fancybox
    $(".main-gallery-item").fancybox();
    // Call to Google Maps API.
    google.maps.event.addDomListener(window, 'load', initializeMap);

    // Generate Gallery
    generateGallery(12);

});

//Initialize Parameters for G-Maps
function initializeMap() {
    var mapCanvas = document.getElementById('main-map');
    var styles = [
        {
            "stylers": [
                { "saturation": -100 },
                { "hue": "#9900ff" },
                { "gamma": 0.18 },
                { "lightness": 11 }
            ]
        }
    ];
    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
        center: new google.maps.LatLng(42.9837, -81.2497),
        zoom: 14,
        zoomControl : false,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        panControl : false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

}//initializeMap


//Initialize Gallery
function generateGallery(images){

    var loopCount = images;

    for (i = 0; i < loopCount; i++) {
        $('.main-gallery').append('<a class="main-gallery-item" style="background:url(http://farm1.staticflickr.com/313/19831416459_5ddd26103e_b.jpg) 50% 50% no-repeat;background-size:cover;" href="http://farm1.staticflickr.com/313/19831416459_5ddd26103e_b.jpg"></a>');
    }
}//Generate Gallery