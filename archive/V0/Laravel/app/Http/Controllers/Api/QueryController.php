<?php
namespace App\Http\Controllers\Api;

use App\CustomClass\DBSearch;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseController as BaseController;

class QueryController extends BaseController
{
    public function search(Request $request)
    {
        $query = '%'.$request['q'].'%'; 
        $results = DBSearch::All($query);
        //DBSearch::Posts($query);
        //DBSearch::Pages($query);
        //DBSearch::Projects($query);
        //dd($results);
        //$results = 
        //$results = 
        return response()->json($results, 201);
    }

}
