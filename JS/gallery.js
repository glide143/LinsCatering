$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
	});
$(function(){
	$('#dialogModal_ex1').click(function(){
		$('.dialog_content').dialogModal({
			topOffset: 0,
			onOkBut: function() {},
			onCancelBut: function() {},
			onLoad: function(el, current) {},
			onClose: function() {},
			onChange: function(el, current) {
				if(current == 3){
					el.find('.dialogModal_header span').text('Packages');
					$.ajax({url:'ajax.html'}).done(function(content){
						el.find('.dialogModal_content').html(content);
					});
				}
			}
		});
	});
});

$(document).ready(function() {
	$('#open-popup1').magnificPopup({
    items: [
      {
        src: './IMG/gallery/weddings1.jpg',
        title: 'Wedding 1'
      },
            {
        src: './IMG/gallery/weddings2.jpg',
        title: 'Wedding  2'
      },
           {
        src: './IMG/gallery/weddings3.jpg',
        title: 'Wedding 3'
      },
           {
        src: './IMG/gallery/weddings4.jpg',
        title: 'Wedding 4'
      },
           {
        src: './IMG/gallery/weddings5.jpg',
        title: 'Wedding 5'
      },
	        {
        src: './IMG/gallery/weddings6.jpg',
        title: 'Wedding 5'
      },
	        {
        src: './IMG/gallery/weddings7.jpg',
        title: 'Wedding 6'
      },
	        {
        src: './IMG/gallery/weddings8.jpg',
        title: 'Wedding 7'
      },
	        {
        src: './IMG/gallery/weddings9.jpg',
        title: 'Wedding 8'
      },
	        {
        src: './IMG/gallery/weddings10.jpg',
        title: 'Wedding 9'
      },
	        {
        src: './IMG/gallery/weddings11.jpg',
        title: 'Wedding 10'
      },
	        {
        src: './IMG/gallery/weddings12.jpg',
        title: 'Wedding 11'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});
});

/**BIRTHDAY**/
$(function(){
	$('#dialogModal_ex2').click(function(){
		$('.dialog_content2').dialogModal({
			topOffset: 0,
			onOkBut: function() {},
			onCancelBut: function() {},
			onLoad: function(el, current) {},
			onClose: function() {},
			onChange: function(el, current) {
				if(current == 3){
					el.find('.dialogModal_header span').text('Page 3');
					$.ajax({url:'ajax.html'}).done(function(content){
						el.find('.dialogModal_content2').html(content);
					});
				}
			}
		});
	});
});

$(document).ready(function() {
	$('#open-popup2').magnificPopup({
    items: [
      {
        src: './IMG/gallery/bday1.jpg',
        title: 'Birthday 1'
      },
            {
        src: './IMG/gallery/bday2.jpg',
        title: 'Birthday 2'
      },
           {
        src: './IMG/gallery/bday3.jpg',
        title: 'Birthday 3'
      },
           {
        src: './IMG/gallery/bday4.jpg',
        title: 'Birthday 4'
      },
           {
        src: './IMG/gallery/bday5.jpg',
        title: 'Birthday 5'
      },
	        {
        src: './IMG/gallery/bday6.jpg',
        title: 'Birthday 6'
      },
	        {
        src: './IMG/gallery/bday7.jpg',
        title: 'Birthday 7'
      },
	        {
        src: './IMG/gallery/bday8.jpg',
        title: 'Birthday 8'
      },
	        {
        src: './IMG/gallery/bday9.jpg',
        title: 'Birthday 9'
      },
	        {
        src: './IMG/gallery/bday10.jpg',
        title: 'Birthday 10'
      },
	        {
        src: './IMG/gallery/bday11.jpg',
        title: 'Birthday 11'
      },
	        {
        src: './IMG/gallery/bday12.jpg',
        title: 'Birthday 12'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});
});

/**DEBUT**/

$(function(){
	$('#dialogModal_ex3').click(function(){
		$('.dialog').dialogModal({
			topOffset: 0,
			onOkBut: function() {},
			onCancelBut: function() {},
			onLoad: function(el, current) {},
			onClose: function() {},
			onChange: function(el, current) {
				if(current == 3){
					el.find('.dialogModal_header span').text('Packages');
					$.ajax({url:'ajax.html'}).done(function(content){
						el.find('.dialogModal_content3').html(content);
					});
				}
			}
		});
	});
});

$(document).ready(function() {
	$('#open-popup3').magnificPopup({
    items: [
      {
        src: './IMG/gallery/debut1.jpg',
        title: 'Debut 1'
      },
            {
        src: './IMG/gallery/debut2.jpg',
        title: 'Debut 2'
      },
           {
        src: './IMG/gallery/debut3.jpg',
        title: 'Debut 3'
      },
           {
        src: './IMG/gallery/debut4.jpg',
        title: 'Debut 4'
      },
           {
        src: './IMG/gallery/debut5.jpg',
        title: 'Debut 5'
      },
	        {
        src: './IMG/gallery/debut6.jpg',
        title: 'Debut 6'
      },
	        {
        src: './IMG/gallery/debut7.jpg',
        title: 'Debut 7'
      },
	        {
        src: './IMG/gallery/debut8.jpg',
        title: 'Debut 8'
      },
	        {
        src: './IMG/gallery/debut9.jpg',
        title: 'Debut 9'
      },
	        {
        src: './IMG/gallery/debut10.jpg',
        title: 'Debut 10'
      },
	        {
        src: './IMG/gallery/debut11.jpg',
        title: 'Debut 11'
      },
	        {
        src: './IMG/gallery/debut12.jpg',
        title: 'Debut 12'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});
});




/**FOODS**/


$(document).ready(function() {
	$('#open-popup4').magnificPopup({
    items: [
      {
        src: './IMG/gallery/Food1.jpg',
        title: 'Fish Fillet'
      },
            {
        src: './IMG/gallery/Food2.jpg',
        title: 'Nachos'
      },
           {
        src: './IMG/gallery/Food3.jpg',
        title: 'Mixed Vegetables'
      },
           {
        src: './IMG/gallery/Food4.jpg',
        title: 'Carbonara'
      },
           {
        src: './IMG/gallery/Food5.jpg',
        title: 'Fish Fillet with Sweet and Sour Sauce'
      },
	        {
        src: './IMG/gallery/Food6.jpg',
        title: 'Roasted Chicken with Gravy Sauce'
      },
	        {
        src: './IMG/gallery/Food7.jpg',
        title: 'Pork Ribs with BBQ Sauce'
      },
	        {
        src: './IMG/gallery/Food8.jpg',
        title: 'Roasted Beef with Mushroom sauce'
      },
	        {
        src: './IMG/gallery/Food9.jpg',
        title: 'Chicken Fillet with Mango sauce 9'
      },
	        {
        src: './IMG/gallery/Food10.jpg',
        title: 'Lumpia Sauce'
      },
	        {
        src: './IMG/gallery/Food11.jpg',
        title: 'Lumpiang Sariwa'
      },
	        {
        src: './IMG/gallery/Food12.jpg',
        title: 'Baked Macaroni'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});
});


$(document).ready(function() {
	$('#package1').magnificPopup({
    items: [
      {
        src: 'IMG/brochure.jpg',
        title: 'Wedding Packages'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});
});


$(document).ready(function() {
	$('#package2').magnificPopup({
    items: [
      {
        src: 'IMG/brochure-2.jpg',
        title: 'Wedding Packages'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});
});











