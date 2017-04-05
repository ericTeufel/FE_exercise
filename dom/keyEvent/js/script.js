var data=['1','2','3','4','5','6','7','8'],
    timer = null,
    flag=0;
window.onload=function(){
  var play = document.getElementById('play'),
      stop = document.getElementById('stop');
      //开始抽奖
      play.onclick=playFun;
      stop.onclick=stopFun;
      //键盘事件
       document.onkeyup=function(event){
          event = event ||window.event;
          console.log(event.keyCode);
          if (event.keyCode == 32) {
              if (flag==0) {
                playFun();
                flag = 1;
              } else {
                stopFun();
                flag=0;
              }
          }
       }
}
function playFun(){
  var title = document.getElementById('title'),
      play = document.getElementById('play');
  clearInterval(timer);
  timer = setInterval(function(){//每隔50ms执行一次脚本
    var random = Math.floor(Math.random()*data.length);//随机数*数组长度再取整 得到数组的随机下标
    title.innerHTML=data[random];
  },50);
  play.style.background = "#999";
}
function stopFun(){
  clearInterval(timer);
  var play = document.getElementById('play');
  play.style.background = "#036";
}