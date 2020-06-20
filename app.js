$(function () {
    /*Fixed header*/
    let header = $("#header"); /*задаем переменную header выбираем её по id=header*/
    let intro = $("#intro");
    let introH; /*объявили переменную*/
    let scrollPos = $(window).scrollTop(); /*переменная со значением нашего скрола(обращаемся к окну и сколько от верха проскролили*/

    $(window).on("scroll load resize", function() { /*обращаемся к окну, при скроле/загрузке/мобильнойверсии страницы происходит функция*/
        let introH = intro.innerHeight(); /*перезаписываем значение переменной*/
        scrollPos = $(this).scrollTop(); /*обновляем значение скрола при скроле на текущую*/

        if (scrollPos > introH) { /*если позиция скрола больше чем высота нашего интро блока, то*/
            header.addClass("fixed"); /*добавляем класс fixed*/
        } else /*иначе*/{
            header.removeClass("fixed"); /*удаляем класс*/
        }
    });



    /*Smooth Scroll* плавный скрол*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId),offset().top;

        console.log(elementId);

    });
});