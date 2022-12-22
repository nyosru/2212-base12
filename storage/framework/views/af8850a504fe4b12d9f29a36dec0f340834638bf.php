<div class="accordion" id="r-statuses">
    <?php $__currentLoopData = \App\TmfFilingQueueRootStatus::orderBy('place_id','asc')->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $el): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="card">
            <div class="card-header d-flex align-items-center" id="r-status-<?php echo e($el->id); ?>">
                <h2 class="mb-0 flex-grow-1">
                    <button class="btn btn-link btn-block text-left r-status" data-id="<?php echo e($el->id); ?>" type="button" data-toggle="collapse" data-target="#r-status-collapse-<?php echo e($el->id); ?>" aria-expanded="true" aria-controls="r-status-collapse-<?php echo e($el->id); ?>">
                        <?php echo e($el->name); ?>

                    </button>
                </h2>
            </div>

            <div id="r-status-collapse-<?php echo e($el->id); ?>" class="collapse" aria-labelledby="r-status-<?php echo e($el->id); ?>" data-parent="#r-statuses">
                <div class="card-body" style="max-height: 450px;overflow-x: hidden;overflow-y: auto;">
                    <div class="list-group">
                        <?php $__currentLoopData = \App\TmfFilingQueueStatus::where('tmf_filing_queue_root_status_id',$el->id)->orderBy('place_id','asc')->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tmf_filing_queue_status_obj): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <button type="button" class="d-flex align-items-center list-group-item list-group-item-action s-status"
                                    data-init-method="<?php echo e($init_method); ?>"
                                    data-id="<?php echo e($tmf_filing_queue_status_obj->id); ?>"
                                    data-root-id="<?php echo e($el->id); ?>">
                                <div class="flex-grow-1 mr-2"><?php echo e($tmf_filing_queue_status_obj->name); ?></div>
                            </button>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                    </div>
                </div>
            </div>
        </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div>
<?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/common-queue/tmf-filing-queue-accordion.blade.php ENDPATH**/ ?>