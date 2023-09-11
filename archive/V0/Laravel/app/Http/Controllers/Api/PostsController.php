<?php
namespace App\Http\Controllers\Api;

use App\Models\Site\Setting;
use App\Models\Page\Page;
use App\CustomClass\Translator;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;

class PostsController extends BaseController
{
    public function index()
    {
        $setting = Setting::findOrFail(1);
        $langs = [];
        $pages = Page::where('post',true)->get()->sortByDesc('posted_at');
        foreach(json_decode($setting->supported_langs) as $slang) {
            $langs[$slang] = [];
            foreach($pages as $page) {
                array_push($langs[$slang], Translator::translatePage($page->id, $slang));
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
