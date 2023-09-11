<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Model;

class ProjectContent extends Model
{
    protected $fillable = [
        'project_id', 'language_id',
        'name', 'description', 'content'
    ];

    public function project()
    {
        return $this->belongsTo('App\Models\Project\Project');
    }

    public function languages()
    {
        return $this->belongsTo('App\Models\Translation\Language');
    }
}
