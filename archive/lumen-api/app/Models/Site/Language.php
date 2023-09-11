<?php

namespace App\Models\Site;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected $fillable = [
        'name', 'native_name',
        'region', 'code',
    ];

}
