$(document).ready(function() {
	$('.section1__slider').slick({
		arrows: true,
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});

$(document).ready(function() {
	$(".section3-1__slider").slick({
		dots: false,
		focusOnSelect: false,
		infinite: false,
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1367,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				centerMode: true,
			}
		}]
	});
});

$(document).ready(function() {
	$(".section3-2__bottom-cards").slick({
		dots: false,
		arrows: false,
		focusOnSelect: false,
		infinite: true,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1441,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true,
				arrows: true,
			}
		}]
	});
});