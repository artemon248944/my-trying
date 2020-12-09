$(function() {
    $('.button__enter').click(function() {
        $('.modal-enter, .modal-wrapper').show()
        $('.top-link').hide()
    });
    $('.modal-wrapper').click(function() {
        $('.modal-enter, .modal-wrapper').hide()
        $('.top-link').show()
    });
});
$(function() {
    $('.main__button-call').click(function() {
        $('.modal-call, .modal-wrapper').show()
        $('.top-link').hide()

    });
    $('.modal-wrapper').click(function() {
        $('.modal-call, .modal-wrapper').hide()
        $('.top-link').show()
    });
});
$(function() {
    $('.button-book').click(function() {
        $('.modal-call, .modal-wrapper').show()
        $('.top-link').hide()
    });
    $('.modal-wrapper').click(function() {
        $('.modal-call, .modal-wrapper').hide()
        $('.top-link').show()
    });
});

$(document).ready(function() {
    $('.bxslider').bxSlider();
});


$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $('.top-link').addClass('top-link-show');
    } else {
        $('.top-link').removeClass('top-link-show');
    }
});