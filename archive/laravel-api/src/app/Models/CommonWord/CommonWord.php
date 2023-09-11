<?php

namespace App\Models\CommonWord;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use App\Models\Language\Language;

class CommonWord extends Model
{
    use SoftDeletes;

    protected $fillable = ['common_word_index'];

    /**
     * The attributes that are mass assignable.
     *
     * @param $words string[]
     *
     * @return void
     */
    protected static function createMultiple($words) : void
    {
        try {
            foreach ($words as $word => $translations) {
                $w = self::firstOrCreate(['common_word_index' => $word]);
                $w = self::firstOrCreate(['common_word_index' => $word]);
                foreach ($translations as $code => $translation) {
                    self::createTranslation($w->common_word_id, $code, $translation);
                }
            }
        } catch (\Exception $e) {
            //
        }
    }

    protected static function createTranslation($id, $code, $translation) : void
    {
        if ($translation != '') {
            CommonWordTranslation::firstOrCreate(
                [
                    'common_word_id' => $id,
                    'language_id' => Language::idFromCode($code),
                    'common_word_text' => $translation,
                ]
            );
        }
    }
    /**
     * Translate one
     *
     * @param $id string
     *
     * @return void
     */
    public static function translateOne($id)
    {
        $results = [];
        $langs = Language::all();

        $word = CommonWord::findOrFail($id);
        $results[$word->common_word_index] = ["translations" => []];
        foreach ($langs as $lang) {
            $translated = CommonWordTranslation::where('language_id', $lang->language_id)
                ->where('common_word_id', $word->common_word_id)
                ->value('common_word_text');
            $results[$word->common_word_index]["translations"][$lang->language_code] = $translated;

        }

        return $results;
    }

    /**
     * Translate all.
     *
     * @return void
     */
    public static function translateAll()
    {
        $results = [];
        $langs = Language::all();

        $words = CommonWord::all();
        foreach ($words as $word) {
            $results[$word->common_word_index] = ["translations" => []];
            foreach ($langs as $lang) {
                $translated = CommonWordTranslation::where('language_id', $lang->language_id)
                    ->where('common_word_id', $word->common_word_id)
                    ->value('common_word_text');
                $results[$word->common_word_index]["translations"][$lang->language_code] = $translated;
            }
        }

        return $results;
    }
}
