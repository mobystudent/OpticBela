import $ from 'jquery';
import slick from 'slick-carousel';

$(window).on('load', () => {
	showSubMenu();
	showBurgerMenu();
	slider();
	showContactsHeader();
});

function showSubMenu() {
	$(".nav__link--drop").click(function(e) {
		e.preventDefault();

		$(".nav__submenu").slideUp();
		$(this).next().css('display') == 'none' ? $(this).next().slideDown() : $(this).next().slideUp();
	});
}

function showBurgerMenu() {
	$(".btn--burger").click(e => {
		e.preventDefault();

		$(".burger").slideDown();
		$(".wrapper").addClass("wrapper--hidden");
	});

	$(".btn--close").click(e => {
		e.preventDefault();

		$(".burger").slideUp();
		$(".wrapper").removeClass("wrapper--hidden");
	});
}

function slider() {
	$("#mainSlider").slick({
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		easing: 'ease-in'
	});
}

function showContactsHeader() {
	$(".btn--contact").click(function(e) {
		e.preventDefault();

		const nameBlock = $(this).data("name");

		$(".contacts__block--header").map((i, item) => {
			if($(item).data('block') == nameBlock) {
				if($(item).css('display') == 'none') {
					$(".contacts__block--header").hide();
					$(item).show();
			 	} else {
					$(item).hide();
				}
			}
		});
	});
}
