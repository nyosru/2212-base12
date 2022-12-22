<?php $__currentLoopData = $cipostatus_status_formalized_tss_objs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $obj): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <option value="<?php echo e($obj->id); ?>"><?php echo e($obj->template_name); ?></option>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php $__currentLoopData = $global_status_tss_objs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $obj): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <option value="<?php echo e($obj->id); ?>"><?php echo e($obj->template_name); ?></option>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?><?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/tmf-filing-queue-status-maintainer/dashboard-tss-options.blade.php ENDPATH**/ ?>