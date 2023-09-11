<?php

namespace App\Models\Author;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class AuthorTranslation extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'language_id',
        'author_id',
        'author_firstname',
        'author_middlename',
        'author_lastname',
        'author_professional_title',
        'author_location',
        'author_bio',
        'author_catchphase',
        'author_image1',
        'author_image2'
    ];
}
