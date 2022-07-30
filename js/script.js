//video play button
$(document).on('click', '.video_play-btn', function(e) {
	e.preventDefault();
	var play_btn = $(this);
	play_btn.addClass('active');
	var parrent = play_btn.closest('.section2__block-img');
	play_video(parrent);
});

function play_video(parrent) {
	var video = parrent.find('video');
	video.get(0).play();
	video.attr('controls', 'controls');
}


//section2-1 responsive change img
if ($('.nav__menu-icon').css('display') != 'none') {
	$(document).on('click', '.section2__block-img', function(e) {
		var img_clicked = $(this);
		if (img_clicked.hasClass('active') || img_clicked.siblings().hasClass('active')) {
			img_clicked.toggleClass('active');
			img_clicked.siblings().toggleClass('active');
		}
	});
}


//smooth anchor scrolling
const anchors = document.querySelectorAll('a[href^="#"]');
for (let anchor of anchors) {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
		document.querySelector(goto).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}


// burger menu
if ($('.nav__menu-icon').css('display') != 'none') {
	const menu_icon = document.querySelector('.nav__menu-icon');

	const menu = document.querySelector('.nav__menu');
	const body = document.querySelector('body');
	menu_icon.addEventListener("click", function(e) {
		menu_icon.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('active');
	});

	menu.addEventListener("click", function(e) {
		menu_icon.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('active');
	});
}


//contact form
$(document).on('click', '.get_in_touch-btn', function(e) {
	e.preventDefault();
	var contact = $('.contact');
	contact.addClass('active');
	$('body').addClass('active');

	contact.on('click', function() {
		contact.removeClass('active');
		$('body').removeClass('active');
	}).children().on('click', function(e) {
		if ($(e.target).hasClass('form__close')) {
			e.preventDefault();
			contact.removeClass('active');
			$('body').removeClass('active');
		} else
			return false;
	});
});