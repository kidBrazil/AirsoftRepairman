//
//
// Base Styles for Airsoft Repairman
// Written By: Lucas Moreira - l.moreira@live.ca
//
// ------------------------------------------------------
// This File controls all of the dynamic elements of the site.
//
//-------------------------------------------------------
// Document Ready Function
var mainHeaderObj   = null;

$(function() {
    //Hide body for a sec to give it time to load images
    $('body').css({opacity:0});

    //If the window.Bind Load doesn't run fast enough Show the body anyway.
    setTimeout(function(){
        $('body').animate({
            opacity: 1
        }, 600, function() {
            // Animation complete.
        });
    },2000);

    // Call Fancybox --------------------------------
    $(".main-gallery-item").fancybox();

    // Call to Google Maps API.
    google.maps.event.addDomListener(window, 'load', initializeMap);

    //Show More Button
    $('.show-more').click(function() {
        if(!$(this).parent().hasClass('active-content')){
            $(this).parent().addClass('active-content');

        }
    });

    //Show More Button
    $('.show-less').click(function() {
        if($(this).parent().hasClass('active-content')){
            $(this).parent().removeClass('active-content');
        }
    });

    //Smooth Scroll ---------------------------------
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });//[ SMOOTH SCROLL ] ---------------------------

    // Navigation Scroll & Window Resize -------------

    // Variables and Objects for Nav
    var mainNavigation  = '.main-navigation',
        mainHeader      = '.splash-intro';

    $( document ).scroll(function() {

        //Poll Object During scroll.
        mainHeaderObj   = $(mainHeader)[0].getBoundingClientRect();
        //If bottom of header passes frame
        if( mainHeaderObj.bottom <= 0){
            $(mainNavigation).css({
                position    : 'fixed',
                top         : '0'
            });
            $(mainNavigation).addClass( "transparency" );
            scrollFlag = true;
        }
        //Return
        else{
            $(mainNavigation).css({
                position    : 'relative',
                top         : '0'
            });
            $(mainNavigation).removeClass( "transparency" );
            scrollFlag = false;
        }
    });//[ SCROLL FUNCTION ] -----------------------

});

$( window ).load(function() {

    //Display-Body
    $('body').animate({
        opacity: 1
    }, 600, function() {
        // Animation complete.
    });

    // Generate Gallery -----------------------------
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


//Initialize Gallery -- LIVE VERSION OF THE CODE [ LIVE ]
function generateGallery(images){

    //Dir where these will be kept
    var dir = "/images/gallery/";
    //Define Type of file
    var fileType = ".png";
    //Ajax request for images - Makes ure .htaccess exist with "Options +Indexes"
    $.ajax({
        url: dir,
        success: function (data) {
            //List all png file names in the gallery
            $(data).find("a:contains(" + fileType + ")").each(function () {
                var filename = this.href.replace(window.location.host, "").replace("http:///", "");
                //Make it easier by combining the variables
                var fileLocation = dir+filename;
                $('.main-gallery').append("<a class='main-gallery-item' style='background:url("+ fileLocation + ") 50% 50% no-repeat;background-size:cover;' href="+ fileLocation +"></a>");
            });
        }
    });
}//Generate Gallery



////Initialize Gallery -- TESTING LOCAL [ LOCAL ]
//function generateGallery(images){
//
//
//    //For Local testing use this function
//    var loopCount = images;
//
//    for (i = 0; i < loopCount; i++) {
//        $('.main-gallery').append('<a class="main-gallery-item" style="background:url(http://farm1.staticflickr.com/313/19831416459_5ddd26103e_b.jpg) 50% 50% no-repeat;background-size:cover;" href="http://farm1.staticflickr.com/313/19831416459_5ddd26103e_b.jpg"></a>');
//    }
//}//Generate Gallery