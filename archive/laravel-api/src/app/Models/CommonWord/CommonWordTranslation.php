<?php

namespace App\Models\CommonWord;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class CommonWordTranslation extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'common_word_id',
        'language_id',
        'common_word_text',
    ];
}
