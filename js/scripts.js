
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

jQuery(function () {
  // Slick JS Start
  if(window.innerWidth < 768) {
    jQuery('.boxes').slick({
      infinite: true,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    })
  }
  // Slick JS End

  let launchApp = document.getElementById('launchApp');
  // ✅ Change button text on click
  launchApp.addEventListener('click', function handleClick() {
    launchApp.innerText = 'Comming Soon';
  });

});
