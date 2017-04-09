$("#laptop_button").click(function() {
    $('html,body').animate({
        scrollTop: $(".block1").offset().top},
        'slow');
});

$("#brain_button").click(function() {
    $('html,body').animate({
        scrollTop: $(".block2").offset().top},
        'slow');
});
