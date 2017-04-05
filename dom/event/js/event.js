var eventUtil={//跨浏览器
               //添加句柄
               addHandler:function(element,type,handler){//能力检测
                    if (element.addEventListener){//DOM2级. 事件监听
                    	element.addEventListener(type,handler,false);
                    }else if(element.attachEvent) {//ie
                    	element.attachEvent('on'+type,handler);
                    }else{                                   //DOM0级
                    	element['on'+type] = handler;
                    }
               },//删除句柄
               removeHandler:function(element,type,handler){//能力检测
                    if (element.removeEventListener){//DOM2级
                    	element.removeEventListener(type,handler,false);
                    }else if(element.detachEvent) {//ie
                    	element.detachEvent('on'+type,handler);
                    }else{                                   //DOM0级
                    	element['on'+type] = null;
                    }
               },//获取事件对象
               getEvent:function(event){
                    return event?event:window.event;
               },//获取类型
               getType:function(event){
                    return event.type;
               },
               getElement(event){
                    return event.target || event.srcElement;
               },//阻止事件默认行为
               preventDefault:function(event){
                    if (event.preventDefault) {
                         event.preventDefault();
                    } else {
                         event.returnValue = false;
                    }
               },//阻止事件冒泡
               stopPropagation:function(event){
                    if (event.stopPropagation) {//以属性形式判断
                         event.stopPropagation();//以方法形式执行
                    } else {
                         event.cancelBubble = true;
                    }
               }

          }