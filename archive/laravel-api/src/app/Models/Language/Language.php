<?php

namespace App\Models\Language;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Language extends Model
{
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'language_name',
        'languae_native_name',
        'language_code',
        'language_icon',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @param $code string
     *
     * @return void
     */
    protected static function idFromCode($code) : int
    {
        $id = Language::where('language_code', $code)->select('language_id')->firstOrFail();
        return $id->language_id;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @param $languages string[]
     *
     * @return void
     */
    protected static function createMultiple($languages) : void
    {
        foreach ($languages as $language) {
            Language::firstOrCreate($language);
        }
    }
}
