function slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item)=> item.style.display = 'none');
        dots.forEach((item)=> item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function curentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', ()=> {
        plusSlides(-1);
    });

    next.addEventListener('click', ()=> {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', (e)=> {
        for(let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i-1]) {
                curentSlide(i);
            }
        }
    });
}

module.exports = slider;