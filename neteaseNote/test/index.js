// 名字空间
var app = {
    util: {}
};

app.util = {
    _storeKey: '_stickyNote',

    $: function(selector, node) {
        return (node || document).querySelector(selector);
    },

    formatTime: function(ms) {
        var d = new Date(ms);
        var pad = function(n){
            if (n.toString().length === 1) {
                n = '0' + n;
            }
            return n;
        }
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();

        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();

        return year + '-' + pad(month) + '-' + pad(date) + ' ' + pad(hour) + ':' + pad(minute) + ':' + pad(second);
    },


    get: function(id) {
        var notes = this.getAll();
        return notes[id] || {};
    },

    set: function(id,val) {
        var notes = this.getAll();
        if (notes[id]) {
            Object.assign(notes[id],val);
        }else {
            notes[id] = val;
        }
        localStorage[this._storeKey] = JSON.stringify(notes);
        console.log('saved note: id: ' + id + ' content: ' + JSON.stringify(notes[id]));
    },

    remove: function() {

    },

    getAll: function() {
        return JSON.parse(localStorage[this._storekey] || '{}');
    }
};

(function(util) {
    var $ = util.$;

    var moveNote = null,
        maxZIndex = 0,
        startX,
        startY;

    var temp = `<i class="u-close"></i>
                   <div class="u-editor" contenteditable="true"></div>
                   <div class="u-timestamp">
                   <span>更新: </span>
                   <span class="time"></span>
                </div>`;

    function Note(options){
        var note = document.createElement('div');
        note.className = 'm-note';
        // note.setAttribute('draggable','true');
        note.id = options.id || 'm-note-'+Date.now();
        note.innerHTML = temp;
        $('.u-editor', note).innerHTML = options.content || '';
        note.style.left = options.left + 'px';
        note.style.top = options.top + 'px';
        note.style.zIndex = options.zIndex;
        document.body.appendChild(note);
        this.note  = note;
        this.updateTime(options.updateTime);
        this.addEvent();
    }

    Note.prototype.updateTime = function(ms){
        var time = $('.time',this.note);
        ms = ms || Date.now();
        time.innerHTML = util.formatTime(ms);
        this.updateTimeInMS = ms;
    }

    Note.prototype.save = function(){
        util.set(this.note.id, {
          left: this.note.offsetLeft,
          top: this.note.offsetTop,
          zIndex: parseInt(this.note.style.zIndex),
          content: $('.u-editor', this.note).innerHTML,
          updateTime: this.updateTimeInMS
        });
    }
    Note.prototype.close = function(){
        console.log('close');
        document.body.removeChild(this.note);
    }
    Note.prototype.addEvent = function(){

        $('.u-close',this.note).addEventListener('click',this.close.bind(this));
        // 监听mousedown
        this.note.addEventListener('mousedown',function(e){
            moveNote = this.note;
            startX = e.clientX - this.note.offsetLeft;
            startY = e.clientY - this.note.offsetTop;
            // console.log(startX,startY);
            if (parseInt(this.note.style.zIndex) !== maxZIndex - 1) {
                this.note.style.zIndex = maxZIndex++;
            }
        }.bind(this));

        //监听输入
        $('.u-editor',this.note).addEventListener('input',function(e){
            var val =$('.u-editor',this.note).innerHTML;
            clearTimeout(inputTime);
            var inputTime = setTimeout(function(){
                var time = Date.now();
                util.set(this.note.id,{
                    content:val,
                    updateTime: time
                });
                this.updateTime(time);
                    // console.log(val);
            }.bind(this),300);
        }.bind(this));
    }

    document.addEventListener('DOMContentLoaded',function(e){
        // 创建note
        $('#create').addEventListener('click',function(e){
            console.log('add');
            var note = new Note({
                left: Math.random() * (window.innerWidth - 220),
                top: Math.random() * (window.innerHeight - 320),
                zIndex: maxZIndex++
            });
            note.save();
        });
        // 监听drag
        document.addEventListener('mousemove',function(e){
            // console.log(e);
            if (moveNote) {
                moveNote.style.left = e.clientX - startX + 'px';
                moveNote.style.top = e.clientY - startY + 'px';
            }else {
                return;
            }

        });
        // 监听放开鼠标
        document.addEventListener('mouseup',function(e){
            if (moveNote) {
                util.set(moveNote.id, {
                  left: moveNote.offsetLeft,
                  top: moveNote.offsetTop
                });
                moveNote = null;
            }else {
                return;
            }

        });

        // 初始化
        var notes = util.getAll();
        Object.keys(notes).forEach(function (id) {
          var options = notes[id];
          if (maxZIndex < options.zIndex) {
            maxZIndex = options.zIndex;
          }
          new Note(Object.assign(options, {
            id: id
          }));
        });
        maxZIndex += 1;



    });




})(app.util)
