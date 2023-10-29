const navbar = document.querySelector(".navbar-nav");

navbar.addEventListener("click", function (e) {
	const targetNav = e.target;

	if (targetNav.classList.contains("nav-link")) {
		const menuLinkActive = document.querySelector("ul li a.active");
		if (menuLinkActive !== null && targetNav.getAttribute("href") !== menuLinkActive.getAttribute("href")) {
			menuLinkActive.classList.remove("active");
		}
		targetNav.classList.add("active");
	}
});

$(document).ready(function () {
	$('section').css('display', 'none');
	$('section').fadeIn(1000);
});

$(document).ready(function () {
	$(window).scroll(function () { 
		$('#img-abt').each(function () { 
			var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_element){
				$(this).animate({'opacity':'1'},1000);
			}		 
		});
	});
});

$(document).ready(function () {
	$(window).scroll(function () { 
		$('.box').each(function () { 
			var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_element){
				$(this).animate({'opacity':'1'},1000);
			}		 
		});
	});
});

$(document).ready(function () {
	$(window).scroll(function () { 
		$('#sertif').each(function () { 
			var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_element){
				$(this).animate({'opacity':'1'},1000);
			}		 
		});
	});
});

// Fungsi untuk menandai tautan yang aktif
function highlightActiveLink() {
    const sections = document.querySelectorAll('section'); // Ganti dengan selektor sesuai dengan struktur HTML Anda
    const navbarLinks = document.querySelectorAll('.navbar .nav-item .nav-link');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <=250 && rect.bottom >= 200) { // Sesuaikan dengan seberapa dekat bagian atas halaman ke elemen yang akan ditandai
            navbarLinks.forEach((link) => {
                link.classList.remove('active');
            });
            navbarLinks[index].classList.add('active');
        }
    });
}

// Panggil fungsi saat halaman dimuat dan saat jendela digulir
window.addEventListener('load', highlightActiveLink);
window.addEventListener('scroll', highlightActiveLink);