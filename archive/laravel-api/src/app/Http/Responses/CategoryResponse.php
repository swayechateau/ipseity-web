<?php

namespace App\Http\Response;

use App\Interfaces\Response;

class CategoryResponse implements Response
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public static function sanitise($request)
    {
        
    }
}
