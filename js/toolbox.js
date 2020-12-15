$(document).ready(function () {
  /*
  * 切换页面
  * */
  $(".ag-content-customer-ele").bind('click', function (e) {
    var navIndex = $(e.target).parent().index();
    var li = $('.ag-content-customer-ele-detail ul li')
    li.removeClass('current');
    li.eq(navIndex).addClass('current');
    $('.ag-content-customer-wrap').css('background-color', '#469acb');
    $('.ag-content-customer-ele').animate({'height': 0}, 500);
    $('.ag-content-customer-ele-detail').animate({'height': '575px'}, {
      duration: 500,
        complete: function () {
        $('.ag-content-customer-ele-detail ul li').eq(navIndex).click();
      }
    });
  });
  /*
  * 绑定鼠标移入和移出事件
  * */
  $('.ag-content-customer-ele-detail ul li').bind({
    'mouseover': function (e) {
      $(this).find('.image').css('display', 'none')
      $(this).find('.text').css('display', 'block')
    },
    'mouseout': function (e) {
      $(this).find('.image').css('display', 'block')
      $(this).find('.text').css('display', 'none')
    },
    'click': function () {
      // 隐藏其他，显示当前
      var li = $('.ag-content-customer-ele-detail ul li')
      li.find('.text').css('display', 'none')
      li.find('.image').css('display', 'block')
      $(this).find('.text').css('display', 'block')
      $(this).find('.image').css('display', 'none')
      li.bind({
        'mouseover': function (e) {
          $(this).find('.image').css('display', 'none')
          $(this).find('.text').css('display', 'block')
        },
        'mouseout': function (e) {
          $(this).find('.image').css('display', 'block')
          $(this).find('.text').css('display', 'none')
        }
      })
      $(this).unbind('mouseover')
      $(this).unbind('mouseout')
      $('.ag-content-customer-ele-detail').css('overflow', 'visible');
      var disIndex = $(this).index();
      var display = $('.ag-content-customer-ele-detail-display')
      display.hide();
      display.eq(disIndex).show();
    }
  })

  /*
  * 返回按钮
  * */
  $('.back').bind('click', function (e) {
    var detail = $('.ag-content-customer-ele-detail')
    $('.ag-content-customer-wrap').css('background-color', '#f1f1f1');
    detail.css('overflow', 'hidden');
    $('.ag-content-customer-ele').animate({'height': '9rem'}, 500);
    detail.animate({'height': 0}, 500);
    $('.ag-content-customer-ele-detail-display').hide();
  });

  // 电子税务局
  $('.toTax').bind('click', function () {
    window.location.href = "system.html?system=tax"
  })

  // 个人所得税
  $('.toPt').bind('click', function () {
    window.location.href = "system.html?system=pt"
  })

  // 开票
  $('.toKp').bind('click', function () {
    window.location.href = "system.html?system=kp"
  })

  // 认证
  $('.toCc').bind('click', function () {
    window.location.href = "system.html?system=cc"
  })

  // 社会保障
  $('.toShB').bind('click', function () {
    window.location.href = "system.html?system=shB"
  })

  // 建行 toCcb
  $('.toCcb').bind('click', function () {
    window.location.href = "system.html?system=ccb"
  })

  // 农行 toAbc
  $('.toAbc').bind('click', function () {
    window.location.href = "system.html?system=abc"
  })

  // 手工账 toSgz
  $('.toSgz').bind('click', function () {
    window.location.href = "system.html?system=sgz"
  })

  // 出纳 toCnSgz
  $('.toCnSgz').bind('click', function () {
    window.location.href = "system.html?system=cnSgz"
  })

  // 国家企业信用信息公示系统 toInfo
  $('.toInfo').bind('click', function () {
    window.location.href = "system.html?system=info"
  })
})


