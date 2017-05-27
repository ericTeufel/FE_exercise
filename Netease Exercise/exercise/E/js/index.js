window.onload = function() {
    var cookie_status = getCookie();

    // 是否存在notice为off的cookie 已存在则不显示 不存在则添加监听事件
    (function() {
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
    })();


    (function(){

    })();

}
