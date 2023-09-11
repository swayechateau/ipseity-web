<?php

namespace App\Models\Author;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use App\Models\Language\Language;
class Author extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'author_name',
        'author_picture',
        'author_cv'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @param $words string[]
     *
     * @return void
     */
    protected static function createMultiple($authors) : void
    {
        foreach ($authors as $author) {
            $translations = $author['translations'];
            unset($author['translations']);
            $createdAuthor = self::firstOrCreate($author);
            $createdAuthor = self::firstOrCreate($author);
            foreach ($translations as $code => $translation) {
                self::createTranslation($createdAuthor->author_id, $code, $translation);
            }
        }

    }

    protected static function createTranslation($id, $code, $translation) : void
    {
        $translation['author_id'] = $id;
        $translation['language_id'] = Language::idFromCode($code);
        $translation['author_bio'] = json_encode($translation['author_bio'], true);
        AuthorTranslation::firstOrcreate($translation);
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

        $word = Author::findOrFail($id);
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
