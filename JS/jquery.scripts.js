$(document).ready(function() {

   var whitmans = new Whitmans();
   whitmans.init();

});

function Whitmans() {
	
	// SELECT ONCE
	var els = {
        window: $(window),
		document: $(document),
		page: $('html, body'),
		body: $('body'),
		logos: $('#logos li'),
		fixed: $('#fixed'),
		navLink: $('#nav a, #logos img'),
		nav: $('#nav'),
		showLink: $('a.showall'),
		hideLink: $('a.hideall'),
		menuHome: $('#menu .changehome'),
		menuFull: $('#menu .changefull'),
		menuNavItem: $('.menu_nav li'),
		bigger: $('.bigger_items'),
		smaller: $('.smaller_items'),
		sides: $('.sides_items'),
		container: $('.container'),
		loader: $('#loader'),
		sections: $('.section'),
		fadeIn: $('.section, #fixed'),
		servicesSlider: $('.services_slider'),
		menuSlider: $('.menu_slider')
    }

	var sections = {};
	
	function init() {
		
		// ON LOAD
		els.window.load(function(){
			setTimeout(function() {
				els.loader.hide();
				els.fadeIn.removeClass('invisible').addClass('fadeIn');
			}, 5000);
			els.window.trigger('resize');
		});
			
		// SCROLL INTERVAL
		var scrolled = false;
		els.window.bind('scroll', function() {
	        scrolled = true;
	    });
		setInterval(function() {
			if(scrolled) {
				scrolled = false;
				scrollChange();
			}
		}, 100);
		
		// FLEX SLIDER PLUGIN
		els.servicesSlider.flexslider({
			animation: "slide",
			slideshow: false,
			keyboardNav: false,
			controlsContainer: "#services"
		});
		
		// MAKE CONTROL NAVS UNIQUE
		var i = 0;
		$('#services ol').attr('class', function() {
		   i++;
		   return 'flex-control-nav list'+i;
		});	
		
		// VERTICAL CENTERING
		els.window.on('resize',function(){
			//CONTAINER
			els.container.each(function(){
				$container = $(this);
				$section = $container.parent();
				var margin_top = ($section.height() - $container.height())/2;
				$container.css('margin-top',margin_top);
			});
			// SLIDERS
			$('.slide_container').each(function() {
				$slide_containers = $(this);
				var margintop = (els.sections.height() - $slide_containers.height())/2;
				$slide_containers.css('margin-top',margintop);
			});
		});
		
		// services LINKOUTS
		$('#services a').attr('target','_blank');

		// KEYBOARD NAV
		els.document.keydown(function(event) {
			var navCur = $('#nav li.current');
			if (event.keyCode == 38) { // up arrow
				navCur.prev().find('a').click();
				event.preventDefault();
			} else if (event.keyCode == 40) { // down arrow
				navCur.next().find('a').click();
				event.preventDefault();
			} else if (event.keyCode == 37) { // left arrow
				if (els.body.hasClass("menu")) {
					$('#menu .flex-direction-nav a.prev').click();
				} else if (els.body.hasClass("services")) {
					$('#services .flex-direction-nav a.prev').click();
				} else {
					return false;
				}
				event.preventDefault();
			}
			else if (event.keyCode == 39) { // right arrow
				if (els.body.hasClass("menu")) {
					$('#menu .flex-direction-nav a.next').click();
				} else if (els.body.hasClass("services")) {
					$('#services .flex-direction-nav a.next').click();
				} else {
					return false;
				}
				event.preventDefault();
			}
		});
		
		// NAV CLICK HANDLERS
		els.navLink.click(function(){
			var $this = $(this);
			if ($this.hasClass('home') || $this.hasClass('up')) {
				els.page.animate({scrollTop:0}, 500);
			} else if ($this.hasClass('about')) {
				els.page.animate({scrollTop:$('#about').offset().top}, 500);
			} else if ($this.hasClass('menu')) {
				els.page.animate({scrollTop:$('#menu').offset().top}, 500);
			} else if ($this.hasClass('services')) {
				els.page.animate({scrollTop:$('#services').offset().top}, 500);
			} else if ($this.hasClass('findus')) {
				els.page.animate({scrollTop:$('#findus').offset().top}, 500);
			}
			return false;
		});

	};

  function adjustNav($nav, $el, $logos, $els, pos, curClass) {
		$nav.find('.'+curClass).removeClass(curClass);
		$el.addClass(curClass);
		$logos.removeClass();
	    $els.addClass(curClass);
		els.body.removeClass().addClass(pos);
	};

	function getPositions() {
		els.nav.find('a').each(function() {
			var linkHref = $(this).attr('href');
			var divPos = $(linkHref).offset().top;
			sections[linkHref.substr(1)] = Math.round(divPos);
		});
    };
	
	function getSection(windowPos) {			
		var returnValue = ''
		var windowHeight = Math.round(els.window.height() / 32);
		for(var section in sections) {
			if((sections[section] - windowHeight) < windowPos) {
				returnValue = section;
			}
		}
		return returnValue;
    };

	function scrollChange() {	      
		getPositions();	
		var windowTop = els.window.scrollTop();
		var winHeight = els.window.height()/32;
        var position = getSection(windowTop);
		if(position !== '') {
			adjustNav(
				els.nav,
				els.nav.find('a[href=#'+position+']').parent(),
				els.logos, 
				els.logos.find('a[href=#'+position+']').parent(),
				position, 
				'current'
			);
		}
		if (windowTop >= els.sections.height()-(winHeight)) {
			els.fixed.css('z-index','8');
		} else {
			els.fixed.css('z-index','5');
		}
    };

	// FADE ON LOGO CHANGE
	$("#logos li:not(:first-child)").css({
		'-webkit-transition':'opacity .0s ease-in-out',
		'-moz-transition': 'opacity .0s ease-in-out',
		'-o-transition': 'opacity .0s ease-in-out',
		'-ms-transition': 'opacity .0s ease-in-out',
		'transition': 'opacity .0s ease-in-out',
	});

	// RETURN
	return {
		init: init
	}
	
};

// RESPONSIVE IMAGES
(function( win ){
	var	sw = win.screen.width,
	doc = win.document,
	def = win.responsive_imgs || {},
	cookieName = def.cookieName || "rwd-screensize",
	cookieValue = def.cookieValue || sw > 500 ?  ( sw > 1000 ? "large" : "medium" ) : "small",
	cookieAge = def.cookieAge || 30000,
	cookieDomain = def.cookieDomain,
	cookiePath = def.cookiePath || "/",
	recordRes = (function(){
		var date = new Date();
		date.setTime( date.getTime() + cookieAge );
		doc.cookie = cookieName + "=" + cookieValue + ";" +
			"expires=" + date.toGMTString() + ";" +
			(cookiePath ? "path=" + cookiePath + ";" : "" ) +
			( cookieDomain ? "domain=" + cookieDomain + ";" : "");
	})();
})(this);





