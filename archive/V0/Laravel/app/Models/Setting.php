<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'site_name', 'url', 'email',
        'location', 'default_lang',
        'supported_langs', 'social_links',
        'founded'
    ];
}
