$(function() {

    google.maps.event.addDomListener(window, 'load', initialize);
});







//Initialize Parameters for G Maps
function initialize() {
    var mapCanvas = document.getElementById('main-map');
    var styles = [
        {
            "stylers": [
                { "saturation": -100 },
                { "hue": "#9900ff" },
                { "gamma": 0.18 },
                { "lightness": 5 }
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
}