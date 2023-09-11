<?php
namespace App\Translate;

use App\Models\Site\Setting;
use App\Models\Page\Page;
use App\Models\Page\PageContent;
use App\Models\Project\Project;
use App\Models\Project\ProjectContent;
use App\Models\Site\Language;
use Illuminate\Support\Facades\DB;

class Translator
{

    public static function translate($table)
    {
        $results = [];
        $langs = Language::all();
        
        $words = DB::table('site_words')->get();
        foreach ($words as $word) {
            $results[$word->id] = ["translations" => []];
            foreach ($langs as $lang) {
                $translated = DB::table('site_word_translations')
                    ->where('language_id', $lang->id)
                    ->where('site_word_id', $word->id)
                    ->value('text');
                $results[$word->id]["translations"][$lang->code] = $translated;
            }
        }

        return $results;
    }

    public static function translate($table)
    {
        $results = [];
        $langs = Language::all();
        
        $words = DB::table('site_words')->get();
        foreach ($words as $word) {
            $results[$word->id] = ["translations" => []];
            foreach ($langs as $lang) {
                $translated = DB::table('site_word_translations')
                    ->where('language_id', $lang->id)
                    ->where('site_word_id', $word->id)
                    ->value('text');
                $results[$word->id]["translations"][$lang->code] = $translated;
            }
        }

        return $results;
    }

    public static function SiteTranslations()
    {
        $results = [];
        $langs = Language::all();
        $words = DB::table('site_words')->get();

        foreach($langs as $lang) {
            $results[$lang->abr_2] = [];
            foreach($words as $word) {
                $translated = DB::table('site_word_translations')->where('language_id', $lang->id)->where('site_word_id', $word->id)->value('text');
                $results[$word->id][$lang->abr_2] = $translated;
            }
        }
        return $results;
    }

    public static function translateProject($project, $language)
    {
        $project = Project::findOrFail($project);
        $setting = Setting::all()->take(1);
        if ($language) {
            $lang = Language::where('abr_3', $language)->orWhere('abr_2', $language)->orWhere('id', $language)->first();
        } else {
            $lang = Language::where('abr_3', $setting->default_lang)->orWhere('abr_2', $setting->default_lang)->first();
        }
        $content = ProjectContent::where('language_id', $lang->id)->where('project_id', $project->id)->first();
        $project['type'] = 3;
        $project['lang'] = $lang->name;
        if($content) {
            $project['name'] = $content['name'];
            $project['description'] = $content['description'];
            $project['content'] = json_decode($content['content']);
        }
        
        //return json_last_error_msg();
        $project['tags'] = json_decode($project['tags']);
        return $project;
    }
    public static function getPage($page, $language)
    {
        $page = Page::findOrFail($page);
        $setting = Setting::all()->take(1);
        if ($language) {
            $lang = Language::where('abr_3', $language)->orWhere('abr_2', $language)->orWhere('id', $language)->first();
        } else {
            $lang = Language::where('abr_3', $setting->default_lang)->orWhere('abr_2', $setting->default_lang)->first();
        }

        return $content = PageContent::where('language_id', $lang->id)->where('page_id', $page->id)->first();
    }
    public static function translatePage($page, $language)
    {
        $page = Page::findOrFail($page);
        $setting = Setting::all()->take(1);
        if ($language) {
            $lang = Language::where('abr_3', $language)->orWhere('abr_2', $language)->orWhere('id', $language)->first();
        } else {
            $lang = Language::where('abr_3', $setting->default_lang)->orWhere('abr_2', $setting->default_lang)->first();
        }

        $content = PageContent::where('language_id', $lang->id)->where('page_id', $page->id)->first();
        
        $page['lang'] = $lang->name;
        $page['index'] = $page['name'];
        if($content) {
            $page['name'] = $content['name'];
            $page['title'] = $content['title'];
            $page['sub_title'] = $content['sub_title'];
            $page['description'] = $content['description'];
            $page['category'] = DB::table('categories_translations')->where('category_id', $content['category_id'])->where('language_id', $lang->id)->value('name');
            $page['content'] = json_decode($content['content']);
            $page['sub_title'] = $content['sub_title'];
            $page['aside'] = $content['aside'];
            $page['meta'] = json_decode($content['meta']);
            $page['tags'] = json_decode($content['tags']);
            $page['content_id'] = $content['id'];
            $page['content_updated_at'] = $content['updated_at'];
            $page['content_created_at'] = $content['created_at'];
        }
        if ($page['post']) {
            $page['type'] = 2;
        }else {
            $page['type'] = 1;
        }
        return $page;
    }

    public static function translatePost($page, $language)
    {
        $page = Page::findOrFail($page);
        if ($page['post']) {
            $setting = Setting::all()->take(1);
            if ($language) {
                $lang = Language::where('abr_3', $language)->orWhere('abr_2', $language)->orWhere('id', $language)->first();
            } else {
                $lang = Language::where('abr_3', $setting->default_lang)->orWhere('abr_2', $setting->default_lang)->first();
            }

            $content = PageContent::where('language_id', $lang->id)->where('page_id', $page->id)->first();
            $page['lang'] = $lang->name;
            $page['index'] = $page['name'];
            $page['name'] = $content['name'];
            $page['title'] = $content['title'];
            $page['sub_title'] = $content['sub_title'];
            $page['description'] = $content['description'];
            $page['category'] = DB::table('categories_translations')->where('category_id', $content['category_id'])->where('language_id', $lang->id)->value('name');
            $page['content'] = json_decode($content['content']);
            $page['sub_title'] = $content['sub_title'];
            $page['aside'] = $content['aside'];
            $page['meta'] = json_decode($content['meta']);
            $page['tags'] = json_decode($content['tags']);
            $page['content_id'] = $content['id'];
            $page['content_updated_at'] = $content['updated_at'];
            $page['content_created_at'] = $content['created_at'];
            $page['type'] = 2;

            return $page;
        }

    }
}
