<?php

namespace App\Models\Translation;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected $fillable = [
        'family', 'name', 'native_name',
        'abr_2', 'abr_3', 'country',
    ];

}