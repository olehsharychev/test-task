$('.first-section__order-btn').click(function () {
    var top = $('.fourth-section__anchor').offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 821,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

let animationEndFlag = 1;
function animateBoots(time){
    let blackT = $('.boots-wrap__black-boot').css("top");
    let blackW = $('.boots-wrap__black-boot').css("width");
    let redT = $('.boots-wrap__red-boot').css("top");
    let redW = $('.boots-wrap__red-boot').css("width");
    let blackZ = $('.boots-wrap__black-boot').css("z-index");
    let redZ = $('.boots-wrap__red-boot').css("z-index");
    $('.boots-wrap__black-boot').animate({
        width: redW,
        top: redT,
    }, time);
    $('.boots-wrap__black-boot').css('z-index', redZ);
    $('.boots-wrap__red-boot').css('z-index', blackZ);
    $('.boots-wrap__red-boot').animate({
        width: blackW,
        top: blackT,
        }, time, function () {
            animationEndFlag = 1;
    });
}

function toogleBoots(time){
    let blackOp = $(".boot-description__boot-img--black").css('opacity');
    if(blackOp == 1) {
        $(".boot-description__boot-img--black").animate({
            right: '-600px',
            opacity: 0
        }, time);
        $(".boot-description__boot-img--red").animate({
            right: '-220px',
            opacity: 1
        }, time);
    }
    else {
        $(".boot-description__boot-img--black").animate({
            right: '-350px',
            opacity: 1
        }, time);
        $(".boot-description__boot-img--red").animate({
            right: '-470px',
            opacity: 0
        }, time);
    }
}

function toogleBootTitle(){
    let title = $('.boot-description__title').html();
    if (title == "SOFT 8 Black (7600)"){
        $('.boot-description__title').html("SOFT 8 Red (7601)");
    }
    else {
        $('.boot-description__title').html("SOFT 8 Black (7600)");
    }
}

function toogleBootsPhoto(){
    let galleryItemSrc = $('.boot-description__gallery-item img').attr('src');
    if (galleryItemSrc == 'app/img/photo/1.jpg') {
        let i = 5;
        $('.boot-description__gallery-item').each(function (item) {
            $(this).find('img').attr('src', `app/img/photo/${i}.jpg`);
            i++;
        });
    }
    else {
        let i = 1;
        $('.boot-description__gallery-item').each(function (item) {
            $(this).find('img').attr('src', `app/img/photo/${i}.jpg`);
            i++;
        });
    }
}

$(window).on('resize', function () {
    $('.boots-wrap__black-boot').attr('style', 'none');
    $('.boots-wrap__red-boot').attr('style', 'none');
});

$('.boots-wrap__arrow-right').click(function () {
    if (animationEndFlag) {
        animationEndFlag = 0;
        if ($('.boots-wrap__black-boot').width() > $('.boots-wrap__red-boot').width()) {
            $('.boots-wrap__black-boot').css("z-index", 4);
            $('.boots-wrap__red-boot').css("z-index", 3);
        }
        else {
            $('.boots-wrap__black-boot').css("z-index", 3);
            $('.boots-wrap__red-boot').css("z-index", 4);
        }
        animateBoots(600);
        toogleBoots(600);
        toogleBootTitle();
        toogleBootsPhoto();
    }
});

$('.boots-wrap__arrow-left').click(function () {
    if (animationEndFlag) {
        animationEndFlag = 0;
        if ($('.boots-wrap__black-boot').width() > $('.boots-wrap__red-boot').width()) {
            $('.boots-wrap__black-boot').css("z-index", 3);
            $('.boots-wrap__red-boot').css("z-index", 4);
        }
        else {
            $('.boots-wrap__black-boot').css("z-index", 4);
            $('.boots-wrap__red-boot').css("z-index", 3);
        }
        animateBoots(600);
        toogleBoots(600);
        toogleBootTitle();
        toogleBootsPhoto();
    }
});

$('.boot-description__gallery-item').click(function () {
    $('.modal').removeClass('hide');
    $('.modal').addClass('show');
    let photoPath = $(this).find('img').attr('src');
    $('.modal__boot-photo').attr('src', photoPath);
});

$('.modal__button--close').click(function () {
    $('.modal').removeClass('show');
    $('.modal').addClass('hide');
});

$('.modal__button--prev').click(function () {
    let photoPath = $('.modal__boot-photo').attr('src');
    let photoNum = photoPath[photoPath.length - 5];
    if(photoNum > 0 && photoNum < 5){
        photoNum--;
        if(photoNum == 0){
            photoNum = 4;
        }
    }
    else {
        photoNum--;
        if(photoNum == 4){
            photoNum = 8;
        }
    }
    $('.modal__boot-photo').attr('src', `app/img/photo/${photoNum}.jpg`);
});

$('.modal__button--next').click(function () {
    let photoPath = $('.modal__boot-photo').attr('src');
    let photoNum = photoPath[photoPath.length - 5];
    if(photoNum > 0 && photoNum < 5){
        photoNum++;
        if(photoNum == 5){
            photoNum = 1;
        }
    }
    else {
        photoNum++;
        if(photoNum == 8){
            photoNum = 5;
        }
    }
    $('.modal__boot-photo').attr('src', `app/img/photo/${photoNum}.jpg`);
});

$('.boot-description__take-btn').click(function () {
    $('.boot-description__parameters-wrap').css('display', 'none');
    $('.boot-description__gallery-wrap').css('display', 'none');
    $('.boot-description__forms').css('display', 'block');
    $('.boot-description__back').css('display', 'block');
});

$('.boot-description__back').click(function () {
    $('.boot-description__forms').css('display', 'none');
    $('.boot-description__back').css('display', 'none');
    $('.boot-description__parameters-wrap').css('display', 'flex');
    $('.boot-description__gallery-wrap').css('display', 'flex');
});

