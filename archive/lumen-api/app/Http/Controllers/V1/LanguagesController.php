<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller as Controller;
use App\Models\Site\Language;
use Illuminate\Http\Request;

class LanguagesController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth',['except'=> ['index', 'show']]);
    }

    public function index()
    {
        return response()->json(Language::all(), 200);
    }

    public function store(Request $request)
    {
        return response()->json(Language::create($request->all()), 201);
    }

    public function show($id)
    {
        $code = 404;
        $message = $this->langNotFound();
        $language = $this->getLanguage($id);
        
        if ($language) {
            $code = 200;
            $message = $language;
        }
        return response()->json($message, $code);
    }

    public function update(Request $request, $id)
    {
        //
        $code = 404;
        $message = $this->langNotFound();
        $language = $this->updateLanguage($id, $request->all());

        if ($language) {
            $message = $language;
        }
        return response()->json($message, $code);

    }

    public function destroy($id)
    {
        //
        $code = 404;
        $message = $this->langNotFound();
        $language = $this->getLanguage($id);
        
        if ($language) {
            $code = 410;
            $message = [
                'code' => 410,
                'message' => 'language deleated!'
            ];
        }

        return response()->json($message, $code);
    }

    private function getLanguage($id) {
        return Language::where('id', $id)->orWhere('code', $id)->first();
    }

    private function updateLanguage($id, $data) {
        $key = 'code';
        if(is_numeric($id)) {
            $key ='id';
        }
        return Language::where($key, $id)->update($data);
    }

    private function langNotFound() {
        return [
            'error' => [
                'code' => 404,
                'message' => 'language does not found!',
            ],
        ];
    }
}
