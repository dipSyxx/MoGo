$(function() {

// перемена хедер з id=header
  var header = $("#header"),
  introH = $("#intro").innerHeight(),//перемена висоти нашого блока інтро
  scrollOffset = $(window).scrollTop();//початкове значеня скрола

// (HEDER FIXED---------------------------------)
// зразу при загрузкі сайта провіряємо скрол і відправляєм текуще значення в функцію
// function checkScroll(scrollOffset) для подальших дій
  checkScroll(scrollOffset);

// слідкування за висотою скрола-----
$(window).on("scroll", function () {
  scrollOffset = $(this).scrollTop();
  // слідкування за висотою скрола----

// перевірка текущого положення
  checkScroll(scrollOffset);

});

function checkScroll(scrollOffset) {
  // якщо scrollOffset більший ніж висота блока інтро(introH) то видаєм клас fixed
  if(scrollOffset > introH) {
    header.addClass("fixed");
  } else {
    header.removeClass("fixed");
  }
}
// (HEDER FIXED---------------------------------)



// (SMOOTH SCROLL-------------------------------)

// відстежуєм атрибут data-scroll
// при натискані на атрибут data-scroll буде відбуватися якась подія
$("[data-scroll]").on("click",function(event) {
  event.preventDefault(); //забирає нормальну функцію у силки

// data('scroll'); витаскуєм значення data scroll
  var $this = $(this),
  blockID = $this.data('scroll'),
  blockOffset = $(blockID).offset().top;
  //отримуєм позицію цього елемента при натискані від верха сторінки (offset().top;)
  $("nav, a").removeClass("active");//забираєм у всіх елементів клас active
  $this.addClass("active"); //і додаєм клас active тільки при натискані на елемент

// плавна анімація переходу на блок на чкий натиснули
  $("html,body").animate ({
    scrollTop: blockOffset
  }, 500);// значеня 500 робить більшу плавність або час за яку проскролиться на блок

});
// (SMOOTH SCROLL-------------------------------)


//(MENU NAV TOGGLE------------------------------)
// вибираєм селектор nav__toggle
//відсклідковуєм клік по бургеру
$("#nav__toggle").on("click", function(event) {
  event.preventDefault(); //забирає нормальну функцію у button

$(this).toggleClass("active");//для цього же елемента nav__toggle додаєм клас active
// і при натискані на бургер буде анімація хрестика при повторному нажаті буде забиратись клас active

$("#nav").toggleClass("active");//додає при натискані на кнопку клас active
// так як в нас стоїть toggleClass то при повторному нажаті менюшка буде закриватись
});

//(MENU NAV TOGGLE------------------------------)



// (COLLAPSE-----------accordion-------------------------)
// нажимаєм на data-collapse получаєм його blockID і виконується функція $(blockID).slideToggle();
$("[data-collapse]").on("click", function (event) {
    event.preventDefault(); //забирає нормальну функцію у button

    var $this = $(this),
    blockID = $this.data('collapse');

    $(this).toggleClass("active");
    //$(blockID).slideToggle();//slideToggle плавне відкриття і закриття елементів
});


// (COLLAPSE------------------------------------)

// (SLIDER----------------REWIEWS----------------------)

$("[data-slider]").slick({
  infinite: true,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1
});

// (SLIDER----------------REWIEWS----------------------)


});
