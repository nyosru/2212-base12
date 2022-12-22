<div class="modal-body" style="max-height: 600px;overflow-y: auto;overflow-x: hidden">
    <table class="table table-bordered" style="margin-bottom: 20px;">
        <thead>
        <tr>
            <th>Question</th>
            <th>Answer</th>
        </tr>
        </thead>
        <tbody>
        <?php if(strlen($prequalify_request_obj->industry)): ?>
            <tr>
                <td class="text-left">In a few words, describe what industry your business pertains to:</td>
                <td class="text-left prospect-answer"><?php echo nl2br($prequalify_request_obj->industry); ?></td>
            </tr>
        <?php endif; ?>
        <?php if($prequalify_request_obj->url): ?>
            <tr>
                <td class="text-left">If you have a website or a social media page where you currently market products or services under your brand, please share the link in the field below:</td>
                <td class="text-center prospect-answer"><a href="<?php echo e(strpos($prequalify_request_obj->url,'http')===false?'http://'.$prequalify_request_obj->url:$prequalify_request_obj->url); ?>" target="_blank"><?php echo e($prequalify_request_obj->url); ?></a></td>
            </tr>
        <?php endif; ?>
        <?php $__currentLoopData = $data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $question=>$answers): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php if(count($answers) && strlen($answers[0])): ?>
                <tr>
                    <td class="text-left"><?php echo $question; ?></td>
                    <td class="text-left prospect-answer"><?php echo implode('<br/><br/>',$answers); ?></td>
                </tr>
            <?php endif; ?>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
</div>
<div class="modal-footer">
    <div class="row">
        <div class="col-md-12 text-center">
            <div>
            <?php if($prequalify_request_obj->follow_up_email_sent_at): ?>
                <strong>Jump-Thru-Hoops email sent at <?php echo e(\DateTime::createFromFormat('Y-m-d H:i:s',$prequalify_request_obj->follow_up_email_sent_at)->format('F j, Y g:ia')); ?></strong>
            <?php endif; ?>
                <button class="btn btn-warning follow-up-btn" data-id="<?php echo e($prequalify_request_obj->id); ?>">Jump-Thru-Hoops Email</button>
            <?php if($prequalify_request_obj->approved_for_booking_at): ?>
                </div>
                <div>
                <strong>Approved for booking at <?php echo e(\DateTime::createFromFormat('Y-m-d H:i:s',$prequalify_request_obj->approved_for_booking_at)->format('F j, Y g:ia')); ?></strong>
            <?php endif; ?>
                <button class="btn btn-success approve-for-booking-btn mr-2" data-id="<?php echo e($prequalify_request_obj->id); ?>">Approve for Booking</button>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
<?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/booking-applications/answers.blade.php ENDPATH**/ ?>