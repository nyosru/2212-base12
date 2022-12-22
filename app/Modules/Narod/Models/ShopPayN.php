<?php

namespace App\Modules\Narod\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ShopPayN extends Model
{
    use HasFactory;

    protected $fillable = [];
    
    protected static function newFactory()
    {
        return \App\Modules\Narod\Database\factories\ShopPayNFactory::new();
    }
}
