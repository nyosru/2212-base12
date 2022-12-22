<table class="table table-bordered">
    <thead>
    <tr>
        <th>Request Received</th>
        <th>Client</th>
        <th style="width: 70px"></th>
        <th>Emails</th>
        <th>SDR Status</th>
        <th>Booked / BOOMs</th>
    </tr>
    </thead>
    <tbody>
    <?php $__currentLoopData = $prequalify_request_objs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $prequalify_request_obj): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php
            $tmf_booking=\App\TmfBooking::whereIn('tmf_client_tmsr_tmoffer_id',
            \App\TmfClientTmsrTmoffer::select('id')
                ->whereIn('tmoffer_id',
                            \App\Tmoffer::select('ID')
                            ->where('prequalify_request_id',$prequalify_request_obj->id)
                )
            )
            ->orderBy('id','desc')
            ->first();
            $tmoffer_bin=null;
            $tms_count=0;
            $boom_status='no-booking';
            $noshow=0;
            $tmoffer=null;
            $tmoffer=\App\Tmoffer::where('prequalify_request_id',$prequalify_request_obj->id)->first();
            $notes='';
            if($tmoffer){
                switch ($tmoffer->how_find_out_us){
                    case 'FB Paul LaMarca Ad':
                    case 'Instagram':
                        $from=$tmoffer->how_find_out_us;
                        break;
                    default:
                        $from='Other';
                }
                $notes=$tmoffer->Notes;
            }
            if($tmf_booking){
                //$tmoffer=\App\Tmoffer::whereIn('ID',\App\TmfClientTmsrTmoffer::select('tmoffer_id')->where('id',$tmf_booking->tmf_client_tmsr_tmoffer_id))->first();
                $tmoffer_bin=\App\TmofferBin::where('tmoffer_id',$tmoffer->ID)
                            ->where('need_capture',0)
                            ->first();
                if($tmoffer_bin){
                    $boom_status='boom';
                    $tms_count=count(json_decode($tmoffer_bin->tms,true));
                }else
                    if($tmf_booking->booked_date>=\Carbon\Carbon::now()->format('Y-m-d H:i:s'))
                        $boom_status='future-booking';
                    else
                        $boom_status='no-boom';

                $tmoffer_tmf_country_trademarks_count=\App\TmofferTmfCountryTrademark::where('tmoffer_id',$tmoffer->ID)
                                                ->where('search_only',0)
                                                ->where('selected_flag',1)
                                                ->count();
                if($tmf_booking->booked_date<\Carbon\Carbon::now()->format('Y-m-d H:i:s')){
                    $tmfsales_tmoffer_not_boom_reason=\App\TmfsalesTmofferNotBoomReason::where('tmoffer_id',$tmoffer->ID)
                        ->where('not_boom_reason_id',79)
                        ->first();
                    if($tmfsales_tmoffer_not_boom_reason)
                        $noshow=1;
                }
            }
        ?>
        <tr class="result-table-rows
                <?php if(count($show_lead_statuses) && !in_array($prequalify_request_obj->lead_status_id,$show_lead_statuses)): ?> hdn <?php endif; ?> <?php if($prequalify_request_obj->tmfSubject->tmfSubjectContacts()->where('contact_data_type_id',1)->first()->contact=='vitaly.polukhin@gmail.com'): ?> <?php echo e(in_array(\Illuminate\Support\Facades\Auth::user()->ID,[53])?'test':''); ?> <?php endif; ?>"
                style="<?php if($prequalify_request_obj->tmfSubject->tmfSubjectContacts()->where('contact_data_type_id',1)->first()->contact=='vitaly.polukhin@gmail.com'): ?> display:<?php echo e(in_array(\Illuminate\Support\Facades\Auth::user()->ID,[53])?'table-row':'none'); ?> <?php endif; ?>"
                data-lead-status-id="<?php echo e(($prequalify_request_obj->lead_status_id?$prequalify_request_obj->lead_status_id:-1)); ?>"
                data-boom-status="<?php echo e($boom_status); ?>"
                data-tms-count="<?php echo e($tms_count); ?>"
                data-sdr="<?php echo e(($prequalify_request_obj->tmfsales?$prequalify_request_obj->tmfsales->ID:0)); ?>"
                data-request-date="<?php echo e(\DateTime::createFromFormat('Y-m-d H:i:s',$prequalify_request_obj->created_at)->format('Y-m-d')); ?>"
                data-booked-confirmed="<?php echo e(($tmf_booking?\DateTime::createFromFormat('Y-m-d H:i:s',$tmf_booking->created_at)->format('Y-m-d'):'N/A')); ?>"
                data-noshow="<?php echo e($noshow); ?>"
                data-from="<?php echo e($from); ?>"
        >
            <td class="text-center"><a href="#" class="show-request-info" data-id="<?php echo e($prequalify_request_obj->id); ?>"><?php echo e($prequalify_request_obj->created_at); ?></a></td>
            <td class="text-left">
                <a href="#" class="show-client-data" data-email="<?php echo e($prequalify_request_obj->tmfSubject->tmfSubjectContacts()->where('contact_data_type_id',1)->first()->contact); ?>" data-phone="<?php echo e($prequalify_request_obj->tmfSubject->tmfSubjectContacts()->where('contact_data_type_id',4)->first()->contact); ?>"> <?php echo e($prequalify_request_obj->tmfSubject->first_name); ?> <?php echo e($prequalify_request_obj->tmfSubject->last_name); ?></a>
                <a href="#" class="send-sms-to-person" data-id="<?php echo e($prequalify_request_obj->tmf_subject_id); ?>"><i class="fas fa-sms"></i></a>
            </td>
            <td class="text-center">
                <a href="#" class="show-answers mr-3" data-id="<?php echo e($prequalify_request_obj->id); ?>"><i class="fas fa-file-alt"></i></a>
                <a href="https://trademarkfactory.com/mlcclients/pq-manual-booking.php?id=<?php echo e($prequalify_request_obj->id); ?>" class="book-a-call" title="Click to book a call from our end" target="_blank"><i class="fas fa-calendar-plus" style="color:green"></i></a>
            </td>
            
            
            <td class="text-center" style="background: <?php if($prequalify_request_obj->emailHistoryRows()->where('prequalify_request_email_type_id',2)->count()): ?><?php echo e("lightgreen"); ?><?php else: ?> <?php if($prequalify_request_obj->emailHistoryRows()->count()): ?><?php echo e("yellow"); ?><?php else: ?><?php echo e("transparent"); ?><?php endif; ?> <?php endif; ?>">
                <?php $__currentLoopData = $prequalify_request_obj->emailHistoryRows; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $obj): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div><a href="#" class="show-email-details" data-id="<?php echo e($obj->id); ?>"><?php echo $obj->prequalify_request_email_type_id==1?'<i class="fas fa-thumbs-down text-danger"></i>':'<i class="fas fa-thumbs-up" style="color:green"></i>'; ?> <?php echo e($obj->created_at); ?></a></div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </td>
            <?php

                    ?>
            <td style="background: <?php echo e($prequalify_request_obj->lead_status_id?$prequalify_request_obj->leadStatus->color:'transparent'); ?>">
                <?php if($prequalify_request_obj->lead_status_id): ?>
                    <?php echo e($prequalify_request_obj->tmfsales->LongID); ?>: <?php echo e($prequalify_request_obj->leadStatus->name); ?><a href="#" class="edit-claimed-request"
                                                                                                                   data-id="<?php echo e($prequalify_request_obj->id); ?>"
                                                                                                                   data-temperature="<?php echo e($prequalify_request_obj->temperature); ?>"
                                                                                                                   data-needs-tm="<?php echo e($prequalify_request_obj->needs_tm); ?>"
                                                                                                                   data-knows-offer="<?php echo e($prequalify_request_obj->knows_offer); ?>"
                                                                                                                   data-lead-status="<?php echo e($prequalify_request_obj->lead_status_id); ?>"
                    ><sup><i class="fas fa-pencil-alt"></i></sup></a><br/>
                    <a href="#" class="pq-notes" data-id="<?php echo e($prequalify_request_obj->id); ?>" data-notes="<?php echo e($notes); ?>" data-notes-alt="<?php echo e(nl2br($notes)); ?>">Notes</a>
                <?php else: ?>
                    <a href="#" class="unclaimed-link" data-id="<?php echo e($prequalify_request_obj->id); ?>">UNCLAIMED</a>
                <?php endif; ?>
            </td>
            <td class="text-center" style="<?php if($tmf_booking && $tmf_booking->booked_date!='0000-00-00 00:00:00'): ?> background:<?php echo e($tmoffer_bin?'green':(\DateTime::createFromFormat('Y-m-d H:i:s',$tmf_booking->booked_date)->format('Y-m-d H:i:s')<Carbon\Carbon::now()->format('Y-m-d H:i:s')?($noshow?'brown':'pink'):'orange')); ?>; <?php endif; ?>">
                <?php if($tmf_booking && $tmf_booking->booked_date!='0000-00-00 00:00:00'): ?>
                    ⏰ <?php echo e($tmf_booking->created_at); ?> with <?php echo e(\App\Tmfsales::find($tmf_booking->sales_id)->FirstName); ?><br/>for <?php echo e(DateTime::createFromFormat('Y-m-d H:i:s',$tmf_booking->booked_date)->format('Y-m-d \@ g:ia')); ?> PST (<a href="#" class="call-report-link" data-tmoffer-id="<?php echo e($tmoffer->ID); ?>">Call Report</a>)
                <?php endif; ?>
                <?php if($tmoffer_bin): ?>
                    <br/>💣 <?php echo e(\DateTime::createFromFormat('Y-m-d H:i:s',$tmoffer_bin->modified_at)->format('Y-m-d')); ?> <?php echo e(\App\Tmfsales::where('Login',\App\Tmoffer::find($tmoffer_bin->tmoffer_id)->Sales)->first()->FirstName); ?> closed (<?php echo e($tmoffer_tmf_country_trademarks_count); ?> TM<?php echo e(($tmoffer_tmf_country_trademarks_count>1?'s':'')); ?>)
                <?php endif; ?>
            </td>
        </tr>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </tbody>
</table>
<?php /**PATH /var/www/html/in.trademarkfactory.com/resources/views/booking-applications/result-table.blade.php ENDPATH**/ ?>