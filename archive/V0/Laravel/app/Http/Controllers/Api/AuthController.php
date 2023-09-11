<?php
namespace App\Http\Controllers\Api;

use App\Models\Auth\User;
use App\Models\Auth\AuthLocation;
use App\Models\Auth\PasswordReset;
use App\Models\Auth\OauthAccessToken;

use Auth;
use Hash;
use Validator;
use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Http\Request;

use App\Http\Controllers\Api\BaseController as BaseController;
class AuthController extends BaseController
{
    public function admin()
    {
        try {
          $user = User::create([
            "name" => "Swaye Chateau",
            "username" => "swaye",
            "email" => "admin@swayechateau.com",
            "wizard" => true,
            "password" => Hash::make("Bardock1")
          ]);
        } catch (Exception $e) {
            return response()->json($e, $e->getCode());
        }
        return response()->json($user, 201);
    }

    public function login(Request $request)
    {
        $baseUrl = env('APP_URL','http://localhost');
        try {
          $http = new Client;
          $response = $http->post($baseUrl.'/oauth/token', [
            'form_params' => [
              'grant_type' => 'password',
              'client_id' => env('PASSPORT_CLIENT_ID'),
              'client_secret' => env('PASSPORT_CLIENT_SECRET'),
              'username' => $request->email,
              'password' => $request->password
            ],
        ]);
        } catch (RequestException $e) {
          if ($e->getCode() == 400) {
            return response()->json('Invalid Request. Please enter a username and password.', $e->getCode());
          }elseif ($e->getCode() == 401) {
            return response()->json('Credentials are incorrect. Please try again.', $e->getCode());
          }
          return response()->json('Well this is embarrasing! Gremlins are on the server!', $e->getCode());
        }
        return json_decode((string) $response->getBody(), true);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function logoutEverywhere(Request $request)
    {
        auth()->user()->tokens->each(function($token, $key){
            if($token->id !== auth()->user()->token()->id){
               $token->delete();
            }
        });
        return response()->json([
            'message' => 'Successfully logged out of everywhere... But Here!'
        ]);
    }

    public function revokeToken(Request $request)
    {
        // works - allows multiple location logout
        foreach($request->tokens as $Rtoken){
            $token = OauthAccessToken::find($Rtoken)->first();
            $token->delete();
        };

        return response()->json([
            'message' => 'Successfully logged out of selected places!'
        ]);
    }

    public function generateResetToken(Request $request)
    {
        $token = PasswordReset::where('email', $request->email)->first();
        if ($token){
            $token->token = str_random(60);
            $token->save();
        } else {
            $token = New PasswordReset;
            $token->email = $request->email;
            $token->token = str_random(60);
            $token->save();
        }
        return response()->json(["resetToken" => $token]);
    }

    public function resetPassword(Request $request)
    {
        $token = PasswordReset::where('token', $request->token)->first();
        if ($token){
            $dbUser = User::where('email', $token->email)->first();
            if ($request->password){
              $dbUser->password = Hash::make($request->password);
              $dbUser->save();
              $token->delete();
              return response()->json(["message" => "Password Changed!"]);
            }
            return response()->json(["error" => "Enter a valid Password!"]);
        }
        return response()->json(["error" => "Invalid Token!"]);
    }

    public function user(Request $request)
    {
        $token = auth('api')->user()->token()->id;
        $authLocal = AuthLocation::where('token', $token)->first();
        if (!$authLocal) {
            $authLocal = new AuthLocation;
            $authLocal->token = $token;
        }
        $authLocal->last_on = Carbon::now();
        $authLocal->ip = $request->ip();
        $authLocal->user_agent = $request->header('User-Agent');
        $authLocal->save();

        return response()->json(auth('api')->user(), 200);
    }

    public function activateUser($token)
    {
        $user = User::where('activation_token', $token)->first();
        if (!$user) {
            return response()->json([
                'message' => 'This activation token is invalid.'
            ], 404);
        }
        $user->active = true;
        $user->activation_token = '';
        $user->save();
        return $user;
    }
}
