<?php
namespace App\Http\Controllers\Api;

use App\Models\Translation\Language;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;

class LanguagesController extends BaseController
{
    public function index()
    {
        return response()->json(Language::all(),201);
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
