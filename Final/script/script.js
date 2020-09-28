
$('.country-accordion li').on('click', function () {
    $('.country-accordion li').each((index, element) => {
        $(element).removeClass('active');
    });
    $(this).addClass('active');

    $('.accordion-body ').each((index, element) => {
        $(element).fadeOut();
    })

    $('.accordion-body').eq($(this).index()).fadeIn();

})