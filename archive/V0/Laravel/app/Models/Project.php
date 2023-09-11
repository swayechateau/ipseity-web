<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'hero', 'index', 'git_url', 'slug',
        'demo_url', 'tags', 'open_source',
    ];

    public function contents()
    {
        return $this->hasMany('App\Models\ProjectContent');
    }
}
