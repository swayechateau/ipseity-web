<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTranslation extends Model
{
    use HasFactory;

    protected $fillable = [
        "project_id", "language_id",
        "project_name", "project_title",
        "project_description", "project_content",
    ];

}
