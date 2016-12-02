/**
 * Created by nailuoGG on 16/5/16.
 */
$.fn.extend({
  toggleAttr: function (attr, turnOn) {
    var justToggle = (turnOn === undefined)
    return this.each(function () {
      if ((justToggle && !$(this).is('[' + attr + ']')) ||
        (!justToggle && turnOn)) {
        $(this).attr(attr, attr)
      } else {
        $(this).removeAttr(attr)
      }
    })
  }
})

$('.menus > li').hover(function () {
  $(this).children('ul').toggleAttr('hidden')
})

initPagenator(2, 10);
