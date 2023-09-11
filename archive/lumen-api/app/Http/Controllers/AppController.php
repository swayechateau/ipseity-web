<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class AppController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth',['except'=> 'index']);
    }
    public function docs()
    {
        return view('docs');
    }

    public function testToken()
    {        
        return response()->json(['is_valid' => true,'message' => 'Token is valid!! Happy Times!'], 200);
    }

}