<?php $__env->startSection('content'); ?>

    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2>Добавить</h2>

                <form action="<?php echo e(route('job.create')); ?>" method="post">
                    <?php echo csrf_field(); ?>

                    кооператив
                    <br />
                    <input type="text" name="kooperativ" id="">
                    <br />
                    номер
                    <br />
                    <input type="text" name="nomer" id="">
                    <br />
                    комент
                    <br />
                    <input type="text" name="comment" id="">
                    <br />
                    
                    статус
                    <br />

                    <select name="status" id="">
                        <option>new</option>
                        <option>job</option>
                        <option>repair</option>
                        <option>pause</option>
                        <option>off</option>
                    </select>

                    <br />
                    <br />

                    <button type="submit">Добавить</button>

                </form>


            </div>
            <div class="col-6">

                <table class="table">
                    <tbody>
                        <?php $__currentLoopData = $jobs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $job): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <tr>
                                <td><?php echo e($job->id); ?></td>
                                <td><?php echo e($job->kooperativ); ?></td>
                                <td>
                                    <?php echo e($job->nomer); ?>

                                    <small>
                                        <?php echo e($job->comment); ?>

                                    </small>
                                </td>
                                <td><?php echo e($job->status); ?></td>
                                <td></td>
                                <td></td>
                            </tr>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </tbody>
                </table>

            </div>
        </div>
    </div>

    





<?php $__env->stopSection(); ?>

<?php echo $__env->make('job::app.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/base12/data/www/site/app/Modules/Job/Resources/views/index.blade.php ENDPATH**/ ?>