var timeLimit = 60;
var timeLogin = timeLimit;
var timeForget = timeLimit;
var type = 0;
$(".tab_item").eq(0).click(function (a) {
  clearTabClass();
  type = 0;
  $(".tab_item").eq(0).addClass("tab_choose");
  $("#account").removeClass("hide");
  $("#telephone").addClass("hide");
  $("#forget").addClass("hide")
});
$(".tab_item").eq(1).click(function (a) {
  clearTabClass();
  type = 1;
  $(".tab_item").eq(1).addClass("tab_choose");
  $("#account").addClass("hide");
  $("#telephone").removeClass("hide");
  $("#forget").addClass("hide")
});
$(".tab_item").eq(2).click(function (a) {
  clearTabClass();
  type = 2;
  $(".tab_item").eq(2).addClass("tab_choose");
  $("#account").addClass("hide");
  $("#telephone").addClass("hide");
  $("#forget").removeClass("hide")
});
$("#login_code").click(function () {
  if (timeLogin < timeLimit) {
    return
  }
  var a = setInterval(function () {
    $("#login_code").text(timeLogin + "s");
    timeLogin--;
    if (timeLogin < 0) {
      clearInterval(a);
      $("#login_code").text("获取验证码");
      timeLogin = timeLimit
    }
  }, 1000)
});
$("#forget_code").click(function () {
  if (timeForget < timeLimit) {
    return
  }
  var a = setInterval(function () {
    $("#forget_code").text(timeForget + "s");
    timeForget--;
    if (timeForget < 0) {
      clearInterval(a);
      $("#forget_code").text("获取验证码");
      timeForget = timeLimit
    }
  }, 1000)
});

function clearTabClass() {
  for (var a = 0; a < document.getElementsByClassName("tab_item").length; a++) {
    document.getElementsByClassName("tab_item")[a].className = "tab_item"
  }
}

function loginUser() {
  var a, b, c;
  if (type === 0) {
    a = $(".account").eq(0).val();
    b = $(".password").eq(0).val();
    c = "";
    if (a === "" || b === "") {
      alert("请输入账号和密码");
      return
    }
  } else {
    if (type === 1) {
      a = $(".account").eq(1).val();
      b = "";
      c = $(".code").eq(0).val();
      if (c === "") {
        alert("请输入验证码");
        return
      }
      if (a === "") {
        alert("请输入账号");
        return
      }
    } else {
      if (type === 2) {
        a = $(".account").eq(2).val();
        b = $(".password").eq(1).val();
        c = $(".code").eq(1).val();
        if (c === "") {
          alert("请输入验证码");
          return
        }
        if (a === "" || b === "") {
          alert("请输入账号和密码");
          return
        }
      }
    }
  }
  window.location.href = "./toolbox.html"
};
