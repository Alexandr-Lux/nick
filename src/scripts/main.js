// $('.header__burger').click(function(event) {
// 	$(this).toggleClass('active');
// 	$('.header__menu').toggleClass('active');
// 	$('body').toggleClass('lock');
// });

/*________________ SLIDER ________________*/

$(document).ready(function(){
	$('.partners__slider').slick({
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 2,
		easing: 'ease',
		infinite: true,
		autoplay: true,
		speed: 700,
		autoplaySpeed: 1500,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 2,
				}
		}]
	});
});

/*________________ SCROLL ________________*/

$(function(){

	let headerMenu = $(".header__menu");
	let intro = $(".intro");
	let introHeight;
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function() {
		introHeight = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		if( scrollPos > introHeight) {
			headerMenu.addClass("header__fixed");
		} else {
			headerMenu.removeClass("header__fixed");
		}
	})
});


/*________________ ANIMATION ________________*/

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('show');
			} else {
				if (!animItem.classList.contains("anim-no-hide")) {
					animItem.classList.remove('show');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 500);
}

/*________________ CATEGORY ________________*/

$('.portfolio__link').on('click', function(event) {
	event.preventDefault();
	$('.portfolio__link').removeClass('active');
	$(this).addClass('active'); // выделяем выбранную категорию

	let cat = $(this).attr('data-filter'); // определяем категорию

	if (cat == 'all') { // если all
		$('.portfolio__column').show(); // отображаем все позиции
	} else { // если не all
		$('.portfolio__column').hide(); // скрываем все позиции
		$('.portfolio__column[data-filter="' + cat + '"]').show(); // и отображаем позиции из соответствующей категории
	}
});

