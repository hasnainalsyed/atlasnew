
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
  if (window.innerWidth < 768) {
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

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

