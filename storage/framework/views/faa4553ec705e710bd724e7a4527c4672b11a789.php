<div class="card" data-place-id="<?php echo e($section->place_id); ?>" data-id="<?php echo e($section->id); ?>">
    <div class="card-header" id="section-<?php echo e($section->id); ?>">
        <i class="fas fa-arrows-alt move-section-btn" title="Move Section" style="color: #aaa;position:absolute;left: 7px;top:21px;font-size:17px;cursor: grab"></i>
        <h2 class="mb-0 ml-2">
            <button class="btn btn-link btn-block text-left <?php if(!$loop->first): ?>collapsed <?php endif; ?>" type="button" data-toggle="collapse" data-target="#collapse-<?php echo e($section->id); ?>" aria-expanded="<?php echo e($loop->first?"true":"false"); ?>" aria-controls="collapse-<?php echo e($section->id); ?>">
                <?php echo e($section->name); ?>

            </button>
        </h2>
        <div style="position: absolute;right: 5px;top:13px;">
            <div class="dropdown">
                <a class="btn btn-default dropdown-toggle" style="color: #777" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-align-justify"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                    <a href="#" class="dropdown-item add-new-item-btn" title="Add New Item" data-id="<?php echo e($section->id); ?>"><i class="fas fa-plus"></i> Add New Item</a>
                    <a href="#" class="dropdown-item edit-section-btn" title="Edit Section Name" data-id="<?php echo e($section->id); ?>"><i class="fas fa-pencil-alt"></i> Rename Section</a>
                    <a href="#" class="dropdown-item del-section-btn" title="Remove Section" data-id="<?php echo e($section->id); ?>"><i class="fas fa-times"></i> Delete Section</a>
                </div>
            </div>
        </div>
    </div>
    <div id="collapse-<?php echo e($section->id); ?>" class="collapse <?php echo e($loop->first?"show":""); ?>" aria-labelledby="section-<?php echo e($section->id); ?>" data-parent="#root-block">
        <div class="card-body" data-section-id="<?php echo e($section->id); ?>" style="max-height: 600px;overflow-y: auto;overflow-x: hidden">
            <?php echo $__env->make('fc-maintainer.section-table', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        </div>
    </div>
</div>
<?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/fc-maintainer/root-block.blade.php ENDPATH**/ ?>