<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller as Controller;
use App\Models\Site\Language;
use Illuminate\Http\Request;

class SiteWordsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json($this->TranslationSiteWords(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // not supported yet
        app('db')->table('site_words')->insert($request->word);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return response()->json($this->TranslationSiteWord($id), 200);
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
        // not supported yet
        app('db')->table('site_word_translations')->insert($request->translations);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // not supported yet
    }

    private function TranslationSiteWords()
    {
        $results = [];
        $words =  app('db')->table('site_words')->get();
        foreach ($words as $word) {
            $results[$word->id] = $this->TranslationSiteWord($word->id);
        }
        return $results;
    }

    private function TranslationSiteWord($word)
    {
        $results = [];
        $langs = Language::all();
        $word = app('db')->table('site_words')->where('id', $word)->first();
        if ($word) {
            foreach ($langs as $lang) {
                $translated = app('db')->table('site_word_translations')->where('language_id', $lang->id)->where('site_word_id', $word->id)->value('site_word_translation');
                $results[$lang->code] = $translated;
            }
        }

        return $results;
    }

}
