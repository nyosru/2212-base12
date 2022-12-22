<table class="table table-bordered details-table">
    <?php echo $__env->make($table_header_template, \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <tbody>
        <?php $__currentLoopData = $dashboard_details_data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $dashboard_el): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td class="text-left text-nowrap"><?php echo e($dashboard_el->date=='N/A'?$dashboard_el->date:$dashboard_el->date->format('Y-m-d')); ?></td>
                <td class="text-left"><a href="https://trademarkfactory.com/mlcclients/dashboard-trademarks-details.php?id=<?php echo e($dashboard_el->dashboard_id); ?>" target="_blank"><?php echo $dashboard_el->dashboard_tm; ?></a></td>
                <td class="text-left"><?php echo e($dashboard_el->value); ?></td>
                <td class="text-center">
                    <select class="form-control iit-select" data-id="<?php echo e($dashboard_el->dashboard_id); ?>">
                        <?php $__currentLoopData = $dashboard_in_timings_type_objs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $obj): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($obj->id); ?>" <?php echo e($obj->id==(\App\DashboardV2::find($dashboard_el->dashboard_id))->dashboard_in_timings_type_id?'selected':''); ?>><?php echo e($obj->name); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </td>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </tbody>
</table><?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/ops-trends/details/line4.blade.php ENDPATH**/ ?>