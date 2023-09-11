<?php

namespace App\Http\Controllers\V1;

use App\Models\Site\Setting;
use App\Models\Project\Project;
use App\Helpers\Translator;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
use App\Models\Site\Language;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json($this->translateProjects(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json($this->createProject($request->all()), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json($this->translateProject($id), 200);
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
        // return response()->json($this->updateProject($id, $request->all()), 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = $this->getProject($id);
        if($project) {
          $project->delete();  
          return response()->json(['error' => ['code'=> 404, 'message'=> 'Project deleted exists!']]);
        }
        return response()->json(['error' => ['code'=> 404, 'message'=> 'Project no longer exists!']]);
    }

    public static function createProject(array $data) 
    {
        $data['index'] = str_replace(' ', '-', $data['index']);

        if(array_key_exists('slug', $data)) {    
            $data['slug'] = str_replace(' ', '-', str_contains($data['slug'], '/projects?p=') ? $data['slug'] : "/projects?p=".$data['slug']);
        } else {
            $data['slug'] = "/projects?p=".$data['index'];
        }

        if(array_key_exists('tags', $data)){
            // validate catigories
        }
        /*
        $project = Project::create($data);
        $settings = Setting::find(1);
        $language = Language::where('abr_2', $settings->default_lang)->first();
        return ProjectContent::create(['language_id'=> $language->id, 'project_id' => $project['id'], 'name' => $project['index']]);
        return Translator::translateProject($project['id']);
        */
    }

/*
    public static function updateProject($id, $data)
    {
        // fetch project
        if (is_numeric($id)) {
            $project = Project::findOrFail($id);
        } else {
            $project = Project::where('index', $id)->first();
        }
        // check if project exists
        if (!$project) {
            abort(404);
        }
        // update project
        if(array_key_exists("hero", $data)) {
            $project->hero = $data['hero'];
        }
        if(array_key_exists("git_url", $data)) {
            $project->git_url = $data['git_url'];
        }
        if(array_key_exists("demo_url", $data)) {
            $project->demo_url = $data['demo_url'];
        }
        if(array_key_exists("open_source", $data)) {
            $project->open_source = $data['open_source'];
        }
        if(array_key_exists("show", $data)) {
            $project->show = $data['show'];
        }
        if(array_key_exists("tags", $data)) {
            // check tags
            //$project->hero = $data['hero'];
        }
        
        $project->save();
        // create / update translations
        $translations = [];
        foreach ($data['translations'] as $key => $translation) {
            $lang = Language::where('id', $key)->orWhere('abr_2', $key)->orWhere('abr_3', $key)->first();            
            if ($lang) {
                $data = [];
                $data['language_id'] = $lang->id;
                $data['project_id'] = $project->id;
                if(isset($translation['name'])) {
                    $data['name'] = $translation['name'];
                }
                if(isset($translation['description'])) {
                    $data['description'] = $translation['description'];
                }
                if(isset($translation['content'])) {
                    $data['content'] = $translation['content'];
                }

                $content = ProjectContent::where('language_id', $lang->id)->where('project_id', $project->id)->update($data);
                if(!$content) {
                    $content = ProjectContent::create($data);
                }

                unset($data['project_id']);
                unset($data['language_id']);
                $data['lang'] = $lang->name;
                if(isset($data['content']))
                {
                    $data['content'] = json_decode($data['content']);
                }
                $translations[$lang->abr_2] = $data;
            }
        }
        $project['translations'] = $translations;
        return $project;
    }
*/
    private function getProject($id)
    {
        return app('db')->table('projects')->where('id', $id)->orWhere('index', $id)->first();
    }

    private function translateProjects() 
    {
        $projects = array();
        foreach(app('db')->table('projects')->get() as $project) {
            $projects[$project->index] = $this->translateProject($project->id);
        }
        return $projects;
    }

    private function translateProject($id) 
    {
        $project = $this->getProject($id);
        $langs = Language::all();
        $translations = array();
        foreach ($langs as $lang) {
            $content = app('db')->table('project_contents')->where('language_id', $lang->id)->where('project_id', $project->id)->first();
            
            if ($content) {
                $translations[$lang->code] = [
                    'lang' => $lang->name,
                    'name' => $content->name,
                    'description' => $content->description,
                    'content' => json_decode($content->content),
                ];
            }
        }
        $project->type = 3;
        $project->translations = $translations;
        $project->tags = json_decode($project->tags);
        return $project;
    }

}
