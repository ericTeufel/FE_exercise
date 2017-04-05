window.onload=function(){
    var go = document.getElementById('go'),
    box = document.getElementById('box');

    eventUtil.addHandler(box,'click',function(){
        alert('box');
    });
    eventUtil.addHandler(go,'click',function(e){
        e = eventUtil.getEvent(e);
        alert(eventUtil.getElement(e).nodeName);
        eventUtil.preventDefault(e);
        eventUtil.stopPropagation(e);
    });

}