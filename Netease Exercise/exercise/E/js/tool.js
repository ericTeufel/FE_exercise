// 添加cookie
function setCookie(name, value, expires, path, domain, secure) {
    var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expires) { cookie += '; expires=' + expires.toGMTString(0); }
    if (path) { cookie += '; path=' + path; }
    if (domain) { cookie += '; domain=' + domain; }
    if (secure) { cookie += '; secure=' + secure; }
    document.cookie = cookie;
}
// 获取 cookie
function getCookie() {
    var cookie = {};
    var all = document.cookie;
    if (all === '') {
        return cookie;
    }
    var list = all.split(';');
    for (var i = 0, l = list.length; i < l; i++) {
        var item = list[i];
        var p = item.indexOf('=');
        var name = item.substring(0, p);
        name = decodeURIComponent(name);
        var value = item.substring(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;
    }
    return cookie;
}


// ajax仿JQuery封装
function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = formatParams(options.data);

    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else { //IE6及其以下版本浏览器
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    //接收 - 第三步
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    }

    //连接 和 发送 - 第二步
    if (options.type == "GET") {
        xhr.open("GET", options.url + "?" + params, true);
        xhr.send(null);
    } else if (options.type == "POST") {
        xhr.open("POST", options.url, true);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}
//格式化参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace(".", ""));
    return arr.join("&");
}



// ajax({
//         url: "./TestXHR.aspx",              //请求地址
//         type: "POST",                       //请求方式
//         data: { name: "super", age: 20 },        //请求参数
//         dataType: "json",
//         success: function (response, xml) {
//             // 此处放成功后执行的代码
//           },
//           fail: function (status) {
//             // 此处放失败后执行的代码
//           }
//         });
