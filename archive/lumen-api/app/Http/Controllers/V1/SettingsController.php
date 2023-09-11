<?php

namespace App\Http\Controllers\V1;

use App\Models\Site\Setting;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
class SettingsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth',['except'=> ['index']]);
    }
    public function index()
    {
        $settings = Setting::findOrFail(1);
        $settings['supported_langs'] = json_decode($settings->supported_langs);
        $settings['social_links'] = json_decode($settings->social_links);
        return response()->json($settings, 200);
    }

    public function update(Request $request)
    {
        $settings = Setting::findOrFail(1);
        return $request->all();
        return response()->json($settings ,201);
    }
}
