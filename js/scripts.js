
function isElementVisible($elementToBeChecked) {
  var TopView = $(window).scrollTop();
  var BotView = TopView + $(window).height();
  var TopElement = $elementToBeChecked.offset().top;
  var BotElement = TopElement + $elementToBeChecked.height();
  return ((BotElement <= BotView) && (TopElement >= TopView));
}

$(window).scroll(function () {
  $(".count").each(function () {
    isOnView = isElementVisible($(this));
    if (isOnView && !$(this).hasClass('Starting')) {
      $(this).addClass('Starting');
      $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });
});