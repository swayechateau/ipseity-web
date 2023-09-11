<?php

namespace App\Models\Page;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'page_id', 'language_id',
        'name', 'title', 'sub_title',
        'description', 'content', 'aside',
        'meta',
    ];
}
