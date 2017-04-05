
window.onload=function(){
  var box=document.getElementById('divselect'),
  title=box.getElementsByTagName('cite')[0],
  menu=box.getElementsByTagName('ul')[0],
  as=box.getElementsByTagName('a'),
  index=-1;

    // 点击三角时
    title.onclick=function(event){
      // 执行脚本
      event = event || window.event;
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble=true;
      }
      menu.style.display = 'block';
    }  
    document.onkeyup=function(event){
      event = event || window.event;
        console.log(event.keyCode);//up38down40enter13
        if (event.keyCode==38) {
          index--;
          if(index<0){
            index = as.length-1;
          }
          for (var i = 0,l=as.length; i < l; i++) {
            as[i].style.background = '#fff';
          }
          as[index].style.background = '#567';
        } else if(event.keyCode==40) {
          index++;
          if(index>=as.length){
            index = 0;
          }
          for (var i = 0,l=as.length; i < l; i++) {
            as[i].style.background = '#fff';
          }
          as[index].style.background = '#567';
        }else if( event.keyCode==13){
         for (var i = 0,l=as.length; i < l; i++) {
          as[i].style.background = '#fff';
        }
        menu.style.display = "none";
        title.innerHTML= as[index].innerHTML;   
      }
    }
   // 滑过滑过、离开、点击每个选项时
      // 执行脚本
      for (var i = 0,l=as.length; i < l; i++) {
        as[i].onmouseover=function(){
          for (var i = 0,l=as.length; i < l; i++) {
            as[i].style.background = '#fff';
          }
          this.style.background="#567";
        }
        as[i].onmouseout=function(){
          this.style.background="#fff";
        }

        as[i].onclick=function(e){
          e= event || window.event;
          if (e.stopPropagation) {
            e.stopPropagation();
          } else {
            e.cancelBubble=true;
          }
          menu.style.display="none";
          title.innerHTML= this.innerHTML;      
        }
      }
      function choose(){

      }

   // 点击页面空白处时
       // 执行脚本
       document.onclick=function(){
        menu.style.display='none';
      }
    }

    var request;
    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();//ie7+ firefox chrome...
    } else {
      request = new ActiveObject("Microsoft.XMLHTTP");//ie5 ie6
    }
/*
点击菜单中的向下三角展开菜单

 

提示:
     1、点击三角时需阻止事件冒泡

二、 展开菜单之后，在document对象上绑定keyup事件,按下向下方向键，选中下一个选项，
按下向上方向键，选中上一个选项，按下回车键菜单收起，显示选中项

 

提示:
1、 声明一个全局的index变量初值为-1
2、 按下向下方向键时index递增，当递增至大于等于菜单选项的总数时恢复为0
3、 按下向上方向键时判断index，如若小于等于0则设为菜单选项的总数，之后递减index
4、 根据index值将对应的选项设为当前（灰色背景）
5、 按下回车键时将对应选中的选项设为菜单标题，且将所有选项设为无背景，index恢复为-1，
菜单收起
注意：没有任何选项被选中时，按下回车键不做任何操作

 

三、鼠标滑过每个选项时高亮显示，离开时去掉背景，点击高亮选项时菜单标题改变

 

提示:
   1.遍历所有a标签，绑定鼠标点击的事件
注意：要考虑到浏览器兼容，使用innerHTML，不要使用innerText

 

四、点击页面空白处收起菜单

 

提示:
   1.绑定在document对象上

   源码中有三个BUG：
   1、点击过一次cite标签后按键事件不管ul标签是否为显示状态都可以被触发；
   2、按键事件与鼠标移入移出事件同时触发会造成多个a标签背景色同时改变；
   3、按下回车键只能正确选定按键选中的a标签。                                             
  解决方案：1、将document.onkeyup事件移出title.onclick事件，
  并在触发时对ul显示状态进行判断；2、在鼠标移入事件中加入清空所有a标签背景色的方法；
  3、在鼠标移入时改变index值
   */