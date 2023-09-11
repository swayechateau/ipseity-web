<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller as Controller;
use App\Models\Site\Language;
use Illuminate\Http\Request;

class TypesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json($this->fetchTypes(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json($this->translateType($id), 200);
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
    public function translateTags(Request $request)
    {
        if(isset($request->tags)){
            return $this->translateTypes($request->tags);
        }

    }

    private function fetchTypes()
    {
        $results = array();
        $types = app('db')->table('types')->get();
        foreach ($types as $type) {
            $results[$type->type] = $this->translateType($type->id);
        }
        return $results;
    }

    public function translateTypes(array $types)
    {
        $results = array();
        $errors = array();
        foreach ($types as $type) {
            try{
               $type = $this->translateType($type); 
               $results[$type->type] = $type;
            } catch(\Exception $e) {
                $errors[] = [
                    'tag' => $type,
                    'message' => "Tag $type Not Found!",
                ];
            }
            
        }

        return [
            'results' => $results, 
            'errors' => $errors
        ];
    }

    private function translateType($type)
    {
        $langs = Language::all();
        $type = app('db')->table('types')->where('id', $type)->orWhere('type', $type)->first();
        $results = $type;
        foreach ($langs as $lang) {
            $translations[$lang->code] = [
                'type' => app('db')->table('type_translations')->where('language_id', $lang->id)->where('type_id', $type->id)->value('type_translation'),
                'description' => app('db')->table('type_translations')->where('language_id', $lang->id)->where('type_id', $type->id)->value('type_description'),
            ];
        }
        $results->translations = $translations;

        return $results;
    }
}
