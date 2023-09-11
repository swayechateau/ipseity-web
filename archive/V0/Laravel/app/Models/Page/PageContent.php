<?php

namespace App\Models\Page;

use Illuminate\Database\Eloquent\Model;

class PageContent extends Model
{
    protected $fillable = [
        'page_id', 'language_id', 'title',
        'sub_title', 'description', 'name',
        'content', 'aside', 'meta', 'category', 'tags'
    ];

    public function page()
    {
        return $this->belongsTo('App\Models\Page\Page');
    }

    public function language()
    {
        return $this->belongsTo('App\Models\Translation\Language');
    }
}
