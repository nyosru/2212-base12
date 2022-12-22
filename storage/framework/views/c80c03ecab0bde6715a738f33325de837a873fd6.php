<?php echo $__env->make('common-queue.js-with-tss-list', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<script>
    $('.queue-type-list').change(function () {
        $.post(
            '/change-queue-status/queue-type-statuses',
            {queue_type_id:$(this).val()},
            function (msg) {
                if(msg.length){
                    $('#change-status-modal .modal-body').html(msg);
                    $('.tss-list').html('');
                }else{
                    new Noty({
                        type: 'error',
                        layout: 'topRight',
                        text: 'Error during loading queue type statuses!',
                        timeout: 1500
                    }).show();
                }
            }
        );
    });
</script>
<?php echo $__env->make('common-queue.change-status-js', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/in.trademarkfactory.com/app/Modules/TMFXQ/Resources/views/change-status/js.blade.php ENDPATH**/ ?>