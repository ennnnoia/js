//аккордеон
const faqs = document.querySelectorAll(".que");

faqs.forEach(que => {
    que.addEventListener("click", () => {
        que.classList.toggle("active");
    })
})


//слайдер2
// Важно, чтобы было постороено дом дерево и ничего не сломалось
window.addEventListener('DOMContentLoaded', function () {
    'use strict';
 
    // Текущий слайд
    let slideIndex = 1,
        slides = document.querySelectorAll('.blok2'),
        prev = document.querySelector('.left-arrow'),
        next = document.querySelector('.right-arrow'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
        
        showSlides(slideIndex);
    // Принимала аргумент номер слайда, который нужно показать
    function showSlides (n) {
        // дополнительно делаем проверку чтобы индекс не вышел за пределы
        if (n > slides.length) {
            // Возвращаемся к первому слайду
            slideIndex = 1;
        }
        if (n < 1) {
            // Возвращаемся к последнему слайду
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
        
    }
    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });
    //Создаем событие клика на родителя, используя делегирование событий
    dotsWrap.addEventListener('click', function(event) {
        // перебираем все dot и узнаем на какую именно кликнули
        for (let i = 0; i < dots.length + 1; i++) {
            // проверяем элемент на соответствие и узнаем номер точки
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
});



// Модальное окно
const modal = document.getElementById("modal");
const btn = document.getElementById("modal-btn");
const closeBtn = document.querySelector(".modal-close");

btn.addEventListener("click", function () {
    modal.classList.add("modal_active");

    closeBtn.addEventListener("click", closeModal);

    function closeModal() {
        modal.classList.remove("modal_active");

        closeBtn.removeEventListener("click", closeModal);

        modal.removeEventListener("click", hideModal);
    }

    modal.addEventListener("click", hideModal);

    //Закрытие при клике вне зоны модального окна
    function hideModal(event) {
        if (event.target === modal) {
            closeModal();
        }
    }
});






