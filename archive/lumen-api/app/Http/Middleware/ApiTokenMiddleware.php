<?php

namespace App\Http\Middleware;

use Closure;

class ApiTokenMiddleware
{
  public function handle($request, Closure $next)
  {
    $token = env('API_TOKEN');
    if ($request->header('api_token') === $token || $request['api_token'] === $token) {
      return $next($request);
    } else {
      return response()->json([
        'error' => [
          'code' => 401,
          'message' => 'Don\'t get cheeky! - You are not authorised beyond this point!!'
        ]
      ], 401);
    }
  }
}