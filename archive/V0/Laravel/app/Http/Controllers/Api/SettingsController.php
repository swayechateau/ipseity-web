<?php
namespace App\Http\Controllers\Api;

use App\Models\Site\Setting;
use App\CustomClass\Translator;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;

class SettingsController extends BaseController
{
    public function init()
    {
        $settings = Setting::findOrFail(1);
        $settings['available_langs'] = json_decode($settings->supported_langs);
        $settings['supported_langs'] = json_decode($settings->supported_langs);
        $settings['social_links'] = json_decode($settings->social_links);
        $settings['siteWords'] = Translator::translateSite();
        return response()->json($settings, 200);
    }

    public function index()
    {
        $settings = Setting::findOrFail(1);
        $settings['supported_langs'] = json_decode($settings->supported_langs);
        $settings['social_links'] = json_decode($settings->social_links);
        $settings['siteWords'] = Translator::translateSite();
        return response()->json($settings, 200);
    }

    public function siteWords()
    {
        return response()->json(Translator::SiteTranslations(),200);
    }

    public function store(Request $request)
    {

    }

    public function show($id)
    {

    }

    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {

    }
}
