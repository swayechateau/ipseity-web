<?php

namespace App\Models\CurriculumVitae;

use Illuminate\Database\Eloquent\Model;

class Resume extends Model
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
