<div class="container">
    <div class="row">
        <div class="col-lg-12 text-center wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
            <br/>
            <br/>
            <h2>Услуги</h2>
            <br/>
            <br/>
        </div>
    </div>
    <div class="row">
        
        <div class="col-lg-12 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">

            

            <div class="container-fluid">
                <div class="row">

                    <?php $__currentLoopData = $uslugi; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

                        <div class="col-xs-12 col-sm-4 col-lg-3">
                            <div class="card"
                                style="xwidth: 18rem; float: left; margin-right: 10px; margin-bottom: 10px;">
                                <img src="<?php echo e(asset('/kadastr/img/i2.jpg')); ?>" class="card-img-top" alt="...">
                                <div class="card-body">
                                    
                                        <h5 class="card-title"><?php echo e($item['head'] ?? 'x'); ?></h5>
                                    
                                    <p class="card-text">

                                    

                                        Some quick example text to build on the card title and make up the bulk of
                                        the
                                        card's content.</p>
                                        <div style="text-align: right;" >
                                    
                                    <a href="#" class="btn btn-primary">Заказать</a>
                                </div>
                                </div>
                            </div>
                        </div>

                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                </div>
            </div>


            <?php if(1 == 2): ?>
                <div class="section-heading">
                    <h2>Grow your website with our <em>SEO</em> service &amp; <span>Project</span> Ideas</h2>
                    <p>Space Dynamic HTML5 template is free to use for your website projects. However, you are not
                        permitted
                        to redistribute the template ZIP file on any CSS template collection websites. Please contact us
                        for
                        more information. Thank you for your kind cooperation.</p>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="first-bar progress-skill-bar">
                            <h4>Website Analysis</h4>
                            <span>84%</span>
                            <div class="filled-bar"></div>
                            <div class="full-bar"></div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="second-bar progress-skill-bar">
                            <h4>SEO Reports</h4>
                            <span>88%</span>
                            <div class="filled-bar"></div>
                            <div class="full-bar"></div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="third-bar progress-skill-bar">
                            <h4>Page Optimizations</h4>
                            <span>94%</span>
                            <div class="filled-bar"></div>
                            <div class="full-bar"></div>
                        </div>
                    </div>
                </div>
            <?php endif; ?>

        </div>
    </div>
</div>
<?php /**PATH /var/www/base12/data/www/site/app/Modules/Kadastr/Resources/views/block-services2.blade.php ENDPATH**/ ?>