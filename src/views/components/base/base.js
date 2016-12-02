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

function drawTable (data, page, pagesize, type) {
  var tbody = $('#js-job-table tbody')
  var dataLength = data.length
  var last = (dataLength % pagesize)
  var pageCount = parseInt((dataLength / pagesize) + 1)
  var currentPageNum = $('#page-id-store').val()
  var pagenatorInit = $('#pagenator-init').val()
  if (type === 'init') {
    initPagenator(1, pageCount)
  }

  tbody.empty()
  if ((dataLength / pagesize) < 1) {
    dataC = data
  } else {
    dataC = data.slice(pagesize * (page - 1), pagesize * page)
  }
  for (var index in dataC) {
    var html = job_table_item.render(dataC[ index ])
    tbody.append(html)
  }
}

//    初始化表格
function initTable (page, pagesize, type) {
  var page = page || ''
  var pagesize = pagesize || ''
  var data = function () {
    var d = {}
    d.title = $('#form-title').val()
    d.jobtype = $('#form-jobtype').val()
    d.calculateway = $('#form-calculateway').val()
    d.ishiring = $('#form-ishiring').val()
    d.beginCreateDate = $('#start-time').val()
    d.endCreateDate = $('#end-time').val()
    return d
  }
  $.ajax({
    'url': '/gxb-e/a/gxb/project/joblist',
    'type': 'POST',
    'dataType': 'json',
    'data': data(),
    success: function (data) {
      var items = data.data
      drawTable(items, page, pagesize, type)
    }
  })
}

function initPagenator (currentPage, pageCount) {
  $('#page-index').jqPaginator({
    totalPages: pageCount,
    visiblePages: 10,
    currentPage: currentPage,
    activeClass: 'current',
    first: '<li data-page-id=\'1\'  class="nav-first-page">第一页</li>',
    prev: '<li class="nav-prev-page">上一页</li>',
    next: '<li class="nav-next-page">下一页</li>',
    last: '<li class="nav-last-page">最后页</li>',
    page: '<li class="first-page" data-index="1">{{page}}</li>',
    onPageChange: function (num, type) {
      initTable(num, 10)
    }
  })
}

Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[ k ]) : (("00" + o[ k ]).substr(("" + o[ k ]).length)));
  return fmt;
}
$.fn.datetimepicker.dates[ 'zh-CN' ] = {
  days: [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日" ],
  daysShort: [ "周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日" ],
  daysMin: [ "日", "一", "二", "三", "四", "五", "六", "日" ],
  months: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
  monthsShort: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
  today: "今天",
  suffix: [],
  meridiem: [ "上午", "下午" ],
  rtl: false // 从右向左书写的语言你可以使用 rtl: true 来设置
};
