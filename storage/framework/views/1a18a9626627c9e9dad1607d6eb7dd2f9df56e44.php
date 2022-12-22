<?php $__currentLoopData = \App\TmfFilingQueueStatus::where('tmf_filing_queue_root_status_id',$el->id)->orderBy('place_id','asc')->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tmf_filing_queue_status_obj): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <button type="button" class="d-flex align-items-center list-group-item list-group-item-action sub-status"
            data-id="<?php echo e($tmf_filing_queue_status_obj->id); ?>"
            data-root-id="<?php echo e($el->id); ?>">
        <div class="flex-grow-1 mr-2"><?php echo e($tmf_filing_queue_status_obj->name); ?> [<span class="total"
                                                                                    data-root-id="<?php echo e($el->id); ?>"
                                                                                    data-id="<?php echo e($tmf_filing_queue_status_obj->id); ?>"><img
                        src="https://trademarkfactory.imgix.net/img/loading.gif"
                        style="height:16px;;width: 16px;"/></span>]
        </div>
        <div class="flex-shrink-1 numbers-block empty" data-root-id="<?php echo e($el->id); ?>"
             data-id="<?php echo e($tmf_filing_queue_status_obj->id); ?>">
            <img src="https://trademarkfactory.imgix.net/img/loading.gif" style="height:16px;;width: 16px;"/>
        </div>
    </button>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/tmf-filing-queue-v3/sub-statuses-list.blade.php ENDPATH**/ ?>