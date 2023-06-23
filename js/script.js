let animItems = document.querySelectorAll(".anim-items");
if (animItems.length > 0) {
    window.addEventListener("scroll", animScroll);

    function animScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const element = animItems[index];
            const animItemHeight = element.offsetHeight;
            const animItemOffset = offset(element).top;
            const animStart = 2;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if (
                pageYOffset > animItemOffset - animItemPoint &&
                pageYOffset < animItemOffset + animItemHeight
            ) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
}

const prev = document.getElementById("left-arrow"),
    next = document.getElementById("right-arrow"),
    slides = document.querySelectorAll(".slider");

let index = 0;

const activeSlide = (n) => {
    for (slide of slides) {
        slide.classList.remove("actives");
    }
    slides[n].classList.add("actives");
};

const prepareCurrentSlide = (ind) => {
    activeSlide(index);
};

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

const prevSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
};

setInterval(nextSlide, 2000);

const itemButtton = document.querySelector(".card-item-button"),
    itemButtonTwo = document.querySelector(".card-item-button-two"),
    text = document.querySelector(".car-check"),
    textTwo = document.querySelector(".cheks"),
    cardItem = document.querySelector(".it-active"),
    carTwo = document.querySelector(".it-active-two");

itemButtton.addEventListener("click", () => {
    text.classList.remove("check-active");
    text.classList.add("check-active");
    textTwo.classList.remove("check-active");
    cardItem.classList.add("card-active");
    carTwo.classList.remove("card-active");
});
itemButtonTwo.addEventListener("click", () => {
    text.classList.remove("check-active");
    textTwo.classList.add("check-active");
    cardItem.classList.remove("card-active");
    carTwo.classList.add("card-active");
});

const scrollToTopButton = document.getElementById("scrollToTop");

const scrollFunction = () => {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

window.addEventListener("scroll", scrollFunction);
const scrollToTop = () => {
    const distanceFromTop =
        document.documentElement.scrollTop || document.body.scrollTop;

    if (distanceFromTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, distanceFromTop - distanceFromTop / 10);
    }
};

scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
};

var Index = 1;
slider(Index);

function plusSlider(n) {
    slider((Index += n));
}

function currentSlider(n) {
    slider((Index = n));
}

function slider(n) {
    var i;
    var slide = document.getElementsByClassName("spec");
    var dots = document.getElementsByClassName("Photos-item");
    if (n > slide.length) {
        Index = 1;
    }
    if (n < 1) {
        Index = slide.length;
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("activeq", "");
    }
    slide[Index - 1].style.display = "flex";
    dots[Index - 1].className += " activeq";
}

function Burger(x) {
    if (x.classList.toggle("change")) openNav();
    else {
        closeNav();
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
let Buttons = document.querySelector(".button");

Buttons.addEventListener("click", () => {
    alert("Пдробности о наших комнях можно посмотреть на ютубе     \nhttps://www.youtube.com/watch?v=ctrHYSXYvhM \nТак же купить акаунт за:210руб.\nПри оформление заказа скидка 50%");
});

let tooltipElem;

document.onmouseover = function(event) {
    let target = event.target;

    // если у нас есть подсказка...
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    // ...создадим элемент для подсказки

    tooltipElem = document.createElement("div");
    tooltipElem.className = "tooltip";
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    // спозиционируем его сверху от аннотируемого элемента (top-center)
    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // не заезжать за левый край окна

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + "px";
    tooltipElem.style.top = top + "px";
};

document.onmouseout = function(e) {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
};

function Ftest(obj) {
    if (this.ST) return;
    var ov = obj.value;
    var ovrl = ov.replace(/\d*\.?\d*/, '').length;
    this.ST = true;
    if (ovrl > 0) {
        obj.value = obj.lang;
        Fshowerror(obj);
        return
    }
    obj.lang = obj.value;
    this.ST = null;
}

function Fshowerror(obj) {
    if (!this.OBJ) {
        this.OBJ = obj;
        obj.style.backgroundColor = 'pink';
        this.TIM = setTimeout(Fshowerror, 50)
    } else {
        this.OBJ.style.backgroundColor = '';
        clearTimeout(this.TIM);
        this.ST = null;
        Ftest(this.OBJ);
        this.OBJ = null
    }
}