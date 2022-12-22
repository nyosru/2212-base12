@foreach($data as $el)
    @php
   @endphp
    <li class="list-group-item pq-application pt-1 pb-1" data-id="{{$el['id']}}">
        <div class="d-table">
            <div class="d-table-row">
                <div class="d-table-cell align-middle p-1 pr-2 border-right" style="line-height: 1;width: 80px;"><span style="font-size: 11px;">{!! $el['request_date'] !!}</span></div>
                <div class="d-table-cell align-middle p-1 border-right" style="width: 250px;">
                    {{$el['prospect']}}
                </div>
                <div class="d-table-cell align-middle p-1 border-right" style="width: 150px;">
                    {{$el['sdr']}}
                </div>
                <div class="d-table-cell align-middle p-1 border-right" style="width: 450px;">
                    {{$el['custom-info']}}
                </div>
                <div class="d-table-cell align-middle p-1 text-center" style="width: 50px;">
                    <button class="btn btn-sm btn-primary details-btn" data-id="{{$el['id']}}">details</button>
                </div>
            </div>
        </div>
    </li>
@endforeach