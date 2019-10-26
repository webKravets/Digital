$(function () {


    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        }
    });


    // JQuery IU Аккордеон
    var icons = {
        header: "iconClosed", // custom icon class
        activeHeader: "iconOpen" // custom icon class
    };
    $("#accordion").accordion({
        icons: icons
    });


    //   Плавный скролл
    $(".go_to").click(function (e) {
        // Убирает # в адресной строке
        e.preventDefault();
        // плавное перемещение страницы к нужному блоку
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({
            scrollTop: destination
        }, 700);
    });
});