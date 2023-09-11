<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\Log;
use App\Models\Page;
use App\Models\PageContent;
use App\Models\Project;
use App\Models\ProjectContent;
use App\Models\Setting;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
	public function languages()
    {
        return response()->json(Language::all(),201);
    }

    public function siteWords()
    {
        return response()->json($this->SiteTranslations(),201);
    }
    public function settings()
    {
        $settings = Setting::findOrFail(1);
        $settings['supported_langs'] = json_decode($settings->supported_langs);
        $settings['social_links'] = json_decode($settings->social_links);
        $settings['siteWords'] = $this->translateSite();
        return response()->json($settings, 201);
    }
    public function index()
    {
        $setting = Setting::findOrFail(1);
        $langs = [];
        $pages = Page::where('post',false)->get();
        foreach(json_decode($setting->supported_langs) as $slang) {
            $langs[$slang] = [];
            foreach($pages as $page) {
                $langs[$slang][$page['name']] = $this->translatePage($page->id, $slang);
            }
        }
        return response()->json($langs, 201);
    }

    public function search(Request $request)
    {
        $query = '%'.$request['query'].'%';
        $lang = $request['lang'];
        $results = [];
  
        $projects = DB::table('project_contents')
        ->where('name', 'like', $query)
        ->orWhere('description', 'like', '%'.$query.'%')
        ->orWhere('content', 'like', '%'.$query.'%')
        ->get();
        $pages = DB::table('page_contents')
        ->where('name', 'like', $query)
        ->orWhere('description', 'like', '%'.$query.'%')
        ->orWhere('content', 'like', '%'.$query.'%')
        ->get();
        foreach($projects as $project) {
            array_push($results, $this->translateProject($project->project_id, $lang));
        }
        foreach($pages as $page) {
            array_push($results, $this->translatePage($page->page_id, $lang));
        }
        $results = array_unique($results);
        $results = array_values($results);
        return response()->json($results, 201);
    }

    public function projects()
    {
        $setting = Setting::findOrFail(1);
        $langs = [];
        $projects = Project::all();
        foreach(json_decode($setting->supported_langs) as $slang) {
            $langs[$slang] = [];
            foreach($projects as $project) {
                array_push($langs[$slang], $this->translateProject($project->id, $slang));
            }
        }
        return response()->json($langs, 201);
    }

    public function posts()
    {
        $setting = Setting::findOrFail(1);
        $langs = [];
        $pages = Page::where('post',true)->get()->sortByDesc('posted_at');
        foreach(json_decode($setting->supported_langs) as $slang) {
            $langs[$slang] = [];
            foreach($pages as $page) {
                array_push($langs[$slang], $this->translatePage($page->id, $slang));
            }
        }
        return response()->json($langs, 201);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $data = [
            'eng' => [
                'home' => [

                ],
                'about' => [

                ],
                'projects' => [

                ],
                'login' => [
                    
                ]
            ]
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($page)
    {
        Page::where('name',$page)->get()->first();
        switch ($page) {
            case 'about':
        $data = [
            'title' => 'Swaye Chateau',
            'sub_title' => 'https://swayechateau.com',
            'description' => 'swaye@lechateaux.com',
            'hero' => '',
            'content' => [
                'name' => 'Swaye Chateau',
                'status' => 'Coding One Day At a Time.',
                'about' => 'Well, I am still coding the api for my portfolio... will update this section via the api',
                'skills' => [
                    'intro' => 'Here are some of my skills', 
                    'list' => [
                        [
                            'name' => "Web Design",
                            'years' => 3
                        ],
                    
                        [
                            'name' => "Web Development",
                            'years' => 7
                        ],
                        [
                            'name' => "Web Support",
                            'years' => 7
                        ]
                    ]
                ]
            ]
        ];
    }
        return response()->json($data,201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function translateSite () {
        $results = [];
        $langs = Language::all();
        $words = DB::table('site_words')->get();
        
        foreach($langs as $lang) {
           $results[$lang->abr_2] = [];
           foreach($words as $word) {
                $translated = DB::table('site_word_translations')->where('language_id',$lang->id)->where('site_word_id', $word->id)->value('text');
                $results[$lang->abr_2][$word->index] = $translated;
            } 
        }
        return $results;
    }
	
	public function SiteTranslations () {
        $results = [];
        $langs = Language::all();
        $words = DB::table('site_words')->get();

        foreach($langs as $lang) {
           $results[$lang->abr_2] = [];
           foreach($words as $word) {
                $translated = DB::table('site_word_translations')->where('language_id',$lang->id)->where('site_word_id', $word->id)->value('text');
                $results[$word->index][$lang->abr_2] = $translated;
            }
        }
        return $results;
    }
	
    public function translateProject ($project, $language) {
        $project = Project::findOrFail($project);
        $setting = Setting::all()->take(1);
        if ($language) {
            $lang = Language::where('abr_3', $language)->orWhere('abr_2', $language)->orWhere('id', $language)->first();
        } else {
            $lang = Language::where('abr_3', $setting->default_lang)->orWhere('abr_2', $setting->default_lang)->first();
        }
        $content = ProjectContent::where('language_id',$lang->id)->where('project_id', $project->id)->first();
        $project['type'] = 'project';
        $project['lang'] = $lang->name;
        $project['name'] = $content['name'];
        $project['description'] = $content['description'];
        $project['content'] = json_decode($content['content']);
        //return json_last_error_msg();
        $project['tags'] = json_decode($project['tags']);
        return $project;
    }

    public function translatePage ($page, $language) {
        $page = Page::findOrFail($page);
        $setting = Setting::all()->take(1);
        if ($language) {
            $lang = Language::where('abr_3', $language)->orWhere('abr_2', $language)->orWhere('id', $language)->first();
        } else {
            $lang = Language::where('abr_3', $setting->default_lang)->orWhere('abr_2', $setting->default_lang)->first();
        }
        
        $content = PageContent::where('language_id',$lang->id)->where('page_id', $page->id)->first();
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
        if ($page['post']) {
            $page['type'] = 'post';
        }else {
            $page['type'] = 'page';
        }
        return $page;
    }

}
