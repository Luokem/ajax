// get 方法
// $(function() {
//   $("#login_area").click(function() {
//
//     //创建一个ajax对象, 适合ie7以上
//     var xhr = new XMLHttpRequest();
//
//     // 调用open方法，　准备发送一次http请求
//     xhr.open("get","/login_area?name=lisi&password=123", true);
//
//     //接受服务器发送来数据
//     xhr.onreadystatechange = function() {
//         if(xhr.status >= 200 && xhr.status < 300) {
//           if (xhr.readyState === 4 ) {
//           console.log(xhr.response);
//           $("#form1").css("display", "none");
//           $("body").append("<div>恭喜你登录成功</div>")
//         }
//       }
//     }
//     //发送数据
//     xhr.send();
//   })
// })



//-------------------------------------------

//post　方法
  $(function() {

    $("#login_area").click(function() {
      var name = $("input[name=name]").val();
      var password = $("input[name=password]").val();

      var xhr = new XMLHttpRequest();

      xhr.open("post", "/login_area", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      xhr.onreadystatechange  = function() {
        if(xhr.readyState === 4) {
          if(xhr.status <= 200 && xhr.status < 300) {
            console.log(xhr.response);
            if(xhr.response === "ok"){
              window.location.href = "http://www.baidu.com";
            }
            else {
              $("body").append("<div>conglaguation you error!</div>");
            }
          }
        }
      };

      var data ="name=" + name + "&password=" + password;
      xhr.send(data);
    })
  })
