(function() {
    'use strict';

    var $form_add_task = $('.add-task'),
    new_task = {};

    $form_add_task.on('submit',function(e){
        e.preventDefault();
        new_task.content = $(this).find('input[name=content]').val();
        if (!new_task.content) {
            return;
        }
        console.log(new_task);
    })
})()
