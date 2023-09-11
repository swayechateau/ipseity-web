<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        "project_id", "category_id"
    ];

    public function project()
    {
        return $this->belongsTo('App\Models\Project\Project');
    }

    public function category()
    {
        return $this->belongsTo('App\Models\Translation\Language');
    }
}
