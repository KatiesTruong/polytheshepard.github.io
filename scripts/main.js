// Allow links to work for anchors inside a div
$('.p-image').click(function() {
    window.location = $(this).find('a').attr('href');
    return true;
});
