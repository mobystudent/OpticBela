$(window).on('load', () => {
	showSubMenu();
	showBurgerMenu();
});

function showSubMenu() {
	$(".nav__link--drop").click(function(e) {
		e.preventDefault();

		$(".nav__submenu").slideUp();
		$(this).next().css('display') == 'none' ? $(this).next().slideDown() :  $(this).next().slideUp();
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
