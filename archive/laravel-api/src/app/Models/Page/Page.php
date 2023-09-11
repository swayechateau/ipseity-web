<?php

namespace App\Models\Page;

use App\Interfaces\Translator;
use App\Models\Site\Language;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model implements Translator
{
    use HasFactory;

    protected $fillable = [
        'parent_id', 'published',
        'index', 'hero', 'slug',
        'posted_at'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @param $pages string[]
     * 
     * @return void
     */
    protected static function createMultiple($pages) : void
    {
        foreach ($pages as $page) {
            $translations = $page['translations'];
            unset($page['translations']);
            $createdPage = Page::firstOrCreate($page);
            foreach ($translations as $code => $translation) {
                $translation['page_id'] = $createdPage->id;
                $translation['language_id'] = Language::idFromCode($code);
                $translation['content'] = json_encode($translation['content'], true);
                PageContent::firstOrcreate($translation);
            }
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
        
        $word = Page::findOrFail($id);
        $results[$word->id] = ["translations" => []];
        foreach ($langs as $lang) {
            $translated = PageContent::where('language_id', $lang->id)
            ->where('site_word_id', $word->id)
            ->value('text');
            $results[$word->id]["translations"][$lang->code] = $translated;
        
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
        
        $models = Page::all();
        foreach ($models as $model) {
            $results[$model->index] = [ 
                    'published' => $model->published,
                    'name' => $model->name, 
                    'hero' => $model->hero, 
                    'slug' => $model->slug,
                    'posted_at' => $model->posted_at,
                    "translations" => []
            ];
            if (!empty($model->parent_id)) {
                $results[$model->index]['parent_index'] = Page::getIndex(
                    $model->parent_id
                );
            }
            
            foreach ($langs as $lang) {
                $translated = PageContent::where('language_id', $lang->id)
                ->where('page_id', $model->id)
                ->first();
                unset($translated->id);
                unset($translated->language_id);
                unset($translated->post_id);
                unset($translated->created_at);
                unset($translated->deleted_at);
                
                if (!empty($translated) && !empty($translated->content)) {
                    $translated->content = json_decode($translated->content, true);
                }

                $results[$model->index]["translations"][$lang->code] = $translated;
            }
        }

        return $results;
    }
}
