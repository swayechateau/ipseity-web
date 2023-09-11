<?php
namespace App\Http\Controllers\V1;

use App\Helpers\QueryHelper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;

class QueryController extends Controller
{
    public function search(Request $request)
    {
        $query = '%'.$request['q'].'%'; 
        $results = QueryHelper::All($query);
        return response()->json($results, 201);
    }

}