
<section class="sloder-img section-padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="slider-center slider">
                    <div>
                        <img class="img-fluid" src="<?php echo e(asset('/module_rem7/img/slide/img1.jpg')); ?>" alt="">
                    </div>
                    <div>
                        <img class="img-fluid" src="<?php echo e(asset('/module_rem7/img/slide/img2.jpg')); ?>" alt="">
                    </div>
                    <div>
                        <img class="img-fluid" src="<?php echo e(asset('/module_rem7/img/slide/img3.jpg')); ?>" alt="">
                    </div>
                    <div>
                        <img class="img-fluid" src="<?php echo e(asset('/module_rem7/img/slide/img4.jpg')); ?>" alt="">
                    </div>
                    <div>
                        <img class="img-fluid" src="<?php echo e(asset('/module_rem7/img/slide/img5.jpg')); ?>" alt="">
                    </div>
                    <div>
                        <img class="img-fluid" src="<?php echo e(asset('/module_rem7/img/slide/img6.jpg')); ?>" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<?php $__env->startSection('script'); ?>
    ##parent-placeholder-cb5346a081dcf654061b7f897ea14d9b43140712##

    

    <script type="text/javascript">
        $(document).ready(function() {
            /* вся мaгия пoслe зaгрузки стрaницы */

            /*  Slick Slider
            ========================================================*/
            $('.slider-center').slick({
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });
    </script>

    

<?php $__env->stopSection(); ?>
<?php /**PATH /var/www/base12/data/www/site/app/Modules/Rem7/Resources/views/block-slider.blade.php ENDPATH**/ ?>