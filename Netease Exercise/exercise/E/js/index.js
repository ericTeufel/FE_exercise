var cookie_status = getCookie();
var close_notice = document.getElementById('close');
var notice = document.getElementById('disappear');
var follow = document.getElementById('follow');
var login = document.getElementById('login');

// cookie中检测是否显示提示条
if (cookie_status.notice_static == undefined) {
    close_notice.addEventListener('click', function(event) {
        setCookie('notice_static', 'off');
        notice.classList.add('off');
    });
} else if (cookie_status.notice_static === "off") {
    notice.classList.add('off');
}


// 检测cookie中follow状态
if (cookie_status.followSuc === 'follow') {
    follow.style.backgroundColor = '#ccc';
    follow.innerText = '已关注';
    follow.setAttribute('disabled', '');
}


// 关闭login页面
document.getElementById('login_close').addEventListener('click', function(event) {
    document.getElementById('login').className += ' off';
});


(function() {
    // 点击关注判断是否登录 弹出登录or设置关注
    follow.addEventListener('click', function(event) {
        if (cookie_status.loginSuc == undefined) {
            login.classList.remove('off');
        } else if (cookie_status.loginSuc == "true") {
            alert('1');
            ajax({
                url: "http://study.163.com/webDev/attention.htm", //请求地址
                type: "get", //请求方式
                data: {}, //请求参数
                success: function(res, xml) {
                    if (res == 1) {
                        setCookie('followSuc', 'follow')
                        console.log(res);
                    } else if (res == 0) {
                        console.log(res);
                    }
                },
                fail: function(status) {
                    console.log('sonething was wrong: ' + status);
                }
            });
            setCookie('followSuc', 'follow');
        }
    });


    var uName = document.getElementById('name-err');
    var uPwd = document.getElementById('pwd-err');
    var input_name = document.getElementById('userName');
    var input_pwd = document.getElementById('password');

    input_name.addEventListener(
        'invalid',
        function(event) {
            var target = event.target;
            if (target.validity.valueMissing) {
                event.preventDefault();
                uName.innerText = '请输入用户名';
            }
        });

    input_pwd.addEventListener(
        'invalid',
        function(event) {
            var target = event.target;
            if (target.validity.valueMissing) {
                event.preventDefault();
                uPwd.innerText = '请输入密码';
            }
        });
})();


var uName = document.getElementById('name-err');
// // 绑定登录事件
var form = document.forms.loginForm;
var uPwd = document.getElementById('pwd-err');
var logBtn = document.getElementById('logBtn');

form.addEventListener('submit', function(event) {
_login();
});
// });


// 登录
function _login() {
    ajax({
        url: "http://study.163.com/webDev/login.htm", //请求地址
        type: "get", //请求方式
        data: {
            userName: "95b9941b277caf1c77ee35fee66fc5f6",
            password: "a972aec008fd064f00ae77c3a6472cc2"
        }, //请求参数
        // dataType: "json",
        success: function(res, xml) {
            console.log(res);

        },
        fail: function(status) {
            console.log('someThing was wrong: ' + status);
        }

    });
}





// 获取课程
(function() {
getClass(2, 20, 10);
})();

//获取hotClass
(function() {

})();

















var page = document.getElementById('pg');
page.addEventListener('click', function(event) {

    getClass(1,20,10);
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

//获取课程 page当前页数 size每页显示个数 type类型 10、20
function getClass(page, size, type) {
    ajax({
        url: "http://study.163.com/webDev/couresByCategory.htm",
        type: "get",
        data: { pageNo: page, psize: size, type: type },
        success: function(res, xml) {
            var resp = JSON.parse(res);

            // 生成课程
            var course = document.getElementById('course');
            course.innerHTML = '';
            for (var i = 0; i < size; i++) {
                var diva = document.createElement('div');
                diva.innerHTML = '  <i class="img"><img src="'+resp.list[i].middlePhotoUrl+'"></i>\
                    <h3>' + resp.list[i].name + '</h3>\
                    <span>' + resp.list[i].provider + '</span>\
                    <div class="fans"><i></i><span>' + resp.list[i].learnerCount + '</span></div>\
                    <div class="price">￥' + resp.list[i].price + '</div>';
                course.appendChild(diva);
                diva.className = 'cell';
            }

        },
        fail: function(status) {
            console.log('someThing was wrong: ' + status);
        }

    });
}

// // 导航关注
// // getNotice();
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



// 仿jQuery调用 userName: "95b9941b277caf1c77ee35fee66fc5f6", password: "a972aec008fd064f00ae77c3a6472cc2"
// var a = "95b9941b277caf1c77ee35fee66fc5f6";
// var b = "a972aec008fd064f00ae77c3a6472cc2";
// console.log(a);
// ajax({
//     url: "http://study.163.com/webDev/login.htm", //请求地址
//     type: "get", //请求方式
//     data: {
//         userName: a,
//         password: b
//     }, //请求参数
//     success: function(res, xml) {
//         console.log(res);
//     },
//     fail: function(status) {
//         console.log(status);
//     }
// });
