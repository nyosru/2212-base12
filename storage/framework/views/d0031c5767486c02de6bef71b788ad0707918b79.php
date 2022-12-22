<!DOCTYPE html>
<html lang="en">

<head>

    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Мастерская «7 РЕМЁСЕЛ»</title>

    <!-- Bootstrap CSS -->
    
    <!-- Icon -->
    <link rel="stylesheet" type="text/css" href="<?php echo e(asset('/module_rem7/fonts/line-icons.css')); ?>">
    <!-- Slicknav -->
    
    <!-- Owl carousel -->
    
    
    <!-- Slick Slider -->
    
    
    <!-- Animate -->
    
    <!-- Main Style -->
    
    <!-- Responsive Style -->
    

    <link rel="stylesheet" type="text/css" href="<?php echo e(asset('/module_rem7/css/all.css')); ?>" />

    <?php $__env->startSection('style'); ?>
    <?php echo $__env->yieldSection(); ?>

</head>

<body>

    
    <?php if(1 == 1): ?>

        
        <div id="preloader">
            <div class="loader" id="loader-1"></div>
        </div>
        

        <?php $__env->startSection('script'); ?>
            ##parent-placeholder-cb5346a081dcf654061b7f897ea14d9b43140712##
            <script type="text/javascript">
                $(document).ready(function() {
                    $(window).on('load', function() {
                        /* Page Loader active */
                        $('#preloader').fadeOut();
                    });
                });
            </script>
        <?php $__env->stopSection(); ?>

    <?php endif; ?>

    <?php echo $__env->make('rem7::app.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <?php $__env->startSection('content'); ?>
    <?php echo $__env->yieldSection(); ?>

    <?php echo $__env->make('rem7::block-map', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <?php echo $__env->make('rem7::app.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <section id="copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-xs-12">
                    <p>© 2020-<?php echo e(date('Y')); ?> Все права защищены</p>
                </div>
                <div class="col-md-6 col-xs-12">
                    <p>Создание сайта: <a href="https://php-cat.com" target="_blank">php-cat.com</a></p>
                </div>
            </div>
        </div>
    </section>

    <?php echo $__env->make('rem7::arrow-top', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <?php echo $__env->make('rem7::widget-vk', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

</body>

<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="<?php echo e(asset('/module_rem7/js/jquery-min.js')); ?>"></script>

<script src="<?php echo e(asset('/module_rem7/js/popper.min.js')); ?>"></script>
<script src="<?php echo e(asset('/module_rem7/js/bootstrap.min.js')); ?>"></script>
<script src="<?php echo e(asset('/module_rem7/js/owl.carousel.min.js')); ?>"></script>
<script src="<?php echo e(asset('/module_rem7/js/wow.js')); ?>"></script>
<script src="<?php echo e(asset('/module_rem7/js/jquery.nav.js')); ?>"></script>
<script src="<?php echo e(asset('/module_rem7/js/scrolling-nav.js')); ?>"></script>
<script src="<?php echo e(asset('/module_rem7/js/jquery.easing.min.js')); ?>"></script>





















<?php $__env->startSection('script'); ?>

    <script type="text/javascript">
        $(document).ready(function() {
            $(window).on('load', function() {

            // alert('123123');

                // Sticky Nav
                $(window).on('scroll', function() {
                    if ($(window).scrollTop() > 50) {
                        $('.scrolling-navbar').addClass('top-nav-collapse');
                    } else {
                        $('.scrolling-navbar').removeClass('top-nav-collapse');
                    }
                });

                // one page navigation
                $('.navbar-nav').onePageNav({
                    currentClass: 'active'
                });

                /* WOW Scroll Spy
                  ========================================================*/
                var wow = new WOW({
                    //disabled for mobile
                    mobile: false
                });
                wow.init();


                /* Map Form Toggle
                ========================================================*/
                $('.map-icon').on('click', function(e) {
                    $('#conatiner-map').toggleClass('panel-show');
                    e.preventDefault();
                });


            });

        });
    </script>

<?php echo $__env->yieldSection(); ?>

</html>
<?php /**PATH /var/www/base12/data/www/site/app/Modules/Rem7/Resources/views/app/app.blade.php ENDPATH**/ ?>