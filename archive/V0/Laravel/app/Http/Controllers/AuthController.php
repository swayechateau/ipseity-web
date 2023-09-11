<?php

namespace App\Http\Controllers;

use Auth;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        return response()->json($request, 201);
    }
}
