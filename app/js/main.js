document.addEventListener('DOMContentLoaded', () => {

    const introCircle1 = document.querySelector('.intro__circle-1');
    const introStats1 = document.querySelector('.intro__stats-1');
    const introCircle2 = document.querySelector('.intro__circle-2');
    const introStats2 = document.querySelector('.intro__stats-2');
    const introCircle3 = document.querySelector('.intro__circle-3');
    const introStats3 = document.querySelector('.intro__stats-3');
    const introCircle4 = document.querySelector('.intro__circle-4');
    const introStats4 = document.querySelector('.intro__stats-4');
    const accordionItem = document.querySelectorAll('.accordion__item');
    const hamBtn = document.querySelector('.header__ham');
    const nav = document.querySelector('.header .nav');

 
    

    const introSlider = document.querySelector('.swiper-container');
    const startSlider = document.querySelector('.start-slider__container');
    const reviewsSlider = document.querySelector('.reviews-slider__container');

    let mainSlider = new Swiper(introSlider, {
        slidesPerView: 1,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.pag-1',
            clickable: true,
        },
    });

    let secondSlider = new Swiper(startSlider, {
        slidesPerView: 1,
        loop: true,
        speed: 600,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.pag-2',
            clickable: true,
        },
        navigation: {
            nextEl: '.arrow-next',
            prevEl: '.arrow-prev',
        },
    });

    let thirdSlider = new Swiper(reviewsSlider, {
        slidesPerView: 'auto',
        spaceBetween: 40,
        loop: true,
        centeredSlides: true,
        
        pagination: {
            el: '.pag-3',
            clickable: true,
        },
    });

    introCircle1.addEventListener('click', () => {
        introStats1.classList.toggle('active');
    });
    introCircle2.addEventListener('click', () => {
        introStats2.classList.toggle('active');
    });
    introCircle3.addEventListener('click', () => {
        introStats3.classList.toggle('active');
    });
    introCircle4.addEventListener('click', () => {
        introStats4.classList.toggle('active');
    });



    accordionItem.forEach(item => {
        const questions = item.querySelector('.accordion__question');
        const answers = item.querySelector('.accordion__anwser');
        const anwserText = item.querySelector('.accordion__question-text');
        const anwserArrow = item.querySelector('.accordion__arrow');
   
        
        questions.addEventListener('click', function() {
            answers.classList.toggle('show');
            anwserText.classList.toggle('active');
            anwserArrow.classList.toggle('active');
        });
    });


    hamBtn.addEventListener('click', () => {
        hamBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });


});

