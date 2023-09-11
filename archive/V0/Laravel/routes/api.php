<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::get('/','Api\AuthController@admin');
Route::get('/init', 'Api\SettingsController@init');
Route::get('/settings', 'Api\SettingsController@index');
Route::get('/sitewords', 'Api\SettingsController@siteWords');

Route::get('/query', 'Api\QueryController@search');
Route::get('/languages', 'Api\LanguagesController@index');
Route::get('/languages/{language}', 'Api\LanguagesController@show');

Route::get('/pages', 'Api\PagesController@index');
Route::get('/pages/{page}', 'PagesController@show');

Route::get('/posts', 'Api\PostsController@index');
Route::get('/posts/{post}', 'Api\PostsController@show');

Route::get('/projects', 'Api\ProjectsController@index');
Route::get('/projects/{project}', 'Api\ProjectsController@show');

Route::get('/cv', 'Api\CurriculumVitaesController@index');
Route::get('/cv/{resume}', 'Api\CurriculumVitaesController@show');

Route::prefix('auth')->group(function () {
    Route::post('/login', 'Api\AuthController@login');
    Route::middleware('auth:api')->get('/user','Api\AuthController@user');
});

Route::middleware('auth:api')->group(function () {
    // languages
    Route::post('/languages', 'LanguageController@store');
    Route::put('/languages/{lang}', 'LanguageController@update');
    Route::delete('/languages/{lang}', 'LanguageController@delete');
    // settings
    Route::put('/settings', 'SettingsController@update');
    // site words
    Route::post('/site-words', 'UpadateController@settings');
    Route::put('/site-words/{word}', 'UpadateController@settings');
    Route::delete('/site-words/{word}', 'UpadateController@settings');
    // categories
    Route::post('/categories', 'UpadateController@settings');
    Route::put('/categories/{category}', 'UpadateController@settings');
    Route::delete('/categories/{category}', 'UpadateController@settings');

    // pages
    Route::post('/pages', 'UpadateController@settings');
    Route::put('/pages/{pages}', 'UpadateController@settings');
    Route::delete('/pages/{pages}', 'UpadateController@settings');
    // posts
    Route::post('/posts', 'UpadateController@settings');
    Route::put('/posts/{post}', 'UpadateController@settings');
    Route::delete('/posts/{post}', 'UpadateController@settings');
    // projects
    Route::post('/projects', 'UpadateController@settings');
    Route::put('/projects/{project}', 'UpadateController@update');
    Route::delete('/projects/{project}', 'UpadateController@delete');
    // resume
    Route::post('/resume', 'ResumeController@create');
    Route::put('/resume/{cv}', 'ResumeController@update');
    Route::delete('/resume/{cv}', 'ResumeController@delete');
    // users
    Route::put('/users/{user}', 'UserController@update');
    Route::delete('/users/{user}', 'UserController@delete');
});
