<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    protected $fillable = [
        'type', 'details', 'emailed', 'site_id'
    ];
}
