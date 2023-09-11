<?php

namespace App\Models\Site;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    protected $fillable = [
        'type', 'details', 'emailed', 'site_id'
    ];
}
