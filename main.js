$(function () {
    $('#enjoy').hover(function () {
        $('.enjoy').css('color','#5352ed');
    },function () {
        $('.enjoy').css('color','#212529');
    })

    var a= "NOW";
    var b = "EXPLORE";

    setInterval(function () {

        if($('.about-us button').text()===a){
            $('.about-us button').text(b);
        }else
            $('.about-us button').text(a);

    },1000);

})

