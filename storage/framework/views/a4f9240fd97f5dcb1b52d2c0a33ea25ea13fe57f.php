<div class="modal" id="boom-sources-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Boom Sources</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <?php $__currentLoopData = $boom_sources; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $el): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="col-4">
                            <label>
                                <?php if(Auth::user()->sales_calls): ?>
                                    <input type="checkbox" class="boom-source-chbx" value="<?php echo e($el->ID); ?>" <?php echo e(Auth::user()->ID==$el->ID?'checked':''); ?>> <?php echo e($el->FirstName.' '.$el->LastName); ?>

                                <?php else: ?>
                                    <input type="checkbox" class="boom-source-chbx" value="<?php echo e($el->ID); ?>" checked> <?php echo e($el->FirstName.' '.$el->LastName); ?>

                                <?php endif; ?>
                            </label>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <div class="col-4">
                            <label>
                                <input type="checkbox" class="boom-source-chbx" value="-1" <?php echo e(Auth::user()->sales_calls?'':'checked'); ?>> Auto-Boom
                            </label>
                        </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-success" id="apply-bs-filter-btn">Apply Filter</button>
            </div>
        </div>
    </div>
</div>
<?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/payments-calendar/boom-sources-modal.blade.php ENDPATH**/ ?>