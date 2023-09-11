<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = [
        'hero', 'name', 'slug',
        'published', 'post', 'posted_at',
    ];

    public function categories()
    {
        return $this->hasMany('App\Models\Category');
    }
    public function content()
    {
        return $this->hasMany('App\Models\PageContent');
    }
}
