//АККОРДЕОН
const faqs = document.querySelectorAll(".que");

faqs.forEach(que => {
    que.addEventListener("click", () => {
        que.classList.toggle("active");
    })
})


//СЛАЙДЕР
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



//МОДАЛЬНОЕ ОКНО
const modal = document.getElementById("modal");
const btn = document.getElementById("modal-btn");
const closeBtn = document.querySelector(".modal-close");
const btn1 = document.querySelector("#modall-btn");

btn.addEventListener("click", function () {
    modal.classList.add("modal_active");

    closeBtn.addEventListener("click", closeModal);

    btn1.addEventListener("click", closeModal);


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


//модальное окно закрыть
const modall = document.getElementById("modal-next");
const btnn = document.getElementById("modall-btn");
const closeBtnn = document.querySelector(".modal-closee");
const closeBtnnn = document.querySelector("#closeee");

btnn.addEventListener("click", function () {
    modall.classList.add("modal-next_active");

    closeBtnn.addEventListener("click", closeModall);

    closeBtnnn.addEventListener("click", closeModall);


    function closeModall() {
        modall.classList.remove("modal-next_active");

        closeBtnn.removeEventListener("click", closeModall);

        closeBtnnn.addEventListener("click", closeModall);

        modall.removeEventListener("click", hideModall);
    }

    modall.addEventListener("click", hideModall);

    //Закрытие при клике вне зоны модального окна
    function hideModall(event) {
        if (event.target === modall) {
            closeModall();
        }
    }
});


//модальное окно фильтрация
const modalc = document.getElementById("modal-cat");
const btnnn = document.getElementById("modalo-btn");
const closeBtNO = document.querySelector(".modal-closoo");

btnnn.addEventListener("click", function () {
    modalc.classList.add("modal-cat_active");

    closeBtNO.addEventListener("click", closeModalo);

    function closeModalo() {
        modalc.classList.remove("modal-cat_active");

        closeBtNO.removeEventListener("click", closeModalo);

        modalc.removeEventListener("click", hideModalo);
    }

    modalc.addEventListener("click", hideModalo);

    //Закрытие при клике вне зоны модального окна
    function hideModalo(event) {
        if (event.target === modalc) {
            closeModalo();
        }
    }
});



//ФИЛЬТРАЦИЯ
//Получаем табы (переключатели), родительский элемент табов, и контент табов
let tab = document.querySelectorAll(".info-header-tab"),
info = document.querySelector(".info-header"),
tabContect = document.querySelectorAll(".info-tabcontent");
//Функция которая скрывает контентные табы
function hideTabContect(a) {
for (let i = a; i < tabContect.length; i++) {
    tabContect[i].classList.remove("show");
    tabContect[i].classList.add("hide");
}
}
//Скрываются все кроме 1 элемента
hideTabContect(1);
//Функция показа контентных табов
function ShowTabContect(b) {
if (tabContect[b].classList.contains("hide")) {
    tabContect[b].classList.remove("hide");
    tabContect[b].classList.add("show");
}
}

//Создаем событие клика на родителя, используя делегирование событий
info.addEventListener("click", function (event) {
let target = event.target;

if (target && target.classList.contains("info-header-tab")) {
    // Связь элементов при совпадении target
    for (let i = 0; i < tab.length; i++) {
        //если совпадают
        if (target == tab[i]) {
            //Скрываем все табы
            hideTabContect(0);
            // удаляем класс активности таба
            tab.forEach((item) => {
                item.classList.remove("active");
            });
            //элементу target(на который кликнули) добавляем активный класс
            target.classList.add("active");

            //Совпадение по нумерации
            ShowTabContect(i);

            break;
        }
    }
}
});



//БУРГЕР-МЕНЮ





