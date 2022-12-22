<?php $__currentLoopData = $queue_root_status_obj->queueStatusRows()->orderBy('place_id','asc')->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $queue_status_obj): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <?php if($loop->index): ?>
        <li class="list-group-item <?php echo e($status_type); ?>" <?php echo $__env->make('queue-status-maintainer.sub-status-data-attrs', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>>
            <?php echo e($queue_status_obj->name); ?> <?php echo $__env->make('queue-status-maintainer.sub-status-edit-remove-btns', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?></li>
    <?php else: ?>
        <li class="list-group-item <?php echo e($status_type); ?> active"  aria-current="true"
                <?php echo $__env->make('queue-status-maintainer.sub-status-data-attrs', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>>
            <?php echo e($queue_status_obj->name); ?> <?php echo $__env->make('queue-status-maintainer.sub-status-edit-remove-btns', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?></li>
    <?php endif; ?>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?><?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/queue-status-maintainer/sub-statuses-list.blade.php ENDPATH**/ ?>