<li class="nav-item">
    <a class="nav-link" href="#" id="search-link">Search <i class="fas fa-search"></i></a>
</li>
<li class="nav-item d-flex align-items-center">
    <div class="row ml-3">
        <div class="col-md-12">
            <label class="mb-0"><input type="checkbox" name="group-by-client" value="1"> Group by Client</label>
        </div>
    </div>
</li>
<li class="nav-item d-flex align-items-center">
    <div class="row ml-3">
        <div class="col-md-12">
            <label class="mb-0"><input type="checkbox" id="claimed-by-me-only-chbx" value="1" <?php echo e(session('claimed-by-me')?'checked':''); ?>> Claimed by me Only</label>
        </div>
    </div>
</li>
<?php if(in_array(\Illuminate\Support\Facades\Auth::user()->ID,[1,53,73])): ?>
<li class="nav-item d-flex align-items-center">
    <div class="row ml-3">
        <div class="col-md-12">
            <label class="mb-0">Owners Actions: <?php echo e(\App\DashboardOwner::all()->count()); ?></label>
        </div>
    </div>
</li>
<?php endif; ?><?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/tmf-filing-queue-v3/left-nav-bar.blade.php ENDPATH**/ ?>