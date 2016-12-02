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

$('.js-recharge').click(function () {
  $('#modal-recharge').modal()
})

$('.js-mark-balance').hover(function () {
  $('.js-mark-bubbles').toggleAttr('hidden')
})

$('.ui-table .js-detail').click(function () {
  $('#myModal').modal()
})

$('.js-modal-dismiss').click($.modal.close)
