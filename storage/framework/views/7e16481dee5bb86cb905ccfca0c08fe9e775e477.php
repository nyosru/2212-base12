<?php $__env->startSection('title'); ?>
    Reg Queue
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <?php echo $__env->make('common-queue.context-menu', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <main class="col-md-12 ms-sm-auto col-lg-12 px-md-4">
        <div class="row">
            <div class="col-3" style="min-width: 250px;">
                <div class="accordion" id="root-statuses">
                    <?php echo $__env->make('tmf-reg-queue.root-statuses-list', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                </div>
            </div>
            <div class="col-9">
                <div id="tms-area">

                </div>
            </div>
        </div>
    </main>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('modals'); ?>
    <?php echo $__env->make('post-boom-bookings-calendar.notes-modal', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    
    <?php echo $change_status_obj->getModals(); ?>

    <?php echo $__env->make('tmf-filing-queue.search-modal', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('tmf-filing-queue-v3.request-review-modal', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('tmf-filing-queue-v3.history-modal', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('external-jscss'); ?>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.0/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/jquery-migrate-3.0.0.min.js" type="text/javascript"></script>
    <script src="//code.jquery.com/ui/1.12.0/jquery-ui.js" type="text/javascript"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" rel="stylesheet">
    <link href="https://trademarkfactory.com/js/noty/lib/noty.css" rel="stylesheet">
    <script type="text/javascript" src="https://trademarkfactory.com/js/noty/lib/noty.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js"></script>
    <script src="https://trademarkfactory.com/js/moment-timezone-with-data.js"></script>
    <link rel="stylesheet" type="text/css" href="/datatables/datatables.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.24/sc-2.0.3/datatables.min.css"/>

    <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.24/sc-2.0.3/datatables.min.js"></script>
    <link rel="stylesheet" href="<?php echo e(asset('plugins/summernote/summernote-bs4.css')); ?>">
    <script src="<?php echo e(asset('plugins/summernote/summernote-bs4.min.js')); ?>"></script>


    <?php echo $__env->make('tmf-filing-queue-v3.css', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <?php echo $change_status_obj->getJs(); ?>

    <?php echo $__env->make('common-queue.image-preview-js', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('tmf-reg-queue.js', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/tmf-reg-queue/index.blade.php ENDPATH**/ ?>