<?php if($section->items->count()): ?>
    <table class="table table-bordered item-table" data-section-id="<?php echo e($section->id); ?>">
        <?php $__currentLoopData = $section->items->sortBy('order_field',SORT_REGULAR,true); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr class="item-row" data-section-id="<?php echo e($section->id); ?>" data-id="<?php echo e($item->id); ?>"
                data-visible="<?php echo e((new \DateTime($item->visible_date))->format('Y-m-d')); ?>"
                data-headline="<?php echo htmlentities($item->headline,ENT_QUOTES,'UTF-8'); ?>"
                data-post-url="<?php echo e($item->post_url); ?>"
                data-long-url="<?php echo e($item->long_url); ?>"
                data-comment="<?php echo htmlentities(nl2br($item->comment),ENT_QUOTES,'UTF-8'); ?>"
                data-youtube-url="<?php echo e($item->youtube_url); ?>"
                data-sniply-url="<?php echo e($item->adlinks_url); ?>"
                data-twitter="<?php echo htmlentities($item->twitter,ENT_QUOTES,'UTF-8'); ?>"
                data-visibility="<?php echo e($item->visibility); ?>"
                data-seo-title="<?php echo e($item->seo_title); ?>"
                data-seo-description="<?php echo e($item->seo_description); ?>"
                data-seo-keywords="<?php echo e($item->seo_keywords); ?>"
            >
                <td class="text-left">
                    <span class="mr-3"><i class="fas fa-arrows-alt-v move-item" style="cursor: grab;color:#aaa"></i></span><?php echo e($item->headline); ?>

                </td>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </table>
<?php else: ?>
    <div class="text-center">EMPTY</div>
<?php endif; ?>
<?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/ns-maintainer/section-table.blade.php ENDPATH**/ ?>