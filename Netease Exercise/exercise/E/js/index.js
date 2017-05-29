window.onload = function() {
    var cookie_status = getCookie();


    (function() {
        // 是否存在notice为off的cookie 已存在则不显示 不存在则添加监听事件
        var close_notice = document.getElementById('close');
        var notice = document.getElementById('disappear');

        if (cookie_status.notice_status == undefined) {
            close_notice.addEventListener('click', function(event) {
                setCookie('notice_status', 'off');
                notice.className += ' off';
            });
        } else if (cookie_status.notice_status === "off") {
            notice.className += ' off';
        }

        // 关闭login页面
        document.getElementById('login_close').addEventListener('click', function(event) {
            document.getElementById('login').className += ' off';
        });

        // 点击关注判断是否登录 弹出登录or设置关注
        var follow = document.getElementById('follow');
        var login = document.getElementById('login');
        follow.addEventListener('click', function(event) {
            if (cookie_status.loginSuc == undefined) {
                login.className = 'login';
                // 仿jQuery调用 userName: "95b9941b277caf1c77ee35fee66fc5f6", password: "a972aec008fd064f00ae77c3a6472cc2"
                ajax({
                    url: "http://study.163.com/webDev/login.htm", //请求地址
                    type: "get", //请求方式
                    data: {
                        userName: "95b9941b277caf1c77ee35fee66fc5f6",
                        password: "a972aec008fd064f00ae77c3a6472cc2"
                    }, //请求参数
                    success: function(res, xml) {
                        console.log(res);
                    },
                    fail: function(status) {
                        console.log(status);
                    }
                });

            }
        });

        // hotClass();
        function hotClass() {
            ajax({
                url: "http://study.163.com/webDev/hotcouresByCategory.htm", //请求地址
                type: "get", //请求方式
                data: {}, //请求参数
                success: function(res, xml) {
                    var resp = JSON.parse(res);
                    var id = [];
                    for (var i = 0, l = resp.length; i < l; i++) {
                        id.push(resp[i].id);
                    }
                    console.log(id[0]);
                    // return id;
                },
                fail: function(status) {
                    console.log('someThing was wrong: ' + status);
                }
            });
        }

        // getClass();
        function getClass() {
            ajax({
                url: "http://study.163.com/webDev/couresByCategory.htm", //请求地址
                type: "get", //请求方式
                data: { pageNo: "1", psize: "20", type: "20" }, //请求参数
                // dataType: "json",
                success: function(res, xml) {
                    var resp = JSON.parse(res);
                    // console.log(resp);
                    for (var i = 0, l = resp.length; i < l; i++) {
                        // console.log(resp[i]);
                    }
                },
                fail: function(status) {
                    console.log('someThing was wrong: ' + status);
                }

            });
        }

        // 导航关注
        // getNotice();
        function getNotice() {
            ajax({
                url: "http://study.163.com/webDev/attention.htm", //请求地址
                type: "get", //请求方式
                data: {}, //请求参数
                success: function(res, xml) {
                    var resp = JSON.parse(res);
                    // console.log(resp);
                    return resp;
                },
                fail: function(status) {
                    console.log('someThing was wrong: ' + status);
                }
            });
        }


    })();







}
