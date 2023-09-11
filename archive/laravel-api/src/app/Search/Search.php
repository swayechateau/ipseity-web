<?php
namespace App\Search;

use DB;
use App\Models\Site\Setting;
use App\Translate\Translator;

class Search
{
    public static function All ($query) 
    {
        $setting = Setting::findOrFail(1);
        $results = [];

        $projects = DB::table('project_contents')
        ->where('name', 'like', $query)
        ->orWhere('description', 'like', '%'.$query.'%')
        ->orWhere('content', 'like', '%'.$query.'%')
        ->select('project_id')
        ->distinct()
        ->get();

        $pages = DB::table('page_contents')
        ->where('name', 'like', $query)
        ->orWhere('description', 'like', '%'.$query.'%')
        ->orWhere('content', 'like', '%'.$query.'%')
        ->select('page_id')
        ->distinct()
        ->get();

        foreach(json_decode($setting->supported_langs) as $slang) {
            $results[$slang] = [];
            foreach($projects as $project) {
                array_push($results[$slang], Translator::translateProject($project->project_id, $slang));
            }
            foreach($pages as $page) {
                array_push($results[$slang], Translator::translatePage($page->page_id, $slang));
            }
        }
        return $results;
    }

    public static function Pages ($query) {
        $setting = Setting::findOrFail(1);
        $results = [];

        $pages = DB::table('page_contents')
        ->where('name', 'like', $query)
        ->orWhere('description', 'like', '%'.$query.'%')
        ->orWhere('content', 'like', '%'.$query.'%')
        ->select('page_id')
        ->distinct()
        ->get();

        foreach(json_decode($setting->supported_langs) as $slang) {
            $results[$slang] = [];
            foreach($pages as $page) {
                array_push($results[$slang], Translator::translatePage($page->page_id, $slang));
            }
        }
        return $results;
    }

    public static function Post ($query) {
        $setting = Setting::findOrFail(1);
        $results = [];

        $pages = DB::table('page_contents')
        ->where('name', 'like', $query)
        ->orWhere('description', 'like', '%'.$query.'%')
        ->orWhere('content', 'like', '%'.$query.'%')
        ->select('page_id')
        ->distinct()
        ->get();

        foreach(json_decode($setting->supported_langs) as $slang) {
            $results[$slang] = [];
            foreach($pages as $page) {
                array_push($results[$slang], Translator::translatePost($page->page_id, $slang));
            }
        }
        return $results;
    }

    public static function projects ($query) {
        $setting = Setting::findOrFail(1);
        $results = [];

        $projects = DB::table('project_contents')
        ->where('name', 'like', $query)
        ->orWhere('description', 'like', '%'.$query.'%')
        ->orWhere('content', 'like', '%'.$query.'%')
        ->select('project_id')
        ->distinct()
        ->get();

        foreach(json_decode($setting->supported_langs) as $slang) {
            $results[$slang] = [];
            foreach($projects as $project) {
                array_push($results[$slang], Translator::translateProject($project->project_id, $slang));
            }
        }
        return $reuslts;
    }

}
