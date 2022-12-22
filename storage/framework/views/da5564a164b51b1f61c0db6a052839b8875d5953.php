<table class="table table-bordered" id="main-table">
    <thead>
        <tr>
            <th class="text-center">Date and Time, PST</th>
            <th>Client</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Closer</th>
            <th class="text-center"></th>
        </tr>
    </thead>
    <tbody>
        <?php if(count($bookings_data)): ?>
            <?php $__currentLoopData = $bookings_data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $el): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td class="text-center text-nowrap"><?php echo e($el['booking_datetime']); ?></td>
                    <td class="text-left text-nowrap"><?php echo e($el['client']); ?></td>
                    <td class="text-left text-nowrap"><a href="tel:<?php echo e($el['phone']); ?>"><?php echo e($el['phone']); ?></a></td>
                    <td class="text-left text-nowrap"><a href="mailto:<?php echo e($el['email']); ?>"><?php echo e($el['email']); ?></a></td>
                    <td class="text-left text-nowrap"><?php echo e($el['closer']); ?></td>
                    <td class="text-center text-nowrap"><a href="https://trademarkfactory.com/shopping-cart/<?php echo e($el['tmoffer_login']); ?>&donttrack=1" target="_blank">Shopping Cart</a><?php echo (strlen($el['personal_flowchart_link'])?'<br/>'.sprintf('<a href="%s" target="_blank">Flowchart</a>',$el['personal_flowchart_link']):''); ?></td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php else: ?>
            <tr><td colspan="4" class="text-center">EMPTY</td></tr>
        <?php endif; ?>
    </tbody>
</table><?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/bookings-searcher/result-table.blade.php ENDPATH**/ ?>