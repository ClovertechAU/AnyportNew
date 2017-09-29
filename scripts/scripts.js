$(document).ready(function () {
    currentYear = new Date().getFullYear();

    var thisYear = $('#thisYear');
    thisYear.append(currentYear);

    /***** WOW SCROLL *****/
    new WOW({
        mobile: false
    }).init();

    /***** NAV TRANSFORMATION *****/
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');
    });

	$(document).on("scroll", onScroll);

    //smoothscroll
	$('a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
	    $(document).off("scroll");

	    $('a').each(function () {
	        $(this).removeClass('active');
	    })
	    $(this).addClass('active');

	    var target = this.hash,
            menu = target;
	    $target = $(target);

	    if (target.length) {
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top + 2
	        }, 1000, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    }
	});

});
/***************** SCROLL TO SECTION ******************/
function onScroll(event) {
    var scrollPos = $(document).scrollTop() + 100;
    $('.header-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
            $('.header-nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}

/***************** GOOGLE MAPS ******************/
function initMap() {
    var myLatlng = new google.maps.LatLng(-38.386854, 142.484103);
    var center = new google.maps.LatLng(-38.386854, 142.484103);
    var zoom = 14;
    var drag = true;

    var myOptions = {
        zoom: zoom,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        zoomControl: false,
        scrollwheel: false,
        draggable: false,
        scaleControl: false,
        streetViewControl: false
    }

    var style = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
    ]

    $('.map_canvas').each(function () {
        myOptions.center = center;
        var map = new google.maps.Map(this, myOptions);
        var mapType = new google.maps.StyledMapType(style, { name: "grayscale" });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(-38.386854, 142.484103),
            icon: 'images/mapMarker.png',
            map: map,
            title: 'KJF Custom Trim!'
        });

        map.mapTypes.set('gray', mapType);
        map.setMapTypeId('gray');
    });
}

/***************** Header BG Scroll ******************/
$(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		//if (scroll >= 20 || Modernizr.mq('only all and (max-width: 639px)')) {
		if (scroll >= 20) {
            $('div#navigation').addClass('fixed');
            $('div#navigation').css({
                "padding": "7px 0",
                "border-bottom": "1px solid #eeeeee"
            });
            $('.logo').css({
                "display": "none",
            });
            $('.logo-resize').css({
                "display": "inline-block",
            });
		} else {
		    $('div#navigation').removeClass('fixed');
		    $('div#navigation').css({
                "padding": "7px 0",
                "border-bottom": "none"
		    });
		    $('.logo').css({
		        "display": "inline-block",
		    });
		    $('.logo-resize').css({
		        "display": "none",
		    });
		    $('ul.primary-nav').css({
		        "top": "40px",
		    });
		}
	});
});

/***************** SCROLL TOP ******************/
$(window).scroll(function () {
    // Show hide scrolltop button
    if ($(window).scrollTop() === 0) {
        $('.scrollTop').stop(false, true).fadeOut(600);
    } else {
        $('.scrollTop').stop(false, true).fadeIn(600);
    }
});
$(document).on('click', '.scrollTop', function () {
    $('body,html').animate({ scrollTop: 0 }, 1000);
    return false;
});


