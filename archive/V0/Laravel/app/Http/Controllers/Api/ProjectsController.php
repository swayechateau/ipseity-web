<?php
namespace App\Http\Controllers\Api;

use App\Models\Site\Setting;
use App\Models\Project\Project;
use App\CustomClass\Translator;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;

class ProjectsController extends BaseController
{

    public function index()
    {
        $setting = Setting::findOrFail(1);
        $langs = [];
        $projects = Project::all();
        foreach(json_decode($setting->supported_langs) as $slang) {
            $langs[$slang] = [];
            foreach($projects as $project) {
                array_push($langs[$slang], Translator::translateProject($project->id, $slang));
            }
        }
        return response()->json($langs, 201);
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {
        //
    }
}
