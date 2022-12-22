<?php if($tmoffer && \App\TmofferTmfCountryTrademark::where('tmoffer_id',$tmoffer->ID)->count()): ?>
    <li><a class="dropdown-item" href="https://trademarkfactory.com/mlcclients/tmfentry/<?php echo e($tmoffer->Login); ?>?show=trademarks" target="_blank"><i class="far fa-list-alt"></i> TMF Entry</a></li>
    <li><a class="dropdown-item" href="https://trademarkfactory.com/searchreport/<?php echo e($tmoffer->Login); ?>&donttrack=donttrack" target="_blank"><i class="fas fa-search"></i> Search Report</a></li>
<?php endif; ?>
<li><a href="#" class="dropdown-item cancel-gc-booking-link" data-booking-id="<?php echo e($booking->id); ?>"><i class="fas fa-times"></i> Cancel Booking</a></li>
<?php if($booking->zoom_url || $booking->zoom_id): ?>
    <li><a href="#" class="dropdown-item resend-gc-zoom-link" data-booking-class="gm" data-booking-id="<?php echo e($booking->id); ?>"><i class="fas fa-envelope"></i> Resend Zoom Link</a></li>
<?php endif; ?>
<?php if($tmoffer): ?>
<li><a href="#" class="dropdown-item edit-notes-link" data-tmoffer-id="<?php echo e($tmoffer->ID); ?>"><i class="fas fa-sticky-note"></i> Notes</a></li>
<?php endif; ?>
<?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/post-boom-bookings-calendar/menu/gm-booking.blade.php ENDPATH**/ ?>